import 'dart:async';

import 'package:battery_plus/battery_plus.dart';

import 'package:firebase_database/firebase_database.dart';

import 'package:connectivity_plus/connectivity_plus.dart';

class DeviceStatusService {

  static final FirebaseDatabase
      _database =
          FirebaseDatabase.instance;

  static final Battery
      _battery =
          Battery();

  static Timer?
      _statusTimer;

  // =====================================
  // START MONITORING
  // =====================================
  static Future<void>
      startMonitoring({

    required String deviceId,
  }) async {

    _statusTimer?.cancel();

    _statusTimer = Timer.periodic(

      const Duration(
        seconds: 15,
      ),

      (_) async {

        try {

          // ===========================
          // BATTERY
          // ===========================
          final batteryLevel =
              await _battery
                  .batteryLevel;

          // ===========================
          // CONNECTIVITY
          // ===========================
          final connectivity =
              await Connectivity()
                  .checkConnectivity();

          final isOnline =
              connectivity !=
                  ConnectivityResult.none;

          // ===========================
          // UPDATE FIREBASE
          // ===========================
          await _database.ref(

            "device_status/$deviceId",
          ).set({

            "battery":
                batteryLevel,

            "online":
                isOnline,

            "lastSeen":
                DateTime.now()
                    .millisecondsSinceEpoch,

            "status":
                "ACTIVE",

            "threatLevel":
                "LOW",
          });

          print(
            "DEVICE STATUS UPDATED",
          );

        } catch (e) {

          print(
            "STATUS ERROR: $e",
          );
        }
      },
    );
  }

  // =====================================
  // STOP MONITORING
  // =====================================
  static void stopMonitoring() {

    _statusTimer?.cancel();

    print(
      "DEVICE STATUS STOPPED",
    );
  }
}