import 'package:flutter/material.dart';

class AISecurityPage
    extends StatelessWidget {

  const AISecurityPage({
    super.key,
  });

  @override
  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(
        title: const Text(
          "AI Security Automation",
        ),
      ),

      body: Center(

        child: Column(

          mainAxisAlignment:
              MainAxisAlignment.center,

          children: const [

            Icon(
              Icons.smart_toy,
              size: 120,
              color: Colors.purple,
            ),

            SizedBox(height: 30),

            Text(

              "AI SECURITY ACTIVE",

              style: TextStyle(
                fontSize: 24,
                fontWeight:
                    FontWeight.bold,
              ),
            ),

            SizedBox(height: 20),

            Text(
              "Realtime Protection Enabled",
              style: TextStyle(
                fontSize: 18,
              ),
            ),
          ],
        ),
      ),
    );
  }
}