import 'package:flutter/foundation.dart';

class USBDebuggingService {

  // =====================================
  // DEBUG STATUS
  // =====================================
  static Future<bool>
      isDebuggingEnabled() async {

    if (kDebugMode) {
      return true;
    }

    return false;
  }
}