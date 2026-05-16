import 'package:firebase_database/firebase_database.dart';

class ThreatAIService {

  static final FirebaseDatabase
      _database =
          FirebaseDatabase.instance;

  // =====================================
  // CALCULATE THREAT SCORE
  // =====================================
  static Future<void>
      analyzeThreat({

    required String deviceId,

    required bool simSwap,

    required bool faceIntrusion,

    required bool voiceSOS,

    required bool shutdownAttempt,

    required bool remoteLock,
  }) async {

    int score = 0;

    final List<String>
        detectedThreats = [];

    // =================================
    // SIM SWAP
    // =================================
    if (simSwap) {

      score += 30;

      detectedThreats.add(
        "SIM_SWAP",
      );
    }

    // =================================
    // FACE INTRUSION
    // =================================
    if (faceIntrusion) {

      score += 25;

      detectedThreats.add(
        "FACE_INTRUSION",
      );
    }

    // =================================
    // VOICE SOS
    // =================================
    if (voiceSOS) {

      score += 20;

      detectedThreats.add(
        "VOICE_SOS",
      );
    }

    // =================================
    // FAKE SHUTDOWN
    // =================================
    if (shutdownAttempt) {

      score += 15;

      detectedThreats.add(
        "FAKE_SHUTDOWN",
      );
    }

    // =================================
    // REMOTE LOCK
    // =================================
    if (remoteLock) {

      score += 10;

      detectedThreats.add(
        "REMOTE_LOCK",
      );
    }

    // =================================
    // THREAT LEVEL
    // =================================
    String level = "LOW";

    if (score >= 80) {

      level = "CRITICAL";

    } else if (score >= 50) {

      level = "HIGH";

    } else if (score >= 25) {

      level = "MEDIUM";
    }

    // =================================
    // SAVE ANALYSIS
    // =================================
    await _database.ref(

      "threat_analysis/$deviceId",
    ).push().set({

      "score":
          score,

      "level":
          level,

      "threats":
          detectedThreats,

      "timestamp":
          DateTime.now()
              .millisecondsSinceEpoch,
    });

    // =================================
    // AUTO ESCALATION
    // =================================
    if (

    level == "HIGH" ||

    level == "CRITICAL"

    ) {

      await triggerEscalation(

        deviceId: deviceId,

        level: level,

        score: score,
      );
    }

    print(
      "THREAT SCORE: $score",
    );
  }

  // =====================================
  // ESCALATION
  // =====================================
  static Future<void>
      triggerEscalation({

    required String deviceId,

    required String level,

    required int score,
  }) async {

    await _database.ref(

      "critical_threats",
    ).push().set({

      "deviceId":
          deviceId,

      "level":
          level,

      "score":
          score,

      "message":
          "Critical AI threat escalation",

      "timestamp":
          DateTime.now()
              .millisecondsSinceEpoch,
    });

    // AUTO SOS
    await _database.ref(
      "sos_alerts",
    ).push().set({

      "deviceId":
          deviceId,

      "type":
          "AI_THREAT_ESCALATION",

      "level":
          level,

      "score":
          score,

      "timestamp":
          DateTime.now()
              .millisecondsSinceEpoch,
    });

    print(
      "THREAT ESCALATED",
    );
  }
}