import 'package:firebase_database/firebase_database.dart';

import 'package:flutter/material.dart';

import '../../../../main.dart';

import '../../../theft_mode/presentation/pages/theft_lock_page.dart';

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

    commandRef.onValue.listen((event) {

      final data =
          event.snapshot.value;

      if (data == null) return;

      final Map command =
          data as Map;

      // =================================
      // LOCK DEVICE
      // =================================
      if (command["action"] ==
          "LOCK_DEVICE") {

        lockDevice();
      }

      // =================================
      // TRIGGER ALARM
      // =================================
      if (command["action"] ==
          "TRIGGER_ALARM") {

        triggerAlarm();
      }
    });
  }

  // =====================================
  // LOCK DEVICE
  // =====================================
  static Future<void>
      lockDevice() async {

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
  }

  // =====================================
  // ALARM
  // =====================================
  static Future<void>
      triggerAlarm() async {

    print(
      "REMOTE ALARM ACTIVATED",
    );
  }
}