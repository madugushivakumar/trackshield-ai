import 'package:firebase_database/firebase_database.dart';

class SecurityAuditService {

  static final FirebaseDatabase
      _database =
          FirebaseDatabase.instance;

  // =====================================
  // LOG EVENT
  // =====================================
  static Future<void>
      log({

    required String deviceId,

    required String type,

    required String status,
  }) async {

    await _database.ref(
      "device_security_logs",
    ).push().set({

      "deviceId":
          deviceId,

      "type":
          type,

      "status":
          status,

      "timestamp":
          DateTime.now()
              .millisecondsSinceEpoch,
    });
  }
}