import 'package:firebase_database/firebase_database.dart';

class FaceEventLogger {

  static final FirebaseDatabase
      _database =
          FirebaseDatabase.instance;

  // =====================================
  // LOG EVENT
  // =====================================
  static Future<void>
      log({

    required String deviceId,

    required String status,

    required String risk,
  }) async {

    await _database.ref(
      "face_ai_logs",
    ).push().set({

      "deviceId":
          deviceId,

      "status":
          status,

      "risk":
          risk,

      "timestamp":
          DateTime.now()
              .millisecondsSinceEpoch,
    });
  }
}