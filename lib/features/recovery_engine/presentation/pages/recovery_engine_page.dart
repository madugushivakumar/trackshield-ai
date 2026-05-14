import 'package:flutter/material.dart';

class RecoveryEnginePage
    extends StatelessWidget {

  const RecoveryEnginePage({
    super.key,
  });

  @override
  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(
        title: const Text(
          "Smart Recovery Engine",
        ),
      ),

      body: Center(

        child: Column(

          mainAxisAlignment:
              MainAxisAlignment.center,

          children: [

            const Icon(
              Icons.gps_fixed,
              size: 120,
              color: Colors.green,
            ),

            const SizedBox(height: 30),

            const Text(

              "DEVICE RECOVERY ACTIVE",

              style: TextStyle(
                fontSize: 24,
                fontWeight:
                    FontWeight.bold,
              ),
            ),

            const SizedBox(height: 40),

            ElevatedButton(

              onPressed: () {},

              child: const Text(
                "START RECOVERY",
              ),
            ),
          ],
        ),
      ),
    );
  }
}