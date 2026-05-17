class DeviceAttestationService {

  // =====================================
  // VERIFY DEVICE
  // =====================================
  static Future<bool>
      verify({

    required String deviceId,
  }) async {

    // FUTURE PLAY INTEGRITY API
    // SAFETYNET / APPCHECK READY

    print(
      "DEVICE VERIFIED: $deviceId",
    );

    return true;
  }
}