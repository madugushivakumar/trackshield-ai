import 'package:flutter/material.dart';

import '../../data/services/remote_control_service.dart';

class RemoteSecurityPage
    extends StatefulWidget {

  const RemoteSecurityPage({
    super.key,
  });

  @override
  State<RemoteSecurityPage>
      createState() =>
          _RemoteSecurityPageState();
}

class _RemoteSecurityPageState
    extends State<RemoteSecurityPage> {

  bool alarmActive = false;

  bool lockdownActive = false;

  bool loading = false;

  // =====================================
  // TOGGLE ALARM
  // =====================================
  Future<void> toggleAlarm() async {

    setState(() {
      loading = true;
    });

    if (alarmActive) {

      await RemoteControlService
          .stopAlarm(
        deviceId: "TS-1001",
      );

    } else {

      await RemoteControlService
          .triggerAlarm(
        deviceId: "TS-1001",
      );
    }

    setState(() {

      alarmActive = !alarmActive;

      loading = false;
    });
  }

  // =====================================
  // TOGGLE LOCKDOWN
  // =====================================
  Future<void> toggleLockdown() async {

    setState(() {
      loading = true;
    });

    if (lockdownActive) {

      await RemoteControlService
          .disableLockdown(
        deviceId: "TS-1001",
      );

    } else {

      await RemoteControlService
          .enableLockdown(
        deviceId: "TS-1001",
      );
    }

    setState(() {

      lockdownActive =
          !lockdownActive;

      loading = false;
    });
  }

  @override
  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(

        title: const Text(
          "Remote Security",
        ),
      ),

      body: Padding(

        padding:
            const EdgeInsets.all(20),

        child: Column(

          children: [

            const SizedBox(height: 30),

            // =================================
            // ALARM CARD
            // =================================
            Container(

              width: double.infinity,

              padding:
                  const EdgeInsets.all(20),

              decoration: BoxDecoration(

                color:
                    alarmActive
                        ? Colors.red
                            .withOpacity(0.1)
                        : Colors.grey
                            .withOpacity(0.1),

                borderRadius:
                    BorderRadius.circular(
                  20,
                ),

                border: Border.all(

                  color:
                      alarmActive
                          ? Colors.red
                          : Colors.grey,

                  width: 2,
                ),
              ),

              child: Column(

                children: [

                  Icon(

                    Icons.notifications_active,

                    size: 80,

                    color:
                        alarmActive
                            ? Colors.red
                            : Colors.grey,
                  ),

                  const SizedBox(height: 20),

                  Text(

                    alarmActive
                        ? "ALARM ACTIVE"
                        : "ALARM OFF",

                    style: TextStyle(

                      fontSize: 28,

                      fontWeight:
                          FontWeight.bold,

                      color:
                          alarmActive
                              ? Colors.red
                              : Colors.grey,
                    ),
                  ),

                  const SizedBox(height: 20),

                  SizedBox(

                    width: double.infinity,

                    height: 60,

                    child: ElevatedButton(

                      onPressed:
                          loading
                              ? null
                              : toggleAlarm,

                      style:
                          ElevatedButton
                              .styleFrom(

                        backgroundColor:
                            Colors.red,
                      ),

                      child: Text(

                        alarmActive
                            ? "STOP ALARM"
                            : "TRIGGER ALARM",

                        style: const TextStyle(
                          fontSize: 20,
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),

            const SizedBox(height: 30),

            // =================================
            // LOCKDOWN CARD
            // =================================
            Container(

              width: double.infinity,

              padding:
                  const EdgeInsets.all(20),

              decoration: BoxDecoration(

                color:
                    lockdownActive
                        ? Colors.orange
                            .withOpacity(0.1)
                        : Colors.grey
                            .withOpacity(0.1),

                borderRadius:
                    BorderRadius.circular(
                  20,
                ),

                border: Border.all(

                  color:
                      lockdownActive
                          ? Colors.orange
                          : Colors.grey,

                  width: 2,
                ),
              ),

              child: Column(

                children: [

                  Icon(

                    Icons.lock,

                    size: 80,

                    color:
                        lockdownActive
                            ? Colors.orange
                            : Colors.grey,
                  ),

                  const SizedBox(height: 20),

                  Text(

                    lockdownActive
                        ? "LOCKDOWN ACTIVE"
                        : "LOCKDOWN OFF",

                    style: TextStyle(

                      fontSize: 28,

                      fontWeight:
                          FontWeight.bold,

                      color:
                          lockdownActive
                              ? Colors.orange
                              : Colors.grey,
                    ),
                  ),

                  const SizedBox(height: 20),

                  SizedBox(

                    width: double.infinity,

                    height: 60,

                    child: ElevatedButton(

                      onPressed:
                          loading
                              ? null
                              : toggleLockdown,

                      style:
                          ElevatedButton
                              .styleFrom(

                        backgroundColor:
                            Colors.orange,
                      ),

                      child: Text(

                        lockdownActive

                            ? "DISABLE LOCKDOWN"

                            : "ENABLE LOCKDOWN",

                        style: const TextStyle(
                          fontSize: 20,
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}