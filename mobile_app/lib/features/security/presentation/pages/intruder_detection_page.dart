import 'package:flutter/material.dart';

import '../../data/services/ai_security_service.dart';

class IntruderDetectionPage
    extends StatefulWidget {

  const IntruderDetectionPage({
    super.key,
  });

  @override
  State<IntruderDetectionPage>
      createState() =>
          _IntruderDetectionPageState();
}

class _IntruderDetectionPageState
    extends State<IntruderDetectionPage> {

  bool scanning = false;

  Future<void> detectThreat() async {

    setState(() {
      scanning = true;
    });

    await Future.delayed(
      const Duration(seconds: 3),
    );

    await AISecurityService
        .reportIntruder(

      deviceId: "TS-1001",

      reason:
          "Suspicious unlock attempt detected",
    );

    setState(() {
      scanning = false;
    });

    if (mounted) {

      ScaffoldMessenger.of(context)
          .showSnackBar(

        const SnackBar(

          backgroundColor:
              Colors.red,

          content: Text(
            "INTRUDER DETECTED",
          ),
        ),
      );
    }
  }

  @override
  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(

        title: const Text(
          "AI Intruder Detection",
        ),
      ),

      body: Center(

        child: Padding(

          padding:
              const EdgeInsets.all(20),

          child: Column(

            mainAxisAlignment:
                MainAxisAlignment.center,

            children: [

              Icon(

                scanning
                    ? Icons.warning
                    : Icons.shield,

                size: 120,

                color:
                    scanning
                        ? Colors.red
                        : Colors.green,
              ),

              const SizedBox(height: 30),

              Text(

                scanning
                    ? "SCANNING FOR THREATS..."
                    : "DEVICE SECURE",

                style: TextStyle(

                  fontSize: 28,

                  fontWeight:
                      FontWeight.bold,

                  color:
                      scanning
                          ? Colors.red
                          : Colors.green,
                ),
              ),

              const SizedBox(height: 20),

              const Text(

                "AI-based protection engine monitors suspicious activity and intrusion attempts.",

                textAlign: TextAlign.center,

                style: TextStyle(
                  fontSize: 18,
                ),
              ),

              const SizedBox(height: 40),

              SizedBox(

                width: double.infinity,

                height: 65,

                child: ElevatedButton.icon(

                  onPressed:
                      scanning
                          ? null
                          : detectThreat,

                  icon: const Icon(
                    Icons.security,
                  ),

                  label:

                      scanning

                          ? const CircularProgressIndicator()

                          : const Text(

                              "RUN AI SECURITY SCAN",

                              style: TextStyle(
                                fontSize: 20,
                              ),
                            ),

                  style:
                      ElevatedButton.styleFrom(

                    backgroundColor:
                        Colors.deepPurple,
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}