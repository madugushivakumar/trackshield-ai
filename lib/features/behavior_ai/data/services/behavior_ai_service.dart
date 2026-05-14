import 'dart:math';

import 'package:firebase_database/firebase_database.dart';

class BehaviorAIService {

  static final FirebaseDatabase
      _database =
          FirebaseDatabase.instance;

  // =====================================
  // ANALYZE DEVICE BEHAVIOR
  // =====================================
  static Future<void>
      analyzeBehavior({

    required String deviceId,

    required double batteryLevel,

    required bool suddenMovement,

    required bool multipleUnlockAttempts,

    required bool unusualLocation,

    required bool networkDisconnected,
  }) async {

    int anomalyScore = 0;

    final List<String>
        anomalies = [];

    // =================================
    // BATTERY ANOMALY
    // =================================
    if (batteryLevel < 10) {

      anomalyScore += 10;

      anomalies.add(
        "LOW_BATTERY",
      );
    }

    // =================================
    // SUDDEN MOVEMENT
    // =================================
    if (suddenMovement) {

      anomalyScore += 25;

      anomalies.add(
        "SUDDEN_MOVEMENT",
      );
    }

    // =================================
    // UNLOCK ATTACK
    // =================================
    if (multipleUnlockAttempts) {

      anomalyScore += 35;

      anomalies.add(
        "UNLOCK_ATTACK",
      );
    }

    // =================================
    // LOCATION ANOMALY
    // =================================
    if (unusualLocation) {

      anomalyScore += 20;

      anomalies.add(
        "UNUSUAL_LOCATION",
      );
    }

    // =================================
    // NETWORK ANOMALY
    // =================================
    if (networkDisconnected) {

      anomalyScore += 15;

      anomalies.add(
        "NETWORK_DISCONNECTED",
      );
    }

    // =================================
    // AI RANDOMIZATION
    // =================================
    anomalyScore +=
        Random().nextInt(10);

    // =================================
    // THREAT LEVEL
    // =================================
    String level = "LOW";

    if (anomalyScore >= 70) {

      level = "CRITICAL";

    } else if (anomalyScore >= 45) {

      level = "HIGH";

    } else if (anomalyScore >= 20) {

      level = "MEDIUM";
    }

    // =================================
    // SAVE ANALYSIS
    // =================================
    await _database.ref(

      "behavior_analysis/$deviceId",
    ).push().set({

      "score":
          anomalyScore,

      "level":
          level,

      "anomalies":
          anomalies,

      "timestamp":
          DateTime.now()
              .millisecondsSinceEpoch,
    });

    // =================================
    // ESCALATION
    // =================================
    if (

    level == "HIGH" ||

    level == "CRITICAL"

    ) {

     // await escalateThreat(

       // deviceId: deviceId,

        //level: level,

        //score: anomalyScore,
      //);
    }

    print(
      "BEHAVIOR SCORE: "
      "$anomalyScore",
    );
  }

  // =====================================
  // ESCALATE
  // =====================================
  static Future<void>
      escalateThreat({

    required String deviceId,

    required String level,

    required int score,
  }) async {

    await _database.ref(

      "behavior_threats",
    ).push().set({

      "deviceId":
          deviceId,

      "level":
          level,

      "score":
          score,

      "message":
          "Behavior anomaly detected",

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
          "BEHAVIOR_ANOMALY",

      "level":
          level,

      "score":
          score,

      "timestamp":
          DateTime.now()
              .millisecondsSinceEpoch,
    });

    print(
      "BEHAVIOR ESCALATION",
    );
  }
}