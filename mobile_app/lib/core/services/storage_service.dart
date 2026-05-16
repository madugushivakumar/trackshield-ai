import 'package:shared_preferences/shared_preferences.dart';

class StorageService {

  static const String tokenKey =
      "auth_token";


  // SAVE TOKEN
  static Future<void> saveToken(
      String token) async {

    final prefs =
        await SharedPreferences
            .getInstance();

    await prefs.setString(
      tokenKey,
      token,
    );
  }


  // GET TOKEN
  static Future<String?> getToken()
  async {

    final prefs =
        await SharedPreferences
            .getInstance();

    return prefs.getString(
      tokenKey,
    );
  }


  // REMOVE TOKEN
  static Future<void> clearToken()
  async {

    final prefs =
        await SharedPreferences
            .getInstance();

    await prefs.remove(tokenKey);
  }
}