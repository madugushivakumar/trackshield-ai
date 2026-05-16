import 'package:flutter/foundation.dart';

import 'package:firebase_database/firebase_database.dart';

import 'package:shared_preferences/shared_preferences.dart';

import 'package:sim_data/sim_data.dart';

class SIMDetectionService {

  static final FirebaseDatabase
      _database =
          FirebaseDatabase.instance;

  // =====================================
  // START MONITORING
  // =====================================
  static Future<void>
      startMonitoring({

    required String deviceId,
  }) async {

    // =====================================
    // WEB NOT SUPPORTED
    // =====================================
    if (kIsWeb) {

      print(
        "SIM detection not supported on web",
      );

      return;
    }

    try {

      // =====================================
      // GET SIM DATA
      // =====================================
      final simData =
          await SimDataPlugin
              .getSimData();

      // =====================================
      // CHECK EMPTY SIM
      // =====================================
      if (simData.cards.isEmpty) {

        print(
          "NO SIM DETECTED",
        );

        return;
      }

      // =====================================
      // GET CURRENT SIM
      // =====================================
      final simNumber =
          simData.cards.first.displayName ??
              "UNKNOWN";

      // =====================================
      // LOCAL STORAGE
      // =====================================
      final prefs =
          await SharedPreferences
              .getInstance();

      final savedSIM =
          prefs.getString(
        "saved_sim",
      );

      // =====================================
      // FIRST TIME SAVE
      // =====================================
      if (savedSIM == null) {

        await prefs.setString(

          "saved_sim",

          simNumber,
        );

        print(
          "SIM REGISTERED",
        );

        return;
      }

      // =====================================
      // SIM CHANGED
      // =====================================
      if (savedSIM != simNumber) {

        await triggerSIMAlert(

          deviceId: deviceId,

          oldSIM: savedSIM,

          newSIM: simNumber,
        );

        // =====================================
        // UPDATE NEW SIM
        // =====================================
        await prefs.setString(

          "saved_sim",

          simNumber,
        );
      } else {

        print(
          "SIM VERIFIED",
        );
      }

    } catch (e) {

      print(
        "SIM DETECTION ERROR: $e",
      );
    }
  }

  // =====================================
  // TRIGGER ALERT
  // =====================================
  static Future<void>
      triggerSIMAlert({

    required String deviceId,

    required String oldSIM,

    required String newSIM,
  }) async {

    try {

      // =====================================
      // SIM ALERT DATABASE
      // =====================================
      await _database.ref(

        "sim_alerts/$deviceId",
      ).push().set({

        "message":
            "SIM card changed",

        "oldSIM":
            oldSIM,

        "newSIM":
            newSIM,

        "timestamp":
            DateTime.now()
                .millisecondsSinceEpoch,

        "severity":
            "CRITICAL",
      });

      // =====================================
      // AUTO SOS
      // =====================================
      await _database.ref(
        "sos_alerts",
      ).push().set({

        "deviceId":
            deviceId,

        "type":
            "SIM_SWAP",

        "timestamp":
            DateTime.now()
                .millisecondsSinceEpoch,
      });

      // =====================================
      // REMOTE LOCK
      // =====================================
      await _database.ref(

        "remote_commands/$deviceId",
      ).set({

        "action":
            "LOCK_DEVICE",

        "timestamp":
            DateTime.now()
                .millisecondsSinceEpoch,
      });

      print(
        "SIM CHANGE DETECTED",
      );

    } catch (e) {

      print(
        "SIM ALERT ERROR: $e",
      );
    }
  }
}