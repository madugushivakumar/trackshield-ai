import 'dart:async';

import 'package:firebase_database/firebase_database.dart';

class ShutdownDetectionService {

  static final FirebaseDatabase
      _database =
          FirebaseDatabase.instance;

  static Timer? _heartbeatTimer;

  static DateTime?
      _lastHeartbeat;

  // =====================================
  // START MONITORING
  // =====================================
  static void startMonitoring({

    required String deviceId,
  }) {

    // SEND HEARTBEAT
    _heartbeatTimer =
        Timer.periodic(

      const Duration(
        seconds: 15,
      ),

      (_) async {

        _lastHeartbeat =
            DateTime.now();

        await _database.ref(

          "device_heartbeat/$deviceId",
        ).set({

          "timestamp":
              DateTime.now()
                  .millisecondsSinceEpoch,

          "status":
              "ONLINE",
        });
      },
    );
  }

  // =====================================
  // DETECT SHUTDOWN
  // =====================================
  static Future<void>
      detectUnexpectedShutdown({

    required String deviceId,
  }) async {

    await _database.ref(

      "shutdown_alerts/$deviceId",
    ).push().set({

      "message":
          "Possible forced shutdown detected",

      "timestamp":
          DateTime.now()
              .millisecondsSinceEpoch,

      "severity":
          "HIGH",
    });

    // AUTO SOS
    await _database.ref(

      "sos_alerts",
    ).push().set({

      "deviceId":
          deviceId,

      "type":
          "FAKE_SHUTDOWN",

      "timestamp":
          DateTime.now()
              .millisecondsSinceEpoch,
    });

    print(
      "FAKE SHUTDOWN DETECTED",
    );
  }

  // =====================================
  // STOP MONITORING
  // =====================================
  static void stopMonitoring() {

    _heartbeatTimer?.cancel();
  }
}