import 'dart:convert';

import 'package:encrypt/encrypt.dart'
    as encrypt;

import 'package:shared_preferences/shared_preferences.dart';

class EncryptedOfflineStorage {

  static final _key =
      encrypt.Key.fromUtf8(
    "12345678901234567890123456789012",
  );

  static final _iv =
      encrypt.IV.fromLength(16);

  static final _encrypter =
      encrypt.Encrypter(

    encrypt.AES(_key),
  );

  // =====================================
  // SAVE
  // =====================================
  static Future<void>
      save({

    required String key,

    required Map<String, dynamic>
        payload,
  }) async {

    final prefs =
        await SharedPreferences
            .getInstance();

    final encrypted =
        _encrypter.encrypt(

      jsonEncode(payload),

      iv: _iv,
    );

    await prefs.setString(
      key,
      encrypted.base64,
    );
  }

  // =====================================
  // LOAD
  // =====================================
  static Future<Map<String, dynamic>?>
      load(
    String key,
  ) async {

    final prefs =
        await SharedPreferences
            .getInstance();

    final value =
        prefs.getString(key);

    if (value == null) {
      return null;
    }

    final decrypted =
        _encrypter.decrypt64(

      value,

      iv: _iv,
    );

    return Map<String, dynamic>.from(
      jsonDecode(decrypted),
    );
  }
}