import 'package:flutter/material.dart';

class RemoteCameraPage
    extends StatelessWidget {

  const RemoteCameraPage({
    super.key,
  });

  @override
  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(
        title: const Text(
          "Remote Camera Snapshot",
        ),
      ),

      body: Center(

        child: Column(

          mainAxisAlignment:
              MainAxisAlignment.center,

          children: [

            const Icon(
              Icons.camera_alt,
              size: 120,
              color: Colors.blue,
            ),

            const SizedBox(height: 30),

            const Text(

              "Remote Camera System Ready",

              style: TextStyle(
                fontSize: 24,
                fontWeight:
                    FontWeight.bold,
              ),
            ),

            const SizedBox(height: 40),

            ElevatedButton.icon(

              onPressed: () {

                ScaffoldMessenger.of(context)
                    .showSnackBar(

                  const SnackBar(

                    content: Text(
                      "Remote Snapshot Captured",
                    ),
                  ),
                );
              },

              icon: const Icon(
                Icons.camera,
              ),

              label: const Text(
                "Capture Snapshot",
              ),
            ),
          ],
        ),
      ),
    );
  }
}