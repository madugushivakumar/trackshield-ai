import 'package:firebase_database/firebase_database.dart';

class AISecurityService {

  static final database =
      FirebaseDatabase.instance.ref();

  // =====================================
  // REPORT INTRUDER
  // =====================================
  static Future<void>
      reportIntruder({

    required String deviceId,

    required String reason,

  }) async {

    await database
        .child("intruder_alerts")
        .push()
        .set({

      "deviceId": deviceId,

      "reason": reason,

      "timestamp":
          DateTime.now()
              .millisecondsSinceEpoch,

      "status": "THREAT_DETECTED",
    });
  }

  // =====================================
  // LIVE ALERT STREAM
  // =====================================
  static Stream<DatabaseEvent>
      getIntruderAlerts() {

    return database
        .child("intruder_alerts")
        .onValue;
  }
}