import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

class OfflineSOSQueue {

  static const String
      _key =
          "offline_sos_queue";

  // =====================================
  // ADD SOS
  // =====================================
  static Future<void>
      addSOS({

    required Map<String, dynamic>
        payload,
  }) async {

    final prefs =
        await SharedPreferences
            .getInstance();

    final queue =
        prefs.getStringList(
          _key,
        ) ??
            [];

    queue.add(
      jsonEncode(payload),
    );

    await prefs.setStringList(
      _key,
      queue,
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

    final queue =
        prefs.getStringList(
          _key,
        ) ??
            [];

    return queue.map((e) {

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

    await prefs.remove(_key);
  }
}