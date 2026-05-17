import 'package:flutter/material.dart';

class LockdownModePage
    extends StatefulWidget {

  const LockdownModePage({
    super.key,
  });

  @override
  State<LockdownModePage> createState() =>
      _LockdownModePageState();
}

class _LockdownModePageState
    extends State<LockdownModePage> {

  bool locked = false;

  @override
  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(
        title: const Text(
          "Device Lockdown",
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

              size: 120,

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

                fontSize: 24,

                fontWeight:
                    FontWeight.bold,

                color:
                    locked
                        ? Colors.red
                        : Colors.green,
              ),
            ),

            const SizedBox(height: 40),

            ElevatedButton(

              onPressed: () {

                setState(() {
                  locked = !locked;
                });
              },

              child: Text(
                locked
                    ? "UNLOCK"
                    : "LOCK DEVICE",
              ),
            ),
          ],
        ),
      ),
    );
  }
}