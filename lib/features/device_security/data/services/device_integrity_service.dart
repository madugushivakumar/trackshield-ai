import 'package:flutter/foundation.dart';

import 'package:jailbreak_root_detection/jailbreak_root_detection.dart';

class DeviceIntegrityService {

  // =====================================
  // ROOT CHECK
  // =====================================
  static Future<bool>
      isCompromised() async {

    try {

      if (kIsWeb) {
        return false;
      }

      final rooted =
          await JailbreakRootDetection
              .instance
              .isJailBroken;

      final developerMode =
          await JailbreakRootDetection
              .instance
              .isDeveloperMode;

      return rooted ||
          developerMode;

    } catch (e) {

      print(
        "INTEGRITY ERROR: $e",
      );

      return false;
    }
  }

  // =====================================
  // SECURITY STATUS
  // =====================================
  static Future<String>
      securityLevel() async {

    final compromised =
        await isCompromised();

    if (compromised) {
      return "COMPROMISED";
    }

    return "SECURE";
  }
}