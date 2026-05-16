import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

class OfflineGPSQueue {

  static const String
      _queueKey =
          "offline_gps_queue";

  // =====================================
  // ADD LOCATION
  // =====================================
  static Future<void>
      addLocation({

    required double latitude,

    required double longitude,
  }) async {

    final prefs =
        await SharedPreferences
            .getInstance();

    final existing =
        prefs.getStringList(
          _queueKey,
        ) ??
            [];

    existing.add(

      jsonEncode({

        "latitude":
            latitude,

        "longitude":
            longitude,

        "timestamp":
            DateTime.now()
                .millisecondsSinceEpoch,
      }),
    );

    await prefs.setStringList(
      _queueKey,
      existing,
    );
  }

  // =====================================
  // GET QUEUE
  // =====================================
  static Future<List<Map<String, dynamic>>>
      getQueue() async {

    final prefs =
        await SharedPreferences
            .getInstance();

    final existing =
        prefs.getStringList(
          _queueKey,
        ) ??
            [];

    return existing.map((e) {

      return Map<String, dynamic>.from(
        jsonDecode(e),
      );

    }).toList();
  }

  // =====================================
  // CLEAR
  // =====================================
  static Future<void>
      clearQueue() async {

    final prefs =
        await SharedPreferences
            .getInstance();

    await prefs.remove(
      _queueKey,
    );
  }
}