import 'dart:async';

import 'package:flutter_background_service/flutter_background_service.dart';

import '../../features/tracking/data/firebase/firebase_tracking_service.dart';

class BackgroundService {

  static Future<void>
      initializeService() async {

    final service =
        FlutterBackgroundService();

    await service.configure(

      androidConfiguration:
          AndroidConfiguration(

        onStart: onStart,

        autoStart: true,

        isForegroundMode: true,

        foregroundServiceNotificationId:
            100,
      ),

      iosConfiguration:
          IosConfiguration(),
    );

    service.startService();
  }

  // =====================================
  // BACKGROUND START
  // =====================================
  static void onStart(
    ServiceInstance service,
  ) {

    Timer.periodic(

      const Duration(seconds: 15),

      (timer) async {

        // =================================
        // SEND BACKGROUND DATA
        // =================================
        await FirebaseTrackingService
            .updateLocation(

          deviceId: "TS-1001",

          latitude: 17.3850,

          longitude: 78.4867,
        );
      },
    );
  }
}