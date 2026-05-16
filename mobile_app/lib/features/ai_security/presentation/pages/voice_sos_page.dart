import 'package:flutter/material.dart';

import 'package:speech_to_text/speech_to_text.dart';

import '../../../sos/data/services/sos_service.dart';

import '../../../tracking/data/services/location_service.dart';

class VoiceSOSPage
    extends StatefulWidget {

  const VoiceSOSPage({
    super.key,
  });

  @override
  State<VoiceSOSPage>
      createState() =>
          _VoiceSOSPageState();
}

class _VoiceSOSPageState
    extends State<VoiceSOSPage> {

  final SpeechToText speech =
      SpeechToText();

  bool listening = false;

  String spokenText = "";

  // =====================================
  // START LISTENING
  // =====================================
  Future<void>
      startListening() async {

    bool available =
        await speech.initialize();

    if (!available) {
      return;
    }

    setState(() {
      listening = true;
    });

    speech.listen(

      onResult: (result) async {

        setState(() {

          spokenText =
              result.recognizedWords;
        });

        // ===============================
        // VOICE SOS DETECTION
        // ===============================
        if (spokenText
                .toLowerCase()
                .contains("help") ||
            spokenText
                .toLowerCase()
                .contains("emergency") ||
            spokenText
                .toLowerCase()
                .contains("save me")) {

          final position =
              await LocationService
                  .getCurrentLocation();

          if (position != null) {

            await SOSService
                .sendSOS(

              deviceId:
                  "TS-1001",

              latitude:
                  position.latitude,

              longitude:
                  position.longitude,
            );
          }

          if (mounted) {

            ScaffoldMessenger.of(
                    context)
                .showSnackBar(

              const SnackBar(

                backgroundColor:
                    Colors.red,

                content: Text(
                  "VOICE SOS ACTIVATED",
                ),
              ),
            );
          }
        }
      },
    );
  }

  // =====================================
  // STOP LISTENING
  // =====================================
  void stopListening() {

    speech.stop();

    setState(() {
      listening = false;
    });
  }

  @override
  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(

        title: const Text(
          "Voice SOS",
        ),
      ),

      body: Center(

        child: Column(

          mainAxisAlignment:
              MainAxisAlignment.center,

          children: [

            AnimatedContainer(

              duration:
                  const Duration(
                milliseconds: 500,
              ),

              width: 220,
              height: 220,

              decoration: BoxDecoration(

                shape: BoxShape.circle,

                color:
                    listening
                        ? Colors.red
                        : Colors.blue,

                boxShadow: [

                  BoxShadow(

                    color:
                        listening
                            ? Colors.red
                                .withOpacity(
                                  0.5,
                                )
                            : Colors.blue
                                .withOpacity(
                                  0.5,
                                ),

                    blurRadius: 30,

                    spreadRadius: 10,
                  ),
                ],
              ),

              child: Icon(

                listening
                    ? Icons.mic
                    : Icons.mic_none,

                color: Colors.white,

                size: 100,
              ),
            ),

            const SizedBox(height: 40),

            Text(

              listening
                  ? "LISTENING..."
                  : "VOICE SOS READY",

              style: TextStyle(

                fontSize: 28,

                fontWeight:
                    FontWeight.bold,

                color:
                    listening
                        ? Colors.red
                        : Colors.blue,
              ),
            ),

            const SizedBox(height: 20),

            Padding(

              padding:
                  const EdgeInsets
                      .symmetric(
                horizontal: 30,
              ),

              child: Text(

                spokenText.isEmpty
                    ? "Say HELP, EMERGENCY or SAVE ME"
                    : spokenText,

                textAlign:
                    TextAlign.center,

                style: const TextStyle(
                  fontSize: 20,
                ),
              ),
            ),

            const SizedBox(height: 40),

            SizedBox(

              width: 260,
              height: 65,

              child: ElevatedButton.icon(

                onPressed:
                    listening
                        ? stopListening
                        : startListening,

                icon: Icon(

                  listening
                      ? Icons.stop
                      : Icons.mic,
                ),

                label: Text(

                  listening
                      ? "Stop Listening"
                      : "Start Voice SOS",

                  style: const TextStyle(
                    fontSize: 20,
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}