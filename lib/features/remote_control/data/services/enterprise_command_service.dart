import 'package:flutter/material.dart';

import 'package:firebase_database/firebase_database.dart';

import '../../../camera_ai/data/services/camera_ai_service.dart';

import '../../../tracking/data/firebase/firebase_tracking_service.dart';

class EnterpriseCommandService {

  static final FirebaseDatabase
      _database =
          FirebaseDatabase.instance;

  // =====================================
  // START LISTENING
  // =====================================
  static Future<void>
      startListening({

    required String deviceId,

    required BuildContext context,
  }) async {

    _database
        .ref(
      "enterprise_commands/$deviceId",
    ).onValue.listen(

      (event) async {

        try {

          if (event.snapshot.value ==
              null) {
            return;
          }

          final data =
              Map<String, dynamic>.from(

            event.snapshot.value
                as Map,
          );

          final action =
              data["action"];

          print(
            "ENTERPRISE COMMAND: $action",
          );

          // ===========================
          // REMOTE LOCK
          // ===========================
          if (action ==
              "LOCK_DEVICE") {

            Navigator.pushNamed(
              context,
              "/theft-lock",
            );
          }

          // ===========================
          // REMOTE CAMERA
          // ===========================
          else if (action ==
              "CAPTURE_INTRUDER") {

            await CameraAIService
                .captureIntruder(

              deviceId: deviceId,
            );
          }

          // ===========================
          // START TRACKING
          // ===========================
          else if (action ==
              "START_TRACKING") {

            await FirebaseTrackingService
                .updateLocation(

              deviceId: deviceId,

              latitude: 0,

              longitude: 0,
            );
          }

          // ===========================
          // ALARM
          // ===========================
          else if (action ==
              "TRIGGER_ALARM") {

            ScaffoldMessenger.of(
              context,
            ).showSnackBar(

              const SnackBar(

                content: Text(
                  "REMOTE ALARM ACTIVATED",
                ),
              ),
            );
          }

        } catch (e) {

          print(
            "COMMAND ERROR: $e",
          );
        }
      },
    );
  }
}