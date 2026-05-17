import 'dart:convert';

import 'package:crypto/crypto.dart';

class CommandSecurityService {

  static const String
      _secret =
          "TRACKSHIELD_ENTERPRISE_SECRET";

  // =====================================
  // SIGN COMMAND
  // =====================================
  static String sign({

    required String command,

    required String deviceId,
  }) {

    final payload =
        "$command-$deviceId-$_secret";

    return sha256
        .convert(
          utf8.encode(payload),
        )
        .toString();
  }

  // =====================================
  // VERIFY SIGNATURE
  // =====================================
  static bool verify({

    required String command,

    required String deviceId,

    required String signature,
  }) {

    final generated =
        sign(

      command: command,

      deviceId: deviceId,
    );

    return generated ==
        signature;
  }
}