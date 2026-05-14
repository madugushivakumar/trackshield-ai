import 'package:firebase_database/firebase_database.dart';

import 'package:speech_to_text/speech_to_text.dart';

class VoiceSOSService {

  static final FirebaseDatabase
      _database =
          FirebaseDatabase.instance;

  static final SpeechToText
      _speech =
          SpeechToText();

  static bool
      _isListening = false;

  // =====================================
  // START LISTENING
  // =====================================
  static Future<void>
      startListening({

    required String deviceId,
  }) async {

    final available =
        await _speech.initialize();

    if (!available) {

      print(
        "Speech recognition unavailable",
      );

      return;
    }

    _isListening = true;

    _speech.listen(

      onResult: (result) async {

        final words =
            result.recognizedWords
                .toLowerCase();

        print(
          "VOICE: $words",
        );

        // =================================
        // SOS KEYWORDS
        // =================================
        if (

        words.contains(
          "help me",
        ) ||

        words.contains(
          "emergency",
        ) ||

        words.contains(
          "save me",
        ) ||

        words.contains(
          "trackshield sos",
        )

        ) {

          await triggerSOS(

            deviceId: deviceId,

            phrase: words,
          );
        }
      },
    );

    print(
      "VOICE SOS ACTIVE",
    );
  }

  // =====================================
  // STOP LISTENING
  // =====================================
  static Future<void>
      stopListening() async {

    _isListening = false;

    await _speech.stop();
  }

  // =====================================
  // SEND SOS
  // =====================================
  static Future<void>
      triggerSOS({

    required String deviceId,

    required String phrase,
  }) async {

    await _database.ref(
      "voice_sos_alerts",
    ).push().set({

      "deviceId":
          deviceId,

      "phrase":
          phrase,

      "timestamp":
          DateTime.now()
              .millisecondsSinceEpoch,

      "severity":
          "CRITICAL",
    });

    // GENERAL SOS
    await _database.ref(
      "sos_alerts",
    ).push().set({

      "deviceId":
          deviceId,

      "type":
          "VOICE_SOS",

      "phrase":
          phrase,

      "timestamp":
          DateTime.now()
              .millisecondsSinceEpoch,
    });

    print(
      "VOICE SOS TRIGGERED",
    );
  }
}