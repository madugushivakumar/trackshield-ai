import 'package:firebase_database/firebase_database.dart';

class ThreatDetectionService {

  static final database =
      FirebaseDatabase.instance.ref();

  // =====================================
  // REPORT THREAT
  // =====================================
  static Future<void>
      reportThreat({

    required String deviceId,

    required String type,

    required String message,

  }) async {

    await database
        .child("threat_alerts")
        .push()
        .set({

      "deviceId": deviceId,

      "type": type,

      "message": message,

      "timestamp":
          DateTime.now()
              .millisecondsSinceEpoch,

      "status": "ACTIVE",
    });
  }

  // =====================================
  // LIVE THREAT STREAM
  // =====================================
  static Stream<DatabaseEvent>
      threatStream() {

    return database
        .child("threat_alerts")
        .onValue;
  }
}