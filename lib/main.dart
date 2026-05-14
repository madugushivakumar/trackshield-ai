import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

import 'package:firebase_core/firebase_core.dart';

import 'firebase_options.dart';

import 'config/theme/app_theme.dart';
import 'core/constants/app_constants.dart';

// =========================================
// BACKGROUND SERVICES
// =========================================
import 'core/background/background_service.dart';
import 'core/background/gps_background_service.dart';

// =========================================
// NOTIFICATIONS
// =========================================
import 'core/notifications/fcm_service.dart';
import 'core/notifications/notification_service.dart';

// =========================================
// AUTH PAGES
// =========================================
import 'features/auth/presentation/pages/splash_page.dart';
import 'features/auth/presentation/pages/auth_checker_page.dart';
import 'features/auth/presentation/pages/login_page.dart';
import 'features/auth/presentation/pages/register_page.dart';

// =========================================
// DASHBOARD
// =========================================
import 'features/dashboard/presentation/pages/dashboard_page.dart';

// =========================================
// SERVICES
// =========================================
import 'features/ai_monitoring/data/services/offline_sync_service.dart';

import 'features/network/data/services/heartbeat_service.dart';

import 'features/remote_control/data/services/remote_control_service.dart';
import 'features/shutdown_detection/data/services/shutdown_detection_service.dart';
import 'features/sim_detection/data/services/sim_detection_service.dart';
import 'features/voice_sos/data/services/voice_sos_service.dart';
import 'features/camera_ai/data/services/camera_ai_service.dart';
import 'features/live_stream/data/services/live_stream_service.dart';
import 'features/behavior_ai/data/services/behavior_ai_service.dart';
import 'features/predictive_ai/data/services/predictive_ai_service.dart';
import 'features/enterprise/data/models/device_model.dart';

import 'features/enterprise/data/services/enterprise_service.dart';

// =========================================
// GLOBAL NAVIGATOR KEY
// =========================================
final GlobalKey<NavigatorState>
    navigatorKey =
        GlobalKey<
            NavigatorState>();

Future<void> main() async {

  // =========================================
  // FLUTTER INITIALIZATION
  // =========================================
  WidgetsFlutterBinding.ensureInitialized();

  // =========================================
  // FIREBASE INITIALIZATION
  // =========================================
  await Firebase.initializeApp(

    options:
        DefaultFirebaseOptions
            .currentPlatform,
  );
  await BehaviorAIService
    .analyzeBehavior(

  deviceId: "TS-1001",

  batteryLevel: 8,

  suddenMovement: true,

  multipleUnlockAttempts: false,

  unusualLocation: false,

  networkDisconnected: true,
);
  await LiveStreamService
    .initialize();
  await VoiceSOSService
    .startListening(

  deviceId: "TS-1001",
);
await EnterpriseService
    .registerDevice(

  device: DeviceModel(

    deviceId: "TS-1001",

    organizationId: "ORG-TRACKSHIELD",

    deviceName:
        "CEO Security Device",

    status: "ONLINE",

    securityLevel:
        "MAXIMUM",

    lastSeen:
        DateTime.now()
            .millisecondsSinceEpoch,
  ),
);
await PredictiveAIService
    .predictAttack(

  deviceId: "TS-1001",

  previousThreats: 0,

  suspiciousMovement: false,

  intrusionDetected: false,

  simSwap: false,

  voiceSOS: true,
);
await CameraAIService
    .initialize();


  // =========================================
  // LOCAL NOTIFICATIONS
  // =========================================
  await NotificationService
      .initialize();

  // =========================================
  // FCM SERVICE
  // =========================================
  await FCMService
      .initialize();
      await SIMDetectionService
    .startMonitoring(

  deviceId: "TS-1001",
);

  // =========================================
  // OFFLINE STORAGE
  // =========================================
  await OfflineSyncService
      .init();

  // =========================================
  // DEVICE HEARTBEAT
  // =========================================
  await HeartbeatService
      .updateHeartbeat(

    deviceId: "TS-1001",
  );

  // =========================================
  // REMOTE CONTROL LISTENER
  // =========================================
  RemoteControlService
      .startListening(

    deviceId: "TS-1001",
  );

  // =========================================
  // BACKGROUND SERVICES
  // =========================================
  if (!kIsWeb) {

    await BackgroundService
        .initializeService();

    await GPSBackgroundService
        .initializeService();
  }
ShutdownDetectionService
    .startMonitoring(

  deviceId: "TS-1001",
);
  // =========================================
  // START APP
  // =========================================
  runApp(
    const TrackShieldApp(),
  );
}

class TrackShieldApp
    extends StatelessWidget {

  const TrackShieldApp({
    super.key,
  });

  @override
  Widget build(BuildContext context) {

    return MaterialApp(

      // =====================================
      // NAVIGATOR KEY
      // =====================================
      navigatorKey:
          navigatorKey,

      // =====================================
      // DEBUG
      // =====================================
      debugShowCheckedModeBanner:
          false,

      // =====================================
      // TITLE
      // =====================================
      title:
          AppConstants.appName,

      // =====================================
      // THEME
      // =====================================
      theme:
          AppTheme.lightTheme,

      // =====================================
      // INITIAL ROUTE
      // =====================================
      initialRoute: '/',

      // =====================================
      // ROUTES
      // =====================================
      routes: {

        // SPLASH
        '/': (context) =>
            const SplashPage(),

        // AUTH CHECKER
        '/auth-checker':
            (context) =>
                const AuthCheckerPage(),

        // LOGIN
        '/login': (context) =>
            const LoginPage(),

        // REGISTER
        '/register': (context) =>
            const RegisterPage(),

        // DASHBOARD
        '/dashboard':
            (context) =>
                const DashboardPage(),
      },
    );
  }
}