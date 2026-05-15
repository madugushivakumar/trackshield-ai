class TrackingPolicyService {

  // =====================================
  // TRACKING ALLOWED
  // =====================================
  static bool canTrack({

    required bool emergencyMode,

    required bool userConsent,

    required bool enterprisePolicy,
  }) {

    if (emergencyMode) {
      return true;
    }

    if (!userConsent) {
      return false;
    }

    if (!enterprisePolicy) {
      return false;
    }

    return true;
  }
}