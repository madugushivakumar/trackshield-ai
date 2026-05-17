import 'package:firebase_database/firebase_database.dart';

import 'package:telephony/telephony.dart';

import '../models/emergency_contact_model.dart';

import 'offline_sos_queue.dart';

class EnterpriseSOSService {

  static final FirebaseDatabase
      _database =
          FirebaseDatabase.instance;

  static final Telephony
      _telephony =
          Telephony.instance;

  // =====================================
  // TRIGGER SOS
  // =====================================
  static Future<void>
      triggerSOS({

    required String deviceId,

    required double latitude,

    required double longitude,

    required String message,
  }) async {

    try {

      // ===============================
      // SAVE SOS EVENT
      // ===============================
      await _database.ref(
        "enterprise_sos",
      ).push().set({

        "deviceId":
            deviceId,

        "latitude":
            latitude,

        "longitude":
            longitude,

        "message":
            message,

        "status":
            "ACTIVE",

        "timestamp":
            DateTime.now()
                .millisecondsSinceEpoch,
      });

      // ===============================
      // LOAD CONTACTS
      // ===============================
      final contacts =
          await loadContacts();

      // ===============================
      // SEND SMS
      // ===============================
      for (final contact
          in contacts) {

        if (!contact.active) {
          continue;
        }

        await sendEmergencySMS(

          phone:
              contact.phone,

          message:
              message,

          latitude:
              latitude,

          longitude:
              longitude,
        );
      }

      // ===============================
      // SAVE OFFLINE COPY
      // ===============================
      await OfflineSOSQueue
          .addSOS(

        payload: {

          "deviceId":
              deviceId,

          "message":
              message,

          "latitude":
              latitude,

          "longitude":
              longitude,
        },
      );

      print(
        "ENTERPRISE SOS SENT",
      );

    } catch (e) {

      print(
        "SOS ERROR: $e",
      );
    }
  }

  // =====================================
  // LOAD CONTACTS
  // =====================================
  static Future<List<EmergencyContactModel>>
      loadContacts() async {

    try {

      final snapshot =
          await _database.ref(
        "emergency_contacts",
      ).get();

      if (!snapshot.exists) {
        return [];
      }

      final data =
          Map<dynamic, dynamic>.from(
        snapshot.value as Map,
      );

      return data.entries.map((e) {

        return EmergencyContactModel
            .fromJson(

          Map<dynamic, dynamic>.from(
            e.value,
          ),
        );

      }).toList();

    } catch (e) {

      print(
        "CONTACT LOAD ERROR: $e",
      );

      return [];
    }
  }

  // =====================================
  // SEND SMS
  // =====================================
  static Future<void>
      sendEmergencySMS({

    required String phone,

    required String message,

    required double latitude,

    required double longitude,
  }) async {

    try {

      final fullMessage = """

$message

LIVE LOCATION:
https://maps.google.com/?q=$latitude,$longitude

TrackShield AI Emergency Alert
""";

      await _telephony.sendSms(

        to: phone,

        message: fullMessage,
      );

      print(
        "SMS SENT TO $phone",
      );

    } catch (e) {

      print(
        "SMS ERROR: $e",
      );
    }
  }

  // =====================================
  // ACKNOWLEDGE SOS
  // =====================================
  static Future<void>
      acknowledgeSOS({

    required String sosId,
  }) async {

    await _database.ref(
      "enterprise_sos/$sosId",
    ).update({

      "status":
          "ACKNOWLEDGED",

      "acknowledgedAt":
          DateTime.now()
              .millisecondsSinceEpoch,
    });
  }

  // =====================================
  // CLOSE SOS
  // =====================================
  static Future<void>
      closeSOS({

    required String sosId,
  }) async {

    await _database.ref(
      "enterprise_sos/$sosId",
    ).update({

      "status":
          "RESOLVED",

      "resolvedAt":
          DateTime.now()
              .millisecondsSinceEpoch,
    });
  }
}