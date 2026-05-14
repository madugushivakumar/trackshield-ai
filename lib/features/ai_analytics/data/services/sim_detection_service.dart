import 'package:mobile_number/mobile_number.dart';

class SIMDetectionService {

  static String?
      currentNumber;

  // =====================================
  // INIT SIM CHECK
  // =====================================
  static Future<void>
      initializeSIM() async {

    currentNumber =
        await MobileNumber
            .mobileNumber;
  }

  // =====================================
  // CHECK SIM CHANGED
  // =====================================
  static Future<bool>
      isSIMChanged() async {

    final latestNumber =
        await MobileNumber
            .mobileNumber;

    return latestNumber !=
        currentNumber;
  }
}
