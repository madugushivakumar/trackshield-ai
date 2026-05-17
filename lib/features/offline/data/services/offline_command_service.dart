import 'encrypted_offline_storage.dart';

class OfflineCommandService {

  // =====================================
  // SAVE COMMAND
  // =====================================
  static Future<void>
      save({

    required String command,

    required Map<String, dynamic>
        payload,
  }) async {

    await EncryptedOfflineStorage
        .save(

      key:
          "command_$command",

      payload:
          payload,
    );
  }

  // =====================================
  // LOAD COMMAND
  // =====================================
  static Future<Map<String, dynamic>?>
      load(
    String command,
  ) async {

    return await EncryptedOfflineStorage
        .load(
      "command_$command",
    );
  }
}