import 'package:flutter/material.dart';
import 'package:firebase_core/firebase_core.dart';

import 'config/theme/app_theme.dart';
import 'core/constants/app_constants.dart';
import 'firebase_options.dart';

import 'features/auth/presentation/pages/login_page.dart';
import 'features/auth/presentation/pages/register_page.dart';
import 'features/auth/presentation/pages/splash_page.dart';
import 'features/auth/presentation/pages/auth_checker_page.dart';
import 'features/dashboard/presentation/pages/dashboard_page.dart';

import 'core/background/background_service.dart';

void main() async {

  WidgetsFlutterBinding.ensureInitialized();

  await Firebase.initializeApp(
    options: DefaultFirebaseOptions.currentPlatform,
  );
await BackgroundService.initializeService();
  runApp(const TrackShieldApp());
}

class TrackShieldApp extends StatelessWidget {
  const TrackShieldApp({super.key});

  @override
  Widget build(BuildContext context) {

    return MaterialApp(

      debugShowCheckedModeBanner: false,

      title: AppConstants.appName,

      theme: AppTheme.lightTheme,

      initialRoute: '/',

      routes: {
'/dashboard': (context) => const DashboardPage(),
        '/': (context) =>
            const SplashPage(),

        '/auth-checker': (context) =>
            const AuthCheckerPage(),

        '/login': (context) =>
            const LoginPage(),

        '/register': (context) =>
            const RegisterPage(),
      },
    );
  }
}