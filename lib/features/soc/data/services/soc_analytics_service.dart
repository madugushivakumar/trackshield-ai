class SOCAnalyticsService {

  // =====================================
  // RISK SCORE
  // =====================================
  static int calculateRisk({

    required int critical,

    required int high,

    required int medium,
  }) {

    return
        (critical * 10) +
        (high * 5) +
        (medium * 2);
  }

  // =====================================
  // SOC STATUS
  // =====================================
  static String socStatus(
    int score,
  ) {

    if (score >= 100) {
      return "CRITICAL";
    }

    if (score >= 50) {
      return "HIGH_ALERT";
    }

    if (score >= 20) {
      return "ELEVATED";
    }

    return "NORMAL";
  }
}