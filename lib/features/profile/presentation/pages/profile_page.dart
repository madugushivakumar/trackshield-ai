import 'package:flutter/material.dart';

class ProfilePage extends StatelessWidget {

  const ProfilePage({
    super.key,
  });

  @override
  Widget build(BuildContext context) {

    return Scaffold(

      backgroundColor:
          const Color(0xFFF5F7FB),

      appBar: AppBar(

        elevation: 0,

        backgroundColor:
            Colors.white,

        centerTitle: true,

        title: const Text(

          "Profile",

          style: TextStyle(
            color: Colors.black,
            fontWeight: FontWeight.bold,
          ),
        ),
      ),

      body: SingleChildScrollView(

        padding:
            const EdgeInsets.all(20),

        child: Column(

          children: [

            // PROFILE CARD
            Container(

              width: double.infinity,

              padding:
                  const EdgeInsets.all(
                24,
              ),

              decoration: BoxDecoration(

                color: Colors.white,

                borderRadius:
                    BorderRadius.circular(
                  24,
                ),

                boxShadow: [

                  BoxShadow(

                    color: Colors.black
                        .withOpacity(0.05),

                    blurRadius: 10,
                  ),
                ],
              ),

              child: Column(

                children: [

                  // AVATAR
                  CircleAvatar(

                    radius: 50,

                    backgroundColor:
                        Colors.blue,

                    child: const Icon(

                      Icons.person,

                      color: Colors.white,

                      size: 60,
                    ),
                  ),

                  const SizedBox(
                    height: 20,
                  ),

                  // NAME
                  const Text(

                    "Shiva Kumar",

                    style: TextStyle(

                      fontSize: 26,

                      fontWeight:
                          FontWeight.bold,
                    ),
                  ),

                  const SizedBox(
                    height: 8,
                  ),

                  const Text(

                    "TrackShield Enterprise User",

                    style: TextStyle(

                      color: Colors.grey,

                      fontSize: 16,
                    ),
                  ),

                  const SizedBox(
                    height: 20,
                  ),

                  // STATUS
                  Container(

                    padding:
                        const EdgeInsets.symmetric(

                      horizontal: 20,
                      vertical: 10,
                    ),

                    decoration: BoxDecoration(

                      color:
                          Colors.green
                              .withOpacity(
                        0.15,
                      ),

                      borderRadius:
                          BorderRadius.circular(
                        30,
                      ),
                    ),

                    child: const Text(

                      "SECURITY ACTIVE",

                      style: TextStyle(

                        color: Colors.green,

                        fontWeight:
                            FontWeight.bold,
                      ),
                    ),
                  ),
                ],
              ),
            ),

            const SizedBox(
              height: 24,
            ),

            // SECURITY DETAILS
            buildCard(

              title: "Protected Devices",

              icon: Icons.devices,

              value: "4 Devices",
            ),

            buildCard(

              title: "Emergency Contacts",

              icon: Icons.phone,

              value: "3 Contacts",
            ),

            buildCard(

              title: "Realtime Tracking",

              icon: Icons.location_on,

              value: "Enabled",
            ),

            buildCard(

              title: "AI Threat Detection",

              icon: Icons.security,

              value: "Running",
            ),

            buildCard(

              title: "SOS System",

              icon: Icons.warning,

              value: "Active",
            ),
          ],
        ),
      ),
    );
  }

  Widget buildCard({

    required String title,

    required IconData icon,

    required String value,
  }) {

    return Container(

      margin:
          const EdgeInsets.only(
        bottom: 16,
      ),

      padding:
          const EdgeInsets.all(
        20,
      ),

      decoration: BoxDecoration(

        color: Colors.white,

        borderRadius:
            BorderRadius.circular(
          20,
        ),

        boxShadow: [

          BoxShadow(

            color:
                Colors.black.withOpacity(
              0.04,
            ),

            blurRadius: 8,
          ),
        ],
      ),

      child: Row(

        children: [

          Container(

            width: 55,
            height: 55,

            decoration: BoxDecoration(

              color:
                  Colors.blue.withOpacity(
                0.12,
              ),

              borderRadius:
                  BorderRadius.circular(
                16,
              ),
            ),

            child: Icon(

              icon,

              color: Colors.blue,
            ),
          ),

          const SizedBox(
            width: 18,
          ),

          Expanded(

            child: Column(

              crossAxisAlignment:
                  CrossAxisAlignment.start,

              children: [

                Text(

                  title,

                  style: const TextStyle(

                    fontWeight:
                        FontWeight.bold,

                    fontSize: 17,
                  ),
                ),

                const SizedBox(
                  height: 6,
                ),

                Text(

                  value,

                  style: const TextStyle(

                    color: Colors.grey,
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}