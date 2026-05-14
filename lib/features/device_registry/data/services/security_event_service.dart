import 'package:firebase_database/firebase_database.dart';

class SecurityEventService {

  static final database =
      FirebaseDatabase.instance.ref();

  // =====================================
  // PUSH SECURITY EVENT
  // =====================================
  static Future<void>
      pushEvent({

    required String type,

    required String deviceId,

    required String description,

  }) async {

    await database
        .child("security_events")
        .push()
        .set({

      "type": type,

      "deviceId": deviceId,

      "description": description,

      "timestamp":
          DateTime.now()
              .millisecondsSinceEpoch,
    });
  }

  // =====================================
  // GET SECURITY EVENTS
  // =====================================
  static Stream<DatabaseEvent>
      getEvents() {

    return database
        .child("security_events")
        .onValue;
  }
}