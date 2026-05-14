import 'package:flutter/material.dart';

import '../../data/services/threat_detection_service.dart';

class ThreatDetectionPage
    extends StatefulWidget {

  const ThreatDetectionPage({
    super.key,
  });

  @override
  State<ThreatDetectionPage>
      createState() =>
          _ThreatDetectionPageState();
}

class _ThreatDetectionPageState
    extends State<ThreatDetectionPage> {

  bool detecting = false;

  // =====================================
  // SIM CHANGE DETECTION
  // =====================================
  Future<void> detectSIMChange() async {

    setState(() {
      detecting = true;
    });

    await Future.delayed(
      const Duration(seconds: 2),
    );

    await ThreatDetectionService
        .reportThreat(

      deviceId: "TS-1001",

      type: "SIM_CHANGE",

      message:
          "Unauthorized SIM change detected",
    );

    setState(() {
      detecting = false;
    });

    if (mounted) {

      ScaffoldMessenger.of(context)
          .showSnackBar(

        const SnackBar(

          backgroundColor:
              Colors.red,

          content: Text(
            "SIM CHANGE DETECTED",
          ),
        ),
      );
    }
  }

  // =====================================
  // FAKE SHUTDOWN DETECTION
  // =====================================
  Future<void>
      detectFakeShutdown() async {

    setState(() {
      detecting = true;
    });

    await Future.delayed(
      const Duration(seconds: 2),
    );

    await ThreatDetectionService
        .reportThreat(

      deviceId: "TS-1001",

      type: "FAKE_SHUTDOWN",

      message:
          "Suspicious shutdown attempt detected",
    );

    setState(() {
      detecting = false;
    });

    if (mounted) {

      ScaffoldMessenger.of(context)
          .showSnackBar(

        const SnackBar(

          backgroundColor:
              Colors.orange,

          content: Text(
            "FAKE SHUTDOWN DETECTED",
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
          "Threat Detection",
        ),
      ),

      body: Padding(

        padding:
            const EdgeInsets.all(20),

        child: Column(

          children: [

            const SizedBox(height: 30),

            // =================================
            // THREAT STATUS
            // =================================
            Container(

              width: double.infinity,

              padding:
                  const EdgeInsets.all(25),

              decoration: BoxDecoration(

                color:
                    detecting
                        ? Colors.red
                            .withOpacity(0.1)
                        : Colors.green
                            .withOpacity(0.1),

                borderRadius:
                    BorderRadius.circular(
                  25,
                ),

                border: Border.all(

                  color:
                      detecting
                          ? Colors.red
                          : Colors.green,

                  width: 2,
                ),
              ),

              child: Column(

                children: [

                  Icon(

                    detecting
                        ? Icons.warning
                        : Icons.shield,

                    size: 100,

                    color:
                        detecting
                            ? Colors.red
                            : Colors.green,
                  ),

                  const SizedBox(height: 20),

                  Text(

                    detecting
                        ? "THREAT DETECTED"
                        : "DEVICE PROTECTED",

                    style: TextStyle(

                      fontSize: 28,

                      fontWeight:
                          FontWeight.bold,

                      color:
                          detecting
                              ? Colors.red
                              : Colors.green,
                    ),
                  ),

                  const SizedBox(height: 10),

                  const Text(

                    "Advanced AI-based device protection engine.",

                    textAlign:
                        TextAlign.center,

                    style: TextStyle(
                      fontSize: 18,
                    ),
                  ),
                ],
              ),
            ),

            const SizedBox(height: 40),

            // =================================
            // SIM CHANGE BUTTON
            // =================================
            SizedBox(

              width: double.infinity,

              height: 65,

              child: ElevatedButton.icon(

                onPressed:
                    detecting
                        ? null
                        : detectSIMChange,

                icon: const Icon(
                  Icons.sim_card_alert,
                ),

                label: const Text(

                  "TEST SIM CHANGE DETECTION",

                  style: TextStyle(
                    fontSize: 18,
                  ),
                ),

                style:
                    ElevatedButton.styleFrom(

                  backgroundColor:
                      Colors.red,
                ),
              ),
            ),

            const SizedBox(height: 25),

            // =================================
            // SHUTDOWN BUTTON
            // =================================
            SizedBox(

              width: double.infinity,

              height: 65,

              child: ElevatedButton.icon(

                onPressed:
                    detecting
                        ? null
                        : detectFakeShutdown,

                icon: const Icon(
                  Icons.power_settings_new,
                ),

                label: const Text(

                  "TEST FAKE SHUTDOWN",

                  style: TextStyle(
                    fontSize: 18,
                  ),
                ),

                style:
                    ElevatedButton.styleFrom(

                  backgroundColor:
                      Colors.orange,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}