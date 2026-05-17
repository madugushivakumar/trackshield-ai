import 'package:flutter/material.dart';

class TheftPredictionPage
    extends StatelessWidget {

  const TheftPredictionPage({
    super.key,
  });

  @override
  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(
        title: const Text(
          "AI Theft Prediction",
        ),
      ),

      body: Center(

        child: Column(

          mainAxisAlignment:
              MainAxisAlignment.center,

          children: const [

            Icon(
              Icons.security,
              size: 120,
              color: Colors.orange,
            ),

            SizedBox(height: 30),

            Text(

              "AI ANALYZING DEVICE RISK",

              style: TextStyle(
                fontSize: 24,
                fontWeight:
                    FontWeight.bold,
              ),
            ),

            SizedBox(height: 20),

            Text(
              "Risk Level: LOW",
              style: TextStyle(
                fontSize: 20,
                color: Colors.green,
              ),
            ),
          ],
        ),
      ),
    );
  }
}