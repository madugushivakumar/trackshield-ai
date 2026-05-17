import 'package:firebase_database/firebase_database.dart';

class ThreatTimelineService {

  static final FirebaseDatabase
      _database =
          FirebaseDatabase.instance;

  // =====================================
  // LOG EVENT
  // =====================================
  static Future<void>
      logEvent({

    required String deviceId,

    required String event,

    required String severity,
  }) async {

    await _database.ref(
      "threat_timeline",
    ).push().set({

      "deviceId":
          deviceId,

      "event":
          event,

      "severity":
          severity,

      "timestamp":
          DateTime.now()
              .millisecondsSinceEpoch,
    });
  }
}