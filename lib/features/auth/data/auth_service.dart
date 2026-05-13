import 'dart:convert';

import 'package:http/http.dart' as http;

class AuthService {

  static const String baseUrl =
      "http://localhost:5000/api/auth";

  // ================= LOGIN =================

  static Future<Map<String, dynamic>> loginUser({
    required String email,
    required String password,
  }) async {

    final response = await http.post(

      Uri.parse("$baseUrl/login"),

      headers: {
        "Content-Type": "application/json",
      },

      body: jsonEncode({
        "email": email,
        "password": password,
      }),
    );

    return jsonDecode(response.body);
  }


  // ================= REGISTER =================

  static Future<Map<String, dynamic>> registerUser({
    required String fullName,
    required String email,
    required String password,
  }) async {

    final response = await http.post(

      Uri.parse("$baseUrl/register"),

      headers: {
        "Content-Type": "application/json",
      },

      body: jsonEncode({
        "fullName": fullName,
        "email": email,
        "password": password,
      }),
    );

    return jsonDecode(response.body);
  }
}