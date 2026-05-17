import 'package:flutter/material.dart';

class TheftLockPage
    extends StatefulWidget {

  const TheftLockPage({
    super.key,
  });

  @override
  State<TheftLockPage>
      createState() =>
          _TheftLockPageState();
}

class _TheftLockPageState
    extends State<TheftLockPage> {

  bool showWarning = true;

  @override
  Widget build(BuildContext context) {

    return WillPopScope(

      // =================================
      // BLOCK BACK BUTTON
      // =================================
      onWillPop: () async {
        return false;
      },

      child: Scaffold(

        backgroundColor:
            const Color(
          0xFF050816,
        ),

        body: SafeArea(

          child: SingleChildScrollView(

            child: ConstrainedBox(

              constraints: BoxConstraints(

                minHeight:
                    MediaQuery.of(
                      context,
                    ).size.height,
              ),

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

                    const SizedBox(
                      height: 20,
                    ),

                    // =====================
                    // SECURITY ICON
                    // =====================
                    Container(

                      padding:
                          const EdgeInsets
                              .all(28),

                      decoration:
                          BoxDecoration(

                        shape:
                            BoxShape.circle,

                        color:
                            Colors.red
                                .withOpacity(
                          0.15,
                        ),

                        border: Border.all(

                          color:
                              Colors.red,

                          width: 2,
                        ),
                      ),

                      child: const Icon(

                        Icons.lock,

                        color:
                            Colors.red,

                        size: 100,
                      ),
                    ),

                    const SizedBox(
                      height: 35,
                    ),

                    // =====================
                    // TITLE
                    // =====================
                    const Text(

                      "DEVICE LOCKED",

                      textAlign:
                          TextAlign.center,

                      style: TextStyle(

                        color:
                            Colors.red,

                        fontSize: 34,

                        fontWeight:
                            FontWeight.bold,

                        letterSpacing:
                            1.5,
                      ),
                    ),

                    const SizedBox(
                      height: 20,
                    ),

                    // =====================
                    // MESSAGE
                    // =====================
                    const Text(

                      "This device has been remotely secured by TrackShield AI due to suspicious activity.",

                      textAlign:
                          TextAlign.center,

                      style: TextStyle(

                        color:
                            Colors.white,

                        fontSize: 18,

                        height: 1.7,
                      ),
                    ),

                    const SizedBox(
                      height: 40,
                    ),

                    // =====================
                    // WARNING BOX
                    // =====================
                    Container(

                      width:
                          double.infinity,

                      padding:
                          const EdgeInsets
                              .all(22),

                      decoration:
                          BoxDecoration(

                        color:
                            Colors.red
                                .withOpacity(
                          0.12,
                        ),

                        borderRadius:
                            BorderRadius.circular(
                          22,
                        ),

                        border: Border.all(

                          color:
                              Colors.red
                                  .withOpacity(
                            0.6,
                          ),

                          width: 1.5,
                        ),
                      ),

                      child: Column(

                        children: [

                          const Row(

                            mainAxisAlignment:
                                MainAxisAlignment.center,

                            children: [

                              Icon(
                                Icons.warning_amber_rounded,
                                color:
                                    Colors.red,
                              ),

                              SizedBox(
                                width: 10,
                              ),

                              Text(

                                "SECURITY WARNING",

                                style: TextStyle(

                                  color:
                                      Colors.red,

                                  fontSize:
                                      22,

                                  fontWeight:
                                      FontWeight.bold,
                                ),
                              ),
                            ],
                          ),

                          const SizedBox(
                            height: 18,
                          ),

                          const Text(

                            "Unauthorized access attempt detected.\n\nRealtime GPS tracking, camera surveillance, and AI monitoring are currently active.",

                            textAlign:
                                TextAlign.center,

                            style: TextStyle(

                              color:
                                  Colors.white,

                              fontSize: 16,

                              height: 1.7,
                            ),
                          ),
                        ],
                      ),
                    ),

                    const SizedBox(
                      height: 35,
                    ),

                    // =====================
                    // SECURITY STATUS
                    // =====================
                    Container(

                      width:
                          double.infinity,

                      padding:
                          const EdgeInsets
                              .all(20),

                      decoration:
                          BoxDecoration(

                        color:
                            Colors.blue
                                .withOpacity(
                          0.08,
                        ),

                        borderRadius:
                            BorderRadius.circular(
                          20,
                        ),

                        border: Border.all(

                          color:
                              Colors.blue
                                  .withOpacity(
                            0.3,
                          ),
                        ),
                      ),

                      child: Column(

                        children: [

                          const Text(

                            "TrackShield AI Security System Active",

                            textAlign:
                                TextAlign.center,

                            style: TextStyle(

                              color:
                                  Colors.green,

                              fontSize: 18,

                              fontWeight:
                                  FontWeight.bold,
                            ),
                          ),

                          const SizedBox(
                            height: 18,
                          ),

                          buildStatusRow(

                            icon:
                                Icons.location_on,

                            text:
                                "Realtime GPS Tracking Enabled",
                          ),

                          buildStatusRow(

                            icon:
                                Icons.camera_alt,

                            text:
                                "AI Camera Surveillance Active",
                          ),

                          buildStatusRow(

                            icon:
                                Icons.security,

                            text:
                                "Threat Detection Monitoring Enabled",
                          ),

                          buildStatusRow(

                            icon:
                                Icons.cloud_done,

                            text:
                                "Emergency Cloud Sync Active",
                          ),
                        ],
                      ),
                    ),

                    const SizedBox(
                      height: 50,
                    ),

                    // =====================
                    // BUTTON
                    // =====================
                    SizedBox(

                      width:
                          double.infinity,

                      height: 62,

                      child: ElevatedButton(

                        style:
                            ElevatedButton
                                .styleFrom(

                          backgroundColor:
                              Colors.red,

                          shape:
                              RoundedRectangleBorder(

                            borderRadius:
                                BorderRadius.circular(
                              18,
                            ),
                          ),
                        ),

                        onPressed: () {},

                        child: const Text(

                          "DEVICE SECURED",

                          style: TextStyle(

                            fontSize: 20,

                            fontWeight:
                                FontWeight.bold,

                            letterSpacing:
                                1,
                          ),
                        ),
                      ),
                    ),

                    const SizedBox(
                      height: 30,
                    ),
                  ],
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }

  // =====================================
  // STATUS ROW
  // =====================================
  Widget buildStatusRow({

    required IconData icon,

    required String text,
  }) {

    return Padding(

      padding:
          const EdgeInsets.symmetric(
        vertical: 8,
      ),

      child: Row(

        children: [

          Icon(

            icon,

            color: Colors.blue,

            size: 22,
          ),

          const SizedBox(
            width: 14,
          ),

          Expanded(

            child: Text(

              text,

              style: const TextStyle(

                color:
                    Colors.white70,

                fontSize: 15,
              ),
            ),
          ),
        ],
      ),
    );
  }
}