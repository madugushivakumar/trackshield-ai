import 'package:firebase_database/firebase_database.dart';

class ForensicsService {

  static final FirebaseDatabase
      _database =
          FirebaseDatabase.instance;

  // =====================================
  // STORE EVIDENCE
  // =====================================
  static Future<void>
      storeEvidence({

    required String deviceId,

    required String evidenceType,

    required String reference,
  }) async {

    await _database.ref(
      "forensics_evidence",
    ).push().set({

      "deviceId":
          deviceId,

      "evidenceType":
          evidenceType,

      "reference":
          reference,

      "timestamp":
          DateTime.now()
              .millisecondsSinceEpoch,
    });

    print(
      "FORENSIC EVIDENCE STORED",
    );
  }
}