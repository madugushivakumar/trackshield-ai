class RecoverySyncService {

  // =====================================
  // RECOVER
  // =====================================
  static Future<void>
      recover({

    required Future<void>
        Function() syncFunction,
  }) async {

    try {

      await syncFunction();

      print(
        "RECOVERY SYNC SUCCESS",
      );

    } catch (e) {

      print(
        "RECOVERY ERROR: $e",
      );
    }
  }
}