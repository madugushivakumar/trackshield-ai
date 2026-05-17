import 'package:firebase_database/firebase_database.dart';

import '../services/geofence_service.dart';

class FirebaseTrackingService {

  static final DatabaseReference
      database =
          FirebaseDatabase.instance.ref();

  // =====================================
  // UPDATE LOCATION
  // =====================================
  static Future<void>
      updateLocation({

    required String deviceId,

    required double latitude,

    required double longitude,
  }) async {

    try {

      // ===============================
      // SAVE LOCATION
      // ===============================
      await database
          .child("devices")
          .child(deviceId)
          .set({

        "latitude":
            latitude,

        "longitude":
            longitude,

        "timestamp":
            DateTime.now()
                .millisecondsSinceEpoch,
      });

      // ===============================
      // SAVE HISTORY
      // ===============================
      await database
          .child("location_history")
          .child(deviceId)
          .push()
          .set({

        "latitude":
            latitude,

        "longitude":
            longitude,

        "timestamp":
            DateTime.now()
                .millisecondsSinceEpoch,
      });

      // ===============================
      // CHECK GEOFENCES
      // ===============================
      await GeofenceService
          .checkGeofences(

        deviceId: deviceId,

        latitude: latitude,

        longitude: longitude,
      );

      print(
        "LOCATION UPDATED",
      );

    } catch (e) {

      print(
        "TRACKING ERROR: $e",
      );
    }
  }

  // =====================================
  // LIVE LOCATION
  // =====================================
  static Stream<DatabaseEvent>
      getLiveLocation(
    String deviceId,
  ) {

    return database
        .child("devices")
        .child(deviceId)
        .onValue;
  }

  // =====================================
  // LOCATION HISTORY
  // =====================================
  static Stream<DatabaseEvent>
      getLocationHistory(
    String deviceId,
  ) {

    return database
        .child("location_history")
        .child(deviceId)
        .onValue;
  }
}