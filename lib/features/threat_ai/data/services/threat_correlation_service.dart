class ThreatCorrelationService {

  // =====================================
  // CALCULATE RISK
  // =====================================
  static int calculateRisk({

    required bool simSwap,

    required bool intrusion,

    required bool voiceSOS,

    required bool suspiciousMovement,

    required int previousThreats,
  }) {

    int score = 0;

    if (simSwap) {
      score += 35;
    }

    if (intrusion) {
      score += 30;
    }

    if (voiceSOS) {
      score += 25;
    }

    if (suspiciousMovement) {
      score += 20;
    }

    score += previousThreats * 5;

    if (score > 100) {
      score = 100;
    }

    return score;
  }

  // =====================================
  // CONFIDENCE SCORE
  // =====================================
  static double confidence({

    required int score,
  }) {

    if (score >= 90) {
      return 0.99;
    }

    if (score >= 70) {
      return 0.90;
    }

    if (score >= 50) {
      return 0.75;
    }

    if (score >= 30) {
      return 0.60;
    }

    return 0.40;
  }
}