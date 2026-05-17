import 'package:firebase_database/firebase_database.dart';

import 'command_security_service.dart';

import 'remote_audit_service.dart';

class EnterpriseRemoteEngine {

  static final FirebaseDatabase
      _database =
          FirebaseDatabase.instance;

  // =====================================
  // SEND COMMAND
  // =====================================
  static Future<void>
      sendCommand({

    required String deviceId,

    required String action,

    required String issuedBy,
  }) async {

    try {

      final signature =
          CommandSecurityService
              .sign(

        command: action,

        deviceId: deviceId,
      );

      await _database.ref(

        "remote_commands/$deviceId",
      ).set({

        "action":
            action,

        "issuedBy":
            issuedBy,

        "timestamp":
            DateTime.now()
                .millisecondsSinceEpoch,

        "signature":
            signature,
      });

      await RemoteAuditService
          .log(

        deviceId: deviceId,

        action: action,

        status: "ISSUED",
      );

      print(
        "REMOTE COMMAND SENT",
      );

    } catch (e) {

      print(
        "REMOTE ENGINE ERROR: $e",
      );
    }
  }
}