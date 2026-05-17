import 'package:firebase_database/firebase_database.dart';

class HeartbeatService {

  static final database =
      FirebaseDatabase.instance.ref();

  // =====================================
  // UPDATE DEVICE STATUS
  // =====================================
  static Future<void>
      updateHeartbeat({

    required String deviceId,

  }) async {

    await database
        .child("device_status")
        .child(deviceId)
        .set({

      "online": true,

      "lastSeen":
          DateTime.now()
              .millisecondsSinceEpoch,
    });
  }

  // =====================================
  // LISTEN DEVICE STATUS
  // =====================================
  static Stream<DatabaseEvent>
      getDeviceStatus() {

    return database
        .child("device_status")
        .onValue;
  }
}