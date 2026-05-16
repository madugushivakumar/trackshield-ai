import 'dart:math';

class GeofenceService {

  // =========================
  // CHECK GEOFENCE
  // =========================
  static bool isInsideGeofence({

    required double currentLat,

    required double currentLng,

    required double centerLat,

    required double centerLng,

    required double radius,

  }) {

    final distance =
        calculateDistance(

      currentLat,
      currentLng,

      centerLat,
      centerLng,
    );

    return distance <= radius;
  }

  // =========================
  // CALCULATE DISTANCE
  // =========================
  static double calculateDistance(

    double lat1,
    double lon1,

    double lat2,
    double lon2,

  ) {

    const double earthRadius =
        6371000;

    final dLat =
        _toRadians(lat2 - lat1);

    final dLon =
        _toRadians(lon2 - lon1);

    final a =

        sin(dLat / 2) *
            sin(dLat / 2) +

        cos(_toRadians(lat1)) *

            cos(_toRadians(lat2)) *

            sin(dLon / 2) *

            sin(dLon / 2);

    final c =
        2 *
            atan2(
              sqrt(a),
              sqrt(1 - a),
            );

    return earthRadius * c;
  }

  static double _toRadians(
    double degree,
  ) {

    return degree * pi / 180;
  }
}