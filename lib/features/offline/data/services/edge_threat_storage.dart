import 'encrypted_offline_storage.dart';

class EdgeThreatStorage {

  // =====================================
  // SAVE THREAT
  // =====================================
  static Future<void>
      saveThreat({

    required String id,

    required Map<String, dynamic>
        payload,
  }) async {

    await EncryptedOfflineStorage
        .save(

      key:
          "threat_$id",

      payload:
          payload,
    );
  }

  // =====================================
  // LOAD THREAT
  // =====================================
  static Future<Map<String, dynamic>?>
      loadThreat(
    String id,
  ) async {

    return await EncryptedOfflineStorage
        .load(
      "threat_$id",
    );
  }
}