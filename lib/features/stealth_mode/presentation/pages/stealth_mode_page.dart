import 'package:flutter/material.dart';

class StealthModePage extends StatefulWidget {

  const StealthModePage({super.key});

  @override
  State<StealthModePage> createState() =>
      _StealthModePageState();
}

class _StealthModePageState
    extends State<StealthModePage> {

  bool stealthEnabled = false;

  @override
  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(
        title: const Text(
          "Hidden Stealth Mode",
        ),
      ),

      body: Center(

        child: Column(

          mainAxisAlignment:
              MainAxisAlignment.center,

          children: [

            Icon(

              stealthEnabled
                  ? Icons.visibility_off
                  : Icons.visibility,

              size: 120,

              color:
                  stealthEnabled
                      ? Colors.red
                      : Colors.green,
            ),

            const SizedBox(height: 30),

            Text(

              stealthEnabled
                  ? "STEALTH MODE ENABLED"
                  : "STEALTH MODE DISABLED",

              style: TextStyle(

                fontSize: 24,

                fontWeight:
                    FontWeight.bold,

                color:
                    stealthEnabled
                        ? Colors.red
                        : Colors.green,
              ),
            ),

            const SizedBox(height: 40),

            ElevatedButton(

              onPressed: () {

                setState(() {

                  stealthEnabled =
                      !stealthEnabled;
                });
              },

              child: Text(

                stealthEnabled
                    ? "DISABLE"
                    : "ENABLE",
              ),
            ),
          ],
        ),
      ),
    );
  }
}