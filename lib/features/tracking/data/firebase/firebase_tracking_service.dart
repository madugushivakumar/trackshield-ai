import 'package:firebase_database/firebase_database.dart';

class FirebaseTrackingService {

  static final database =
      FirebaseDatabase.instance.ref();

  // SEND LOCATION
  static Future<void> updateLocation({

    required String deviceId,
    required double latitude,
    required double longitude,

  }) async {

    await database
        .child("devices")
        .child(deviceId)
        .set({

      "latitude": latitude,
      "longitude": longitude,
      "timestamp":
          DateTime.now()
              .millisecondsSinceEpoch,
    });
  }

  // RECEIVE LIVE LOCATION
  static Stream<DatabaseEvent>
      getLiveLocation(String deviceId) {

    return database
        .child("devices")
        .child(deviceId)
        .onValue;
  }
}