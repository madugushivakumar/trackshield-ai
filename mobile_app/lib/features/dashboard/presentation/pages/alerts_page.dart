import 'package:flutter/material.dart';

class AlertsPage extends StatelessWidget {

  const AlertsPage({super.key});

  @override
  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(
        title: const Text("Alerts"),
      ),

      body: const Center(

        child: Text(

          "Intruder Alerts Will Appear Here",

          style: TextStyle(
            fontSize: 22,
            fontWeight: FontWeight.bold,
          ),
        ),
      ),
    );
  }
}