import 'package:firebase_database/firebase_database.dart';

class AISecurityService {

  static final database =
      FirebaseDatabase.instance.ref();

  // =====================================
  // REMOTE LOCK DEVICE
  // =====================================
  static Future<void>
      lockDevice({

    required String deviceId,

  }) async {

    await database
        .child("device_lock")
        .child(deviceId)
        .set({

      "locked": true,

      "timestamp":
          DateTime.now()
              .millisecondsSinceEpoch,
    });
  }

  // =====================================
  // UNLOCK DEVICE
  // =====================================
  static Future<void>
      unlockDevice({

    required String deviceId,

  }) async {

    await database
        .child("device_lock")
        .child(deviceId)
        .set({

      "locked": false,

      "timestamp":
          DateTime.now()
              .millisecondsSinceEpoch,
    });
  }

  // =====================================
  // LISTEN LOCK STATUS
  // =====================================
  static Stream<DatabaseEvent>
      listenLockStatus(
    String deviceId,
  ) {

    return database
        .child("device_lock")
        .child(deviceId)
        .onValue;
  }
}