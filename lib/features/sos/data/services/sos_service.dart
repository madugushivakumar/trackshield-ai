import 'package:firebase_database/firebase_database.dart';

class SOSService {

  static final database =
      FirebaseDatabase.instance.ref();

  // =====================================
  // SEND SOS ALERT
  // =====================================
  static Future<void> sendSOS({

    required String deviceId,

    required double latitude,

    required double longitude,

  }) async {

    await database
        .child("sos_alerts")
        .child(deviceId)
        .set({

      "deviceId": deviceId,

      "latitude": latitude,

      "longitude": longitude,

      "timestamp":
          DateTime.now()
              .millisecondsSinceEpoch,

      "status": "ACTIVE",
    });
  }

  // =====================================
  // LISTEN TO SOS ALERTS
  // =====================================
  static Stream<DatabaseEvent>
      getSOSAlerts() {

    return database
        .child("sos_alerts")
        .onValue;
  }
}