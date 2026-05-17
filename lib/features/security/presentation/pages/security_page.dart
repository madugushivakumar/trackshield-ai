import 'package:flutter/material.dart';

import '../../data/services/security_service.dart';

class SecurityPage
    extends StatefulWidget {

  const SecurityPage({
    super.key,
  });

  @override
  State<SecurityPage>
      createState() =>
          _SecurityPageState();
}

class _SecurityPageState
    extends State<SecurityPage> {

  bool alarmActive = false;

  bool loading = false;

  // =====================================
  // TRIGGER REMOTE ALARM
  // =====================================
  Future<void>
      toggleAlarm() async {

    setState(() {
      loading = true;
    });

    try {

      if (!alarmActive) {

        await SecurityService
            .triggerRemoteAlarm(

          deviceId: "TS-1001",
        );

        await SecurityService
            .sendIntruderAlert(

          deviceId: "TS-1001",

          message:
              "REMOTE SECURITY ALARM ACTIVATED",
        );

      } else {

        await SecurityService
            .stopRemoteAlarm(

          deviceId: "TS-1001",
        );
      }

      setState(() {
        alarmActive = !alarmActive;
      });

    } catch (e) {

      ScaffoldMessenger.of(context)
          .showSnackBar(

        SnackBar(
          content: Text(
            e.toString(),
          ),
        ),
      );

    } finally {

      setState(() {
        loading = false;
      });
    }
  }

  @override
  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(

        title: const Text(
          "AI Security System",
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
                seconds: 1,
              ),

              width: 220,
              height: 220,

              decoration: BoxDecoration(

                shape: BoxShape.circle,

                color:
                    alarmActive
                        ? Colors.red
                        : Colors.green,

                boxShadow: [

                  BoxShadow(

                    color:
                        alarmActive
                            ? Colors.red
                                .withOpacity(
                                  0.5,
                                )
                            : Colors.green
                                .withOpacity(
                                  0.5,
                                ),

                    blurRadius: 30,

                    spreadRadius: 10,
                  ),
                ],
              ),

              child: Icon(

                alarmActive
                    ? Icons.warning
                    : Icons.shield,

                color: Colors.white,

                size: 100,
              ),
            ),

            const SizedBox(height: 40),

            Text(

              alarmActive
                  ? "SECURITY ALERT ACTIVE"
                  : "SYSTEM SECURE",

              style: TextStyle(

                fontSize: 30,

                fontWeight:
                    FontWeight.bold,

                color:
                    alarmActive
                        ? Colors.red
                        : Colors.green,
              ),
            ),

            const SizedBox(height: 20),

            const Padding(

              padding:
                  EdgeInsets.symmetric(
                horizontal: 30,
              ),

              child: Text(

                "AI security monitoring protects the device against theft and unauthorized access.",

                textAlign: TextAlign.center,

                style: TextStyle(
                  fontSize: 18,
                ),
              ),
            ),

            const SizedBox(height: 40),

            SizedBox(

              width: 260,
              height: 65,

              child: ElevatedButton.icon(

                onPressed:
                    loading
                        ? null
                        : toggleAlarm,

                icon:
                    loading

                        ? const SizedBox(

                            width: 24,
                            height: 24,

                            child:
                                CircularProgressIndicator(
                              color:
                                  Colors.white,
                            ),
                          )

                        : Icon(

                            alarmActive
                                ? Icons.volume_off
                                : Icons.volume_up,
                          ),

                label: Text(

                  alarmActive
                      ? "Stop Alarm"
                      : "Trigger Alarm",

                  style: const TextStyle(
                    fontSize: 20,
                  ),
                ),

                style:
                    ElevatedButton.styleFrom(

                  backgroundColor:
                      alarmActive
                          ? Colors.red
                          : Colors.green,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}