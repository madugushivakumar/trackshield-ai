class FaceAnalyticsService {

  // =====================================
  // CONFIDENCE LEVEL
  // =====================================
  static String confidenceLevel(
    double confidence,
  ) {

    if (confidence >= 0.90) {
      return "VERY_HIGH";
    }

    if (confidence >= 0.75) {
      return "HIGH";
    }

    if (confidence >= 0.60) {
      return "MEDIUM";
    }

    return "LOW";
  }

  // =====================================
  // RISK LEVEL
  // =====================================
  static String riskLevel({

    required bool authorized,

    required double confidence,
  }) {

    if (!authorized &&
        confidence >= 0.80) {

      return "CRITICAL";
    }

    if (!authorized) {
      return "HIGH";
    }

    return "LOW";
  }
}