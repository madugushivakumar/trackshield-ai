import 'package:flutter/material.dart';

class DevicesPage extends StatelessWidget {

  const DevicesPage({super.key});

  @override
  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(
        title: const Text("My Devices"),
      ),

      body: const Center(

        child: Text(

          "Connected Devices Will Appear Here",

          style: TextStyle(
            fontSize: 22,
            fontWeight: FontWeight.bold,
          ),
        ),
      ),
    );
  }
}