import 'package:firebase_database/firebase_database.dart';

import 'package:flutter/material.dart';

import '../../../../main.dart';

import '../../../theft_mode/presentation/pages/theft_lock_page.dart';

import 'command_security_service.dart';

import 'remote_siren_service.dart';

import 'remote_wipe_service.dart';

import 'remote_audit_service.dart';

class RemoteControlService {

  static final FirebaseDatabase
      _database =
          FirebaseDatabase.instance;

  // =====================================
  // START LISTENING
  // =====================================
  static void startListening({

    required String deviceId,
  }) {

    final commandRef =
        _database.ref(

      "remote_commands/$deviceId",
    );

    commandRef.onValue.listen((event)
    async {

      try {

        final data =
            event.snapshot.value;

        if (data == null) {
          return;
        }

        final Map<dynamic, dynamic>
            command =

            Map<dynamic, dynamic>.from(
          data as Map,
        );

        final String action =
            command["action"] ?? "";

        final String signature =
            command["signature"] ?? "";

        // ===============================
        // VERIFY SIGNATURE
        // ===============================
        final bool valid =

            CommandSecurityService
                .verify(

          command: action,

          deviceId: deviceId,

          signature: signature,
        );

        if (!valid) {

          print(
            "INVALID COMMAND SIGNATURE",
          );

          await RemoteAuditService
              .log(

            deviceId: deviceId,

            action: action,

            status:
                "INVALID_SIGNATURE",
          );

          return;
        }

        // ===============================
        // LOCK DEVICE
        // ===============================
        if (action ==
            "LOCK_DEVICE") {

          await lockDevice();

          await RemoteAuditService
              .log(

            deviceId: deviceId,

            action: action,

            status: "EXECUTED",
          );
        }

        // ===============================
        // TRIGGER ALARM
        // ===============================
        if (action ==
            "TRIGGER_ALARM") {

          await triggerAlarm();

          await RemoteAuditService
              .log(

            deviceId: deviceId,

            action: action,

            status: "EXECUTED",
          );
        }

        // ===============================
        // START SIREN
        // ===============================
        if (action ==
            "START_SIREN") {

          await RemoteSirenService
              .startSiren();

          await RemoteAuditService
              .log(

            deviceId: deviceId,

            action: action,

            status: "EXECUTED",
          );
        }

        // ===============================
        // STOP SIREN
        // ===============================
        if (action ==
            "STOP_SIREN") {

          await RemoteSirenService
              .stopSiren();

          await RemoteAuditService
              .log(

            deviceId: deviceId,

            action: action,

            status: "EXECUTED",
          );
        }

        // ===============================
        // REMOTE WIPE
        // ===============================
        if (action ==
            "REMOTE_WIPE") {

          await RemoteWipeService
              .wipe();

          await RemoteAuditService
              .log(

            deviceId: deviceId,

            action: action,

            status: "EXECUTED",
          );
        }

      } catch (e) {

        print(
          "REMOTE CONTROL ERROR: $e",
        );
      }
    });
  }

  // =====================================
  // LOCK DEVICE
  // =====================================
  static Future<void>
      lockDevice() async {

    try {

      print(
        "REMOTE LOCK ACTIVATED",
      );

      navigatorKey.currentState
          ?.pushAndRemoveUntil(

        MaterialPageRoute(

          builder: (_) =>
              const TheftLockPage(),
        ),

        (route) => false,
      );

    } catch (e) {

      print(
        "LOCK DEVICE ERROR: $e",
      );
    }
  }

  // =====================================
  // TRIGGER ALARM
  // =====================================
  static Future<void>
      triggerAlarm() async {

    try {

      print(
        "REMOTE ALARM ACTIVATED",
      );

      await RemoteSirenService
          .startSiren();

    } catch (e) {

      print(
        "ALARM ERROR: $e",
      );
    }
  }
}