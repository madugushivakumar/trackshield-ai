import 'package:flutter/material.dart';

import '../../../tracking/data/services/location_service.dart';

import '../../data/services/sos_service.dart';

class SOSPage extends StatefulWidget {

  const SOSPage({super.key});

  @override
  State<SOSPage> createState() =>
      _SOSPageState();
}

class _SOSPageState
    extends State<SOSPage> {

  bool isSending = false;

  // =====================================
  // SEND SOS
  // =====================================
  Future<void> sendSOSAlert() async {

    setState(() {
      isSending = true;
    });

    try {

      final position =
          await LocationService
              .getCurrentLocation();

      if (position == null) {
        return;
      }

      await SOSService.sendSOS(

        deviceId: "TS-1001",

        latitude:
            position.latitude,

        longitude:
            position.longitude,
      );

      if (mounted) {

        ScaffoldMessenger.of(context)
            .showSnackBar(

          const SnackBar(

            backgroundColor:
                Colors.red,

            content: Text(
              "SOS ALERT SENT",
            ),
          ),
        );
      }

    } catch (e) {

      ScaffoldMessenger.of(context)
          .showSnackBar(

        SnackBar(
          content: Text(
            e.toString(),
          ),
        ),
      );

    } finally {

      setState(() {
        isSending = false;
      });
    }
  }

  @override
  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(

        title: const Text(
          "Emergency SOS",
        ),
      ),

      body: Center(

        child: Column(

          mainAxisAlignment:
              MainAxisAlignment.center,

          children: [

            // =================================
            // SOS BUTTON
            // =================================
            GestureDetector(

              onTap:
                  isSending
                      ? null
                      : sendSOSAlert,

              child: Container(

                width: 220,
                height: 220,

                decoration: BoxDecoration(

                  color: Colors.red,

                  shape: BoxShape.circle,

                  boxShadow: [

                    BoxShadow(

                      color: Colors.red
                          .withOpacity(0.4),

                      blurRadius: 25,

                      spreadRadius: 10,
                    ),
                  ],
                ),

                child: Center(

                  child:
                      isSending

                          ? const CircularProgressIndicator(
                              color:
                                  Colors.white,
                            )

                          : const Column(

                              mainAxisAlignment:
                                  MainAxisAlignment
                                      .center,

                              children: [

                                Icon(

                                  Icons.sos,

                                  color:
                                      Colors.white,

                                  size: 70,
                                ),

                                SizedBox(
                                  height: 10,
                                ),

                                Text(

                                  "SEND SOS",

                                  style: TextStyle(

                                    color:
                                        Colors.white,

                                    fontSize: 28,

                                    fontWeight:
                                        FontWeight
                                            .bold,
                                  ),
                                ),
                              ],
                            ),
                ),
              ),
            ),

            const SizedBox(height: 40),

            const Padding(

              padding:
                  EdgeInsets.symmetric(
                horizontal: 30,
              ),

              child: Text(

                "Press the SOS button during emergency situations. Your live location will be broadcast instantly.",

                textAlign: TextAlign.center,

                style: TextStyle(
                  fontSize: 18,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}