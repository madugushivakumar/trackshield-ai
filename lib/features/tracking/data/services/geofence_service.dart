import 'dart:math';

import 'package:firebase_database/firebase_database.dart';

import '../models/geofence_model.dart';

class GeofenceService {

  static final FirebaseDatabase
      _database =
          FirebaseDatabase.instance;

  // =====================================
  // CHECK GEOFENCE
  // =====================================
  static Future<void>
      checkGeofences({

    required String deviceId,

    required double latitude,

    required double longitude,
  }) async {

    try {

      final snapshot =
          await _database.ref(
        "geofences",
      ).get();

      if (!snapshot.exists) {
        return;
      }

      final data =
          Map<dynamic, dynamic>.from(
        snapshot.value as Map,
      );

      for (final entry
          in data.entries) {

        final geofence =
            GeofenceModel.fromJson(
          Map<dynamic, dynamic>.from(
            entry.value,
          ),
        );

        if (!geofence.active) {
          continue;
        }

        final distance =
            calculateDistance(

          latitude,

          longitude,

          geofence.latitude,

          geofence.longitude,
        );

        if (distance >
            geofence.radius) {

          await triggerGeofenceAlert(

            deviceId: deviceId,

            geofence:
                geofence,
          );
        }
      }

    } catch (e) {

      print(
        "GEOFENCE ERROR: $e",
      );
    }
  }

  // =====================================
  // DISTANCE
  // =====================================
  static double calculateDistance(

    double lat1,

    double lon1,

    double lat2,

    double lon2,
  ) {

    const earthRadius =
        6371000;

    final dLat =
        _degToRad(lat2 - lat1);

    final dLon =
        _degToRad(lon2 - lon1);

    final a =
        sin(dLat / 2) *
            sin(dLat / 2) +

        cos(_degToRad(lat1)) *
            cos(_degToRad(lat2)) *

            sin(dLon / 2) *
            sin(dLon / 2);

    final c =
        2 * atan2(
          sqrt(a),
          sqrt(1 - a),
        );

    return earthRadius * c;
  }

  static double _degToRad(
    double deg,
  ) {

    return deg * pi / 180;
  }

  // =====================================
  // ALERT
  // =====================================
  static Future<void>
      triggerGeofenceAlert({

    required String deviceId,

    required GeofenceModel geofence,
  }) async {

    await _database.ref(
      "geofence_alerts",
    ).push().set({

      "deviceId":
          deviceId,

      "geofence":
          geofence.name,

      "timestamp":
          DateTime.now()
              .millisecondsSinceEpoch,

      "severity":
          "HIGH",
    });

    print(
      "GEOFENCE ALERT",
    );
  }
}