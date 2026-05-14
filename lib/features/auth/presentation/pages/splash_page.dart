import 'dart:async';

import 'package:flutter/material.dart';

class SplashPage
    extends StatefulWidget {

  const SplashPage({
    super.key,
  });

  @override
  State<SplashPage>
      createState() =>
          _SplashPageState();
}

class _SplashPageState
    extends State<SplashPage> {

  // =====================================
  // INIT
  // =====================================
  @override
  void initState() {

    super.initState();

    startSplash();
  }

  // =====================================
  // SPLASH TIMER
  // =====================================
  Future<void>
      startSplash() async {

    await Future.delayed(
      const Duration(
        seconds: 2,
      ),
    );

    // =====================================
    // CHECK WIDGET
    // =====================================
    if (!mounted) return;

    // =====================================
    // NAVIGATION
    // =====================================
    Navigator.pushReplacementNamed(

      context,

      '/auth-checker',
    );
  }

  // =====================================
  // UI
  // =====================================
  @override
  Widget build(
    BuildContext context,
  ) {

    return Scaffold(

      backgroundColor:
          const Color(
        0xFF0F172A,
      ),

      body: SafeArea(

        child: Center(

          child: Padding(

            padding:
                const EdgeInsets.all(
              24,
            ),

            child: Column(

              mainAxisAlignment:
                  MainAxisAlignment
                      .center,

              children: [

                // =========================
                // LOGO CONTAINER
                // =========================
                Container(

                  padding:
                      const EdgeInsets
                          .all(28),

                  decoration:
                      BoxDecoration(

                    color:
                        Colors.blue
                            .withOpacity(
                      0.15,
                    ),

                    borderRadius:
                        BorderRadius
                            .circular(
                      30,
                    ),

                    border: Border.all(

                      color:
                          Colors.blue
                              .withOpacity(
                        0.3,
                      ),

                      width: 2,
                    ),
                  ),

                  child: const Icon(

                    Icons.security,

                    size: 90,

                    color:
                        Colors.blue,
                  ),
                ),

                const SizedBox(
                  height: 35,
                ),

                // =========================
                // APP TITLE
                // =========================
                const Text(

                  "TrackShield AI",

                  style: TextStyle(

                    color:
                        Colors.white,

                    fontSize: 34,

                    fontWeight:
                        FontWeight.bold,

                    letterSpacing: 1.2,
                  ),
                ),

                const SizedBox(
                  height: 12,
                ),

                // =========================
                // SUBTITLE
                // =========================
                const Text(

                  "Enterprise Cybersecurity & AI Protection",

                  textAlign:
                      TextAlign.center,

                  style: TextStyle(

                    color:
                        Colors.white70,

                    fontSize: 15,

                    height: 1.5,
                  ),
                ),

                const SizedBox(
                  height: 50,
                ),

                // =========================
                // LOADER
                // =========================
                const SizedBox(

                  width: 34,

                  height: 34,

                  child:
                      CircularProgressIndicator(

                    strokeWidth: 3,

                    color:
                        Colors.blue,
                  ),
                ),

                const SizedBox(
                  height: 22,
                ),

                // =========================
                // STATUS
                // =========================
                const Text(

                  "Initializing AI Security Systems...",

                  style: TextStyle(

                    color:
                        Colors.white60,

                    fontSize: 14,
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}