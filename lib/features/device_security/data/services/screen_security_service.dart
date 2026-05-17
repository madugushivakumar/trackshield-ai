import 'package:flutter/foundation.dart';

import 'package:flutter_windowmanager/flutter_windowmanager.dart';

class ScreenSecurityService {

  // =====================================
  // SECURE SCREEN
  // =====================================
  static Future<void>
      secure() async {

    try {

      if (kIsWeb) {
        return;
      }

      await FlutterWindowManager
          .addFlags(

        FlutterWindowManager
            .FLAG_SECURE,
      );

      print(
        "SCREEN SECURITY ENABLED",
      );

    } catch (e) {

      print(
        "SCREEN SECURITY ERROR: $e",
      );
    }
  }

  // =====================================
  // REMOVE SECURITY
  // =====================================
  static Future<void>
      unsecure() async {

    try {

      if (kIsWeb) {
        return;
      }

      await FlutterWindowManager
          .clearFlags(

        FlutterWindowManager
            .FLAG_SECURE,
      );

    } catch (e) {

      print(
        "UNSECURE ERROR: $e",
      );
    }
  }
}