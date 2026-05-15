class ThreatAnalyticsService {

  // =====================================
  // RISK LEVEL
  // =====================================
  static String level(
    int score,
  ) {

    if (score >= 85) {
      return "CRITICAL";
    }

    if (score >= 60) {
      return "HIGH";
    }

    if (score >= 40) {
      return "MEDIUM";
    }

    return "LOW";
  }

  // =====================================
  // COLOR
  // =====================================
  static String color(
    int score,
  ) {

    if (score >= 85) {
      return "#ff0000";
    }

    if (score >= 60) {
      return "#ff6600";
    }

    if (score >= 40) {
      return "#ffcc00";
    }

    return "#00ff00";
  }
}