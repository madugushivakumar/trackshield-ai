import 'package:flutter/material.dart';

import '../../data/services/ai_security_service.dart';

class RemoteLockPage
    extends StatefulWidget {

  const RemoteLockPage({
    super.key,
  });

  @override
  State<RemoteLockPage>
      createState() =>
          _RemoteLockPageState();
}

class _RemoteLockPageState
    extends State<RemoteLockPage> {

  bool locked = false;

  bool loading = false;

  Future<void>
      toggleLock() async {

    setState(() {
      loading = true;
    });

    try {

      if (!locked) {

        await AISecurityService
            .lockDevice(

          deviceId: "TS-1001",
        );

      } else {

        await AISecurityService
            .unlockDevice(

          deviceId: "TS-1001",
        );
      }

      setState(() {
        locked = !locked;
      });

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
          "Remote Device Lock",
        ),
      ),

      body: Center(

        child: Column(

          mainAxisAlignment:
              MainAxisAlignment.center,

          children: [

            Icon(

              locked
                  ? Icons.lock
                  : Icons.lock_open,

              size: 130,

              color:
                  locked
                      ? Colors.red
                      : Colors.green,
            ),

            const SizedBox(height: 30),

            Text(

              locked
                  ? "DEVICE LOCKED"
                  : "DEVICE UNLOCKED",

              style: TextStyle(

                fontSize: 30,

                fontWeight:
                    FontWeight.bold,

                color:
                    locked
                        ? Colors.red
                        : Colors.green,
              ),
            ),

            const SizedBox(height: 40),

            SizedBox(

              width: 250,
              height: 65,

              child: ElevatedButton.icon(

                onPressed:
                    loading
                        ? null
                        : toggleLock,

                icon:
                    loading

                        ? const CircularProgressIndicator(
                            color:
                                Colors.white,
                          )

                        : Icon(

                            locked
                                ? Icons.lock_open
                                : Icons.lock,
                          ),

                label: Text(

                  locked
                      ? "Unlock Device"
                      : "Lock Device",

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