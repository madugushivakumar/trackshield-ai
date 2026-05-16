import 'package:firebase_database/firebase_database.dart';

class SOCEngineService {

  static final FirebaseDatabase
      _database =
          FirebaseDatabase.instance;

  // =====================================
  // CREATE INCIDENT
  // =====================================
  static Future<void>
      createIncident({

    required String deviceId,

    required String type,

    required String severity,

    required String description,
  }) async {

    await _database.ref(
      "soc_incidents",
    ).push().set({

      "deviceId":
          deviceId,

      "type":
          type,

      "severity":
          severity,

      "description":
          description,

      "resolved":
          false,

      "timestamp":
          DateTime.now()
              .millisecondsSinceEpoch,
    });

    print(
      "SOC INCIDENT CREATED",
    );
  }

  // =====================================
  // RESOLVE INCIDENT
  // =====================================
  static Future<void>
      resolveIncident({

    required String incidentId,
  }) async {

    await _database.ref(
      "soc_incidents/$incidentId",
    ).update({

      "resolved":
          true,
    });
  }
}