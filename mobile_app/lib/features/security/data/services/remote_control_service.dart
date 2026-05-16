import 'package:firebase_database/firebase_database.dart';

class RemoteControlService {

  static final database =
      FirebaseDatabase.instance.ref();

  // =====================================
  // TRIGGER REMOTE ALARM
  // =====================================
  static Future<void>
      triggerAlarm({

    required String deviceId,

  }) async {

    await database
        .child("remote_controls")
        .child(deviceId)
        .update({

      "alarm": true,

      "timestamp":
          DateTime.now()
              .millisecondsSinceEpoch,
    });
  }

  // =====================================
  // STOP REMOTE ALARM
  // =====================================
  static Future<void>
      stopAlarm({

    required String deviceId,

  }) async {

    await database
        .child("remote_controls")
        .child(deviceId)
        .update({

      "alarm": false,

      "timestamp":
          DateTime.now()
              .millisecondsSinceEpoch,
    });
  }

  // =====================================
  // ENABLE LOCKDOWN
  // =====================================
  static Future<void>
      enableLockdown({

    required String deviceId,

  }) async {

    await database
        .child("remote_controls")
        .child(deviceId)
        .update({

      "lockdown": true,

      "timestamp":
          DateTime.now()
              .millisecondsSinceEpoch,
    });
  }

  // =====================================
  // DISABLE LOCKDOWN
  // =====================================
  static Future<void>
      disableLockdown({

    required String deviceId,

  }) async {

    await database
        .child("remote_controls")
        .child(deviceId)
        .update({

      "lockdown": false,

      "timestamp":
          DateTime.now()
              .millisecondsSinceEpoch,
    });
  }

  // =====================================
  // LIVE CONTROL STREAM
  // =====================================
  static Stream<DatabaseEvent>
      controlStream(
    String deviceId,
  ) {

    return database
        .child("remote_controls")
        .child(deviceId)
        .onValue;
  }
}