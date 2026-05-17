import 'package:firebase_database/firebase_database.dart';

class SecurityService {

  static final database =
      FirebaseDatabase.instance.ref();

  // =====================================
  // SEND INTRUDER ALERT
  // =====================================
  static Future<void>
      sendIntruderAlert({

    required String deviceId,

    required String message,

  }) async {

    await database
        .child("intruder_alerts")
        .push()
        .set({

      "deviceId": deviceId,

      "message": message,

      "timestamp":
          DateTime.now()
              .millisecondsSinceEpoch,
    });
  }

  // =====================================
  // REMOTE ALARM
  // =====================================
  static Future<void>
      triggerRemoteAlarm({

    required String deviceId,

  }) async {

    await database
        .child("remote_alarm")
        .child(deviceId)
        .set({

      "enabled": true,

      "timestamp":
          DateTime.now()
              .millisecondsSinceEpoch,
    });
  }

  // =====================================
  // STOP REMOTE ALARM
  // =====================================
  static Future<void>
      stopRemoteAlarm({

    required String deviceId,

  }) async {

    await database
        .child("remote_alarm")
        .child(deviceId)
        .set({

      "enabled": false,

      "timestamp":
          DateTime.now()
              .millisecondsSinceEpoch,
    });
  }

  // =====================================
  // LISTEN REMOTE ALARM
  // =====================================
  static Stream<DatabaseEvent>
      listenRemoteAlarm(
    String deviceId,
  ) {

    return database
        .child("remote_alarm")
        .child(deviceId)
        .onValue;
  }

  // =====================================
  // GET INTRUDER ALERTS
  // =====================================
  static Stream<DatabaseEvent>
      getIntruderAlerts() {

    return database
        .child("intruder_alerts")
        .onValue;
  }
}