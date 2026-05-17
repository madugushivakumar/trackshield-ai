class RemoteSirenService {

  // =====================================
  // START SIREN
  // =====================================
  static Future<void>
      startSiren() async {

    print(
      "REMOTE SIREN ACTIVATED",
    );
  }

  // =====================================
  // STOP SIREN
  // =====================================
  static Future<void>
      stopSiren() async {

    print(
      "REMOTE SIREN STOPPED",
    );
  }
}