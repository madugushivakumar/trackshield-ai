class RetentionPolicyService {

  // =====================================
  // RETENTION DAYS
  // =====================================
  static int retentionDays({

    required String subscription,
  }) {

    switch (subscription) {

      case "ENTERPRISE":
        return 90;

      case "PRO":
        return 30;

      default:
        return 7;
    }
  }
}