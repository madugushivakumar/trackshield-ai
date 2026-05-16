import 'package:firebase_database/firebase_database.dart';

class RemoteAuditService {

  static final FirebaseDatabase
      _database =
          FirebaseDatabase.instance;

  // =====================================
  // LOG EVENT
  // =====================================
  static Future<void>
      log({

    required String deviceId,

    required String action,

    required String status,
  }) async {

    await _database.ref(
      "remote_audit_logs",
    ).push().set({

      "deviceId":
          deviceId,

      "action":
          action,

      "status":
          status,

      "timestamp":
          DateTime.now()
              .millisecondsSinceEpoch,
    });
  }
}