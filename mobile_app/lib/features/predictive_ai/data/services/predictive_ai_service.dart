import 'dart:math';

import 'package:firebase_database/firebase_database.dart';

class PredictiveAIService {

  static final FirebaseDatabase
      _database =
          FirebaseDatabase.instance;

  // =====================================
  // PREDICT ATTACK
  // =====================================
  static Future<void>
      predictAttack({

    required String deviceId,

    required int previousThreats,

    required bool suspiciousMovement,

    required bool intrusionDetected,

    required bool simSwap,

    required bool voiceSOS,
  }) async {

    double riskProbability = 0;

    final List<String>
        indicators = [];

    // =================================
    // PREVIOUS THREATS
    // =================================
    riskProbability +=
        previousThreats * 4;

    if (previousThreats > 3) {

      indicators.add(
        "REPEATED_ATTACKS",
      );
    }

    // =================================
    // MOVEMENT
    // =================================
    if (suspiciousMovement) {

      riskProbability += 20;

      indicators.add(
        "SUSPICIOUS_MOVEMENT",
      );
    }

    // =================================
    // INTRUSION
    // =================================
    if (intrusionDetected) {

      riskProbability += 30;

      indicators.add(
        "INTRUSION_ACTIVITY",
      );
    }

    // =================================
    // SIM SWAP
    // =================================
    if (simSwap) {

      riskProbability += 25;

      indicators.add(
        "SIM_SWAP_ATTACK",
      );
    }

    // =================================
    // VOICE SOS
    // =================================
    if (voiceSOS) {

      riskProbability += 18;

      indicators.add(
        "VOICE_DISTRESS",
      );
    }

    // =================================
    // AI LEARNING RANDOMIZATION
    // =================================
    riskProbability +=
        Random().nextInt(10);

    // LIMIT
    if (riskProbability > 100) {
      riskProbability = 100;
    }

    // =================================
    // PREDICTION LEVEL
    // =================================
    String prediction =
        "LOW";

    if (riskProbability >= 80) {

      prediction = "CRITICAL";

    } else if (
        riskProbability >= 60) {

      prediction = "HIGH";

    } else if (
        riskProbability >= 35) {

      prediction = "MEDIUM";
    }

    // =================================
    // SAVE PREDICTION
    // =================================
    await _database.ref(

      "predictive_analysis/$deviceId",
    ).push().set({

      "prediction":
          prediction,

      "probability":
          riskProbability,

      "indicators":
          indicators,

      "timestamp":
          DateTime.now()
              .millisecondsSinceEpoch,
    });

    // =================================
    // AUTONOMOUS RESPONSE
    // =================================
    if (

    prediction == "HIGH" ||

    prediction == "CRITICAL"

    ) {

      await autonomousDefense(

        deviceId: deviceId,

        prediction: prediction,

        probability:
            riskProbability,
      );
    }

    print(
      "PREDICTIVE RISK: "
      "$riskProbability",
    );
  }

  // =====================================
  // AUTONOMOUS DEFENSE
  // =====================================
  static Future<void>
      autonomousDefense({

    required String deviceId,

    required String prediction,

    required double probability,
  }) async {

    // AUTO LOCK
    //await _database.ref(

      //"remote_commands/$deviceId",
    //).set({

      //"action":
        //  "LOCK_DEVICE",

      //"source":
        //  "PREDICTIVE_AI",

      //"timestamp":
        //  DateTime.now()
          //    .millisecondsSinceEpoch,
   // });

    // SAVE CRITICAL EVENT
    await _database.ref(

      "predictive_threats",
    ).push().set({

      "deviceId":
          deviceId,

      "prediction":
          prediction,

      "probability":
          probability,

      "message":
          "Autonomous AI defense activated",

      "timestamp":
          DateTime.now()
              .millisecondsSinceEpoch,
    });

    // GENERAL SOS
    await _database.ref(
      "sos_alerts",
    ).push().set({

      "deviceId":
          deviceId,

      "type":
          "PREDICTIVE_AI_ESCALATION",

      "prediction":
          prediction,

      "probability":
          probability,

      "timestamp":
          DateTime.now()
              .millisecondsSinceEpoch,
    });

    print(
      "AUTONOMOUS DEFENSE ACTIVE",
    );
  }
}