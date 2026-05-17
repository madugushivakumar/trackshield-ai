import 'dart:async';

import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:geolocator/geolocator.dart';

class LocationService {

  // =========================
  // FIREBASE
  // =========================
  static final FirebaseFirestore
      firestore =
      FirebaseFirestore.instance;

  // =========================
  // GET CURRENT LOCATION
  // =========================
  static Future<Position?>
      getCurrentLocation() async {

    bool serviceEnabled;

    LocationPermission permission;

    // =========================
    // CHECK GPS
    // =========================
    serviceEnabled =
        await Geolocator
            .isLocationServiceEnabled();

    if (!serviceEnabled) {
      return null;
    }

    // =========================
    // CHECK PERMISSION
    // =========================
    permission =
        await Geolocator
            .checkPermission();

    if (permission ==
        LocationPermission.denied) {

      permission =
          await Geolocator
              .requestPermission();

      if (permission ==
          LocationPermission.denied) {

        return null;
      }
    }

    if (permission ==
        LocationPermission
            .deniedForever) {

      return null;
    }

    // =========================
    // RETURN LOCATION
    // =========================
    return await Geolocator
        .getCurrentPosition(

      desiredAccuracy:
          LocationAccuracy.bestForNavigation,
    );
  }

  // =========================
  // LIVE LOCATION STREAM
  // =========================
  static Stream<Position>
      getLiveLocation() {

    return Geolocator
        .getPositionStream(

      locationSettings:
          const LocationSettings(

        accuracy:
            LocationAccuracy.bestForNavigation,

        distanceFilter: 1,
      ),
    );
  }

  // =========================
  // SAVE LOCATION TO FIREBASE
  // =========================
  static Future<void>
      uploadLiveLocation({

    required String userId,

    required double latitude,

    required double longitude,

  }) async {

    await firestore
        .collection("live_locations")
        .doc(userId)
        .set({

      "latitude": latitude,

      "longitude": longitude,

      "updatedAt":
          FieldValue.serverTimestamp(),

      "isOnline": true,
    });
  }

  // =========================
  // STOP TRACKING
  // =========================
  static Future<void>
      stopTracking({

    required String userId,

  }) async {

    await firestore
        .collection("live_locations")
        .doc(userId)
        .update({

      "isOnline": false,
    });
  }

  // =========================
  // GET TRACKED DEVICE STREAM
  // =========================
  static Stream<DocumentSnapshot>
      getTrackedDevice(

    String userId,

  ) {

    return firestore
        .collection("live_locations")
        .doc(userId)
        .snapshots();
  }
}