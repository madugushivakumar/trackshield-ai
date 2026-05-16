import 'package:firebase_database/firebase_database.dart';

class SOSAuditService {

  static final FirebaseDatabase
      _database =
          FirebaseDatabase.instance;

  // =====================================
  // LOG EVENT
  // =====================================
  static Future<void>
      log({

    required String action,

    required String deviceId,

    required String details,
  }) async {

    await _database.ref(
      "sos_audit_logs",
    ).push().set({

      "action":
          action,

      "deviceId":
          deviceId,

      "details":
          details,

      "timestamp":
          DateTime.now()
              .millisecondsSinceEpoch,
    });
  }
}