import 'package:firebase_database/firebase_database.dart';

class TheftService {

  static final database =
      FirebaseDatabase.instance.ref();

  // =====================================
  // ENABLE THEFT MODE
  // =====================================
  static Future<void>
      enableTheftMode({

    required String deviceId,

  }) async {

    await database
        .child("theft_mode")
        .child(deviceId)
        .set({

      "enabled": true,

      "timestamp":
          DateTime.now()
              .millisecondsSinceEpoch,
    });
  }

  // =====================================
  // DISABLE THEFT MODE
  // =====================================
  static Future<void>
      disableTheftMode({

    required String deviceId,

  }) async {

    await database
        .child("theft_mode")
        .child(deviceId)
        .set({

      "enabled": false,

      "timestamp":
          DateTime.now()
              .millisecondsSinceEpoch,
    });
  }

  // =====================================
  // LISTEN TO THEFT MODE
  // =====================================
  static Stream<DatabaseEvent>
      listenTheftMode(
    String deviceId,
  ) {

    return database
        .child("theft_mode")
        .child(deviceId)
        .onValue;
  }
}