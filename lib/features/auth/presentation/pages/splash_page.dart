import 'dart:async';

import 'package:flutter/material.dart';

class SplashPage extends StatefulWidget {
  const SplashPage({super.key});

  @override
  State<SplashPage> createState() =>
      _SplashPageState();
}

class _SplashPageState
    extends State<SplashPage> {

  @override
  void initState() {
    super.initState();

    Timer(
      const Duration(seconds: 2),

      () {

        Navigator.pushReplacementNamed(
          context,
          '/auth-checker',
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {

    return Scaffold(

      body: Center(

        child: Column(

          mainAxisAlignment:
              MainAxisAlignment.center,

          children: [

            const Icon(
              Icons.security,
              size: 100,
              color: Colors.blue,
            ),

            const SizedBox(height: 20),

            Text(
              "TrackShield AI",

              style: Theme.of(context)
                  .textTheme
                  .headlineMedium,
            ),

            const SizedBox(height: 10),

            const CircularProgressIndicator(),
          ],
        ),
      ),
    );
  }
}