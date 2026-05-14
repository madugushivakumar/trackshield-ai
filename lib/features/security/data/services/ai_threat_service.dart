import 'dart:math';

import 'package:firebase_database/firebase_database.dart';

class AIThreatService {

  static final database =
      FirebaseDatabase.instance.ref();

  // =====================================
  // GENERATE THREAT SCORE
  // =====================================
  static Future<void>
      generateThreatAnalysis({

    required String deviceId,

  }) async {

    final random = Random();

    final threatScore =
        random.nextInt(100);

    String level = "LOW";

    if (threatScore > 70) {

      level = "HIGH";

    } else if (threatScore > 40) {

      level = "MEDIUM";
    }

    await database
        .child("ai_threat_analysis")
        .child(deviceId)
        .set({

      "deviceId": deviceId,

      "threatScore": threatScore,

      "riskLevel": level,

      "prediction":

          threatScore > 70

              ? "High probability of theft attempt"

              : threatScore > 40

                  ? "Suspicious activity detected"

                  : "Device operating normally",

      "timestamp":
          DateTime.now()
              .millisecondsSinceEpoch,
    });
  }

  // =====================================
  // LIVE AI STREAM
  // =====================================
  static Stream<DatabaseEvent>
      threatStream(
    String deviceId,
  ) {

    return database
        .child("ai_threat_analysis")
        .child(deviceId)
        .onValue;
  }
}