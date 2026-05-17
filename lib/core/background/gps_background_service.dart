import 'dart:async';

import 'package:flutter/foundation.dart';

import 'package:flutter_background_service/flutter_background_service.dart';

import 'package:geolocator/geolocator.dart';

import 'package:shared_preferences/shared_preferences.dart';

import '../../features/tracking/data/firebase/firebase_tracking_service.dart';

class GPSBackgroundService {

  // =====================================
  // INITIALIZE SERVICE
  // =====================================
  static Future<void>
      initializeService() async {

    // =====================================
    // WEB NOT SUPPORTED
    // =====================================
    if (kIsWeb) {

      print(
        "GPS Background Service not supported on web",
      );

      return;
    }

    try {

      final service =
          FlutterBackgroundService();

      await service.configure(

        androidConfiguration:
            AndroidConfiguration(

          onStart: onStart,

          autoStart: false,

          isForegroundMode: true,

          foregroundServiceNotificationId:
              999,
        ),

        iosConfiguration:
            IosConfiguration(),
      );

      print(
        "GPS BACKGROUND SERVICE INITIALIZED",
      );

    } catch (e) {

      print(
        "GPS INIT ERROR: $e",
      );
    }
  }

  // =====================================
  // START SERVICE
  // =====================================
  static Future<void>
      startService() async {

    // =====================================
    // WEB NOT SUPPORTED
    // =====================================
    if (kIsWeb) {

      print(
        "Background tracking disabled on web",
      );

      return;
    }

    try {

      final service =
          FlutterBackgroundService();

      await service.startService();

      print(
        "GPS BACKGROUND SERVICE STARTED",
      );

    } catch (e) {

      print(
        "START SERVICE ERROR: $e",
      );
    }
  }

  // =====================================
  // STOP SERVICE
  // =====================================
  static Future<void>
      stopService() async {

    try {

      if (kIsWeb) {

        print(
          "Stop service ignored on web",
        );

        return;
      }

      final service =
          FlutterBackgroundService();

      service.invoke("stop");

      print(
        "GPS BACKGROUND SERVICE STOPPED",
      );

    } catch (e) {

      print(
        "STOP SERVICE ERROR: $e",
      );
    }
  }

  // =====================================
  // BACKGROUND START
  // =====================================
  @pragma('vm:entry-point')
  static void onStart(
    ServiceInstance service,
  ) {

    // =====================================
    // PERIODIC TRACKING
    // =====================================
    Timer.periodic(

      const Duration(
        seconds: 10,
      ),

      (timer) async {

        try {

          // ===============================
          // FOREGROUND NOTIFICATION
          // ===============================
          if (service
              is AndroidServiceInstance) {

            if (await service
                .isForegroundService()) {

              service
                  .setForegroundNotificationInfo(

                title:
                    "TrackShield AI",

                content:
                    "Background Tracking Active",
              );
            }
          }

          // ===============================
          // LOCATION PERMISSION
          // ===============================
          bool serviceEnabled =
              await Geolocator
                  .isLocationServiceEnabled();

          if (!serviceEnabled) {

            print(
              "LOCATION SERVICE DISABLED",
            );

            return;
          }

          LocationPermission permission =
              await Geolocator
                  .checkPermission();

          if (
          permission ==
              LocationPermission.denied
          ) {

            permission =
                await Geolocator
                    .requestPermission();
          }

          if (

          permission ==
                  LocationPermission.denied ||

              permission ==
                  LocationPermission.deniedForever

          ) {

            print(
              "LOCATION PERMISSION DENIED",
            );

            return;
          }

          // ===============================
          // GET LOCATION
          // ===============================
          Position position =
              await Geolocator
                  .getCurrentPosition(

            desiredAccuracy:
                LocationAccuracy.high,
          );

          // ===============================
          // LOCAL STORAGE
          // ===============================
          final prefs =
              await SharedPreferences
                  .getInstance();

          await prefs.setDouble(

            "last_latitude",

            position.latitude,
          );

          await prefs.setDouble(

            "last_longitude",

            position.longitude,
          );

          // ===============================
          // FIREBASE SYNC
          // ===============================
          await FirebaseTrackingService
              .updateLocation(

            deviceId: "TS-1001",

            latitude:
                position.latitude,

            longitude:
                position.longitude,
          );

          print(

            "BACKGROUND LOCATION: "

            "${position.latitude}, "

            "${position.longitude}",
          );

        } catch (e) {

          print(
            "BACKGROUND TRACKING ERROR: $e",
          );
        }
      },
    );

    // =====================================
    // STOP EVENT
    // =====================================
    service.on("stop")
        .listen((event) {

      service.stopSelf();
    });
  }
}