class CameraHealthService {

  // =====================================
  // HEALTH STATUS
  // =====================================
  static String getStatus({

    required bool initialized,

    required bool recording,
  }) {

    if (!initialized) {
      return "OFFLINE";
    }

    if (recording) {
      return "RECORDING";
    }

    return "ACTIVE";
  }

  // =====================================
  // QUALITY
  // =====================================
  static String getQuality({

    required double battery,
  }) {

    if (battery <= 20) {
      return "LOW";
    }

    if (battery <= 50) {
      return "MEDIUM";
    }

    return "HD";
  }
}