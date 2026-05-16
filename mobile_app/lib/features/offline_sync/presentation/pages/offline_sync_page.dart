import 'package:flutter/material.dart';

class OfflineSyncPage
    extends StatelessWidget {

  const OfflineSyncPage({
    super.key,
  });

  @override
  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(
        title: const Text(
          "Offline Emergency Sync",
        ),
      ),

      body: Center(

        child: Column(

          mainAxisAlignment:
              MainAxisAlignment.center,

          children: const [

            Icon(
              Icons.sync,
              size: 120,
              color: Colors.blue,
            ),

            SizedBox(height: 30),

            Text(

              "OFFLINE DATA READY TO SYNC",

              style: TextStyle(
                fontSize: 22,
                fontWeight:
                    FontWeight.bold,
              ),
            ),
          ],
        ),
      ),
    );
  }
}