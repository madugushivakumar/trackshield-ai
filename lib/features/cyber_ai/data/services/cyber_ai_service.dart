import 'dart:math';

import 'package:firebase_database/firebase_database.dart';

class CyberAIService {

  static final database =
      FirebaseDatabase.instance.ref();

  // =====================================
  // GENERATE AI THREAT SCORE
  // =====================================
  static int generateThreatScore() {

    final random = Random();

    return 40 + random.nextInt(60);
  }

  // =====================================
  // GENERATE RISK LEVEL
  // =====================================
  static String getRiskLevel(
    int score,
  ) {

    if (score >= 85) {
      return "CRITICAL";
    }

    if (score >= 70) {
      return "HIGH";
    }

    if (score >= 55) {
      return "MEDIUM";
    }

    return "LOW";
  }

  // =====================================
  // PUSH AI ANALYTICS
  // =====================================
  static Future<void>
      pushThreatAnalytics({

    required String deviceId,

  }) async {

    final score =
        generateThreatScore();

    final level =
        getRiskLevel(score);

    await database
        .child("ai_analytics")
        .push()
        .set({

      "deviceId": deviceId,

      "threatScore": score,

      "riskLevel": level,

      "timestamp":
          DateTime.now()
              .millisecondsSinceEpoch,
    });
  }

  // =====================================
  // REMOTE WIPE
  // =====================================
  static Future<void>
      remoteWipe({

    required String deviceId,

  }) async {

    await database
        .child("remote_wipe")
        .child(deviceId)
        .set({

      "wipe": true,

      "timestamp":
          DateTime.now()
              .millisecondsSinceEpoch,
    });
  }

  // =====================================
  // GET ANALYTICS
  // =====================================
  static Stream<DatabaseEvent>
      getAnalytics() {

    return database
        .child("ai_analytics")
        .onValue;
  }
}