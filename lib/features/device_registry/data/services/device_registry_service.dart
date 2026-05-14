import 'package:firebase_database/firebase_database.dart';

class DeviceRegistryService {

  static final database =
      FirebaseDatabase.instance.ref();

  // =====================================
  // REGISTER DEVICE
  // =====================================
  static Future<void>
      registerDevice({

    required String deviceId,

    required String owner,

    required String platform,

  }) async {

    await database
        .child("registered_devices")
        .child(deviceId)
        .set({

      "deviceId": deviceId,

      "owner": owner,

      "platform": platform,

      "registeredAt":
          DateTime.now()
              .millisecondsSinceEpoch,
    });
  }

  // =====================================
  // GET REGISTERED DEVICES
  // =====================================
  static Stream<DatabaseEvent>
      getDevices() {

    return database
        .child("registered_devices")
        .onValue;
  }
}