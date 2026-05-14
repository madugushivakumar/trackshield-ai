import 'package:flutter/material.dart';

import '../../data/services/theft_service.dart';

class TheftModePage
    extends StatefulWidget {

  const TheftModePage({
    super.key,
  });

  @override
  State<TheftModePage>
      createState() =>
          _TheftModePageState();
}

class _TheftModePageState
    extends State<TheftModePage> {

  bool theftMode = false;

  bool isLoading = false;

  // =====================================
  // TOGGLE THEFT MODE
  // =====================================
  Future<void>
      toggleTheftMode() async {

    setState(() {
      isLoading = true;
    });

    try {

      if (!theftMode) {

        await TheftService
            .enableTheftMode(

          deviceId: "TS-1001",
        );

      } else {

        await TheftService
            .disableTheftMode(

          deviceId: "TS-1001",
        );
      }

      setState(() {
        theftMode = !theftMode;
      });

      if (mounted) {

        ScaffoldMessenger.of(context)
            .showSnackBar(

          SnackBar(

            backgroundColor:
                theftMode
                    ? Colors.red
                    : Colors.green,

            content: Text(

              theftMode
                  ? "THEFT MODE ENABLED"
                  : "THEFT MODE DISABLED",
            ),
          ),
        );
      }

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
        isLoading = false;
      });
    }
  }

  @override
  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(

        title: const Text(
          "Theft Protection",
        ),
      ),

      body: Center(

        child: Column(

          mainAxisAlignment:
              MainAxisAlignment.center,

          children: [

            Icon(

              theftMode
                  ? Icons.security
                  : Icons.shield_outlined,

              size: 120,

              color:
                  theftMode
                      ? Colors.red
                      : Colors.grey,
            ),

            const SizedBox(height: 30),

            Text(

              theftMode
                  ? "THEFT MODE ACTIVE"
                  : "THEFT MODE OFF",

              style: TextStyle(

                fontSize: 28,

                fontWeight:
                    FontWeight.bold,

                color:
                    theftMode
                        ? Colors.red
                        : Colors.black,
              ),
            ),

            const SizedBox(height: 20),

            const Padding(

              padding:
                  EdgeInsets.symmetric(
                horizontal: 30,
              ),

              child: Text(

                "Silent tracking and theft recovery monitoring will remain active in background.",

                textAlign: TextAlign.center,

                style: TextStyle(
                  fontSize: 18,
                ),
              ),
            ),

            const SizedBox(height: 40),

            SizedBox(

              width: 250,
              height: 65,

              child: ElevatedButton.icon(

                onPressed:
                    isLoading
                        ? null
                        : toggleTheftMode,

                icon:
                    isLoading

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

                            theftMode
                                ? Icons.lock_open
                                : Icons.lock,
                          ),

                label: Text(

                  theftMode
                      ? "Disable Theft Mode"
                      : "Enable Theft Mode",

                  style: const TextStyle(
                    fontSize: 20,
                  ),
                ),

                style:
                    ElevatedButton.styleFrom(

                  backgroundColor:
                      theftMode
                          ? Colors.green
                          : Colors.red,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}