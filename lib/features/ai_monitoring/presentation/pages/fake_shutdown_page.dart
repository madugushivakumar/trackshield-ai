import 'package:flutter/material.dart';

class FakeShutdownPage
    extends StatefulWidget {

  const FakeShutdownPage({
    super.key,
  });

  @override
  State<FakeShutdownPage>
      createState() =>
          _FakeShutdownPageState();
}

class _FakeShutdownPageState
    extends State<FakeShutdownPage> {

  bool protectionEnabled =
      false;

  void toggleProtection() {

    setState(() {
      protectionEnabled =
          !protectionEnabled;
    });

    ScaffoldMessenger.of(context)
        .showSnackBar(

      SnackBar(

        backgroundColor:
            protectionEnabled
                ? Colors.red
                : Colors.green,

        content: Text(

          protectionEnabled
              ? "FAKE SHUTDOWN PROTECTION ENABLED"
              : "PROTECTION DISABLED",
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(

        title: const Text(
          "Fake Shutdown Protection",
        ),
      ),

      body: Center(

        child: Column(

          mainAxisAlignment:
              MainAxisAlignment.center,

          children: [

            Icon(

              protectionEnabled
                  ? Icons.power_off
                  : Icons.shield,

              size: 130,

              color:
                  protectionEnabled
                      ? Colors.red
                      : Colors.green,
            ),

            const SizedBox(height: 30),

            Text(

              protectionEnabled
                  ? "PROTECTION ACTIVE"
                  : "PROTECTION OFF",

              style: TextStyle(

                fontSize: 30,

                fontWeight:
                    FontWeight.bold,

                color:
                    protectionEnabled
                        ? Colors.red
                        : Colors.green,
              ),
            ),

            const SizedBox(height: 40),

            SizedBox(

              width: 280,
              height: 65,

              child: ElevatedButton.icon(

                onPressed:
                    toggleProtection,

                icon: Icon(

                  protectionEnabled
                      ? Icons.shield
                      : Icons.power_settings_new,
                ),

                label: Text(

                  protectionEnabled
                      ? "Disable Protection"
                      : "Enable Protection",

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