import 'package:flutter/material.dart';

class AlertsPage extends StatelessWidget {

  const AlertsPage({
    super.key,
  });

  @override
  Widget build(BuildContext context) {

    final alerts = [

      {
        "title":
            "Intruder Detected",

        "time":
            "2 mins ago",

        "color":
            Colors.red,

        "icon":
            Icons.warning,
      },

      {
        "title":
            "SOS Triggered",

        "time":
            "10 mins ago",

        "color":
            Colors.orange,

        "icon":
            Icons.sos,
      },

      {
        "title":
            "Remote Lock Activated",

        "time":
            "30 mins ago",

        "color":
            Colors.blue,

        "icon":
            Icons.lock,
      },

      {
        "title":
            "AI Threat Detected",

        "time":
            "1 hour ago",

        "color":
            Colors.purple,

        "icon":
            Icons.security,
      },
    ];

    return Scaffold(

      backgroundColor:
          const Color(0xFFF5F7FB),

      appBar: AppBar(

        elevation: 0,

        centerTitle: true,

        backgroundColor:
            Colors.white,

        title: const Text(

          "Security Alerts",

          style: TextStyle(

            color: Colors.black,

            fontWeight:
                FontWeight.bold,
          ),
        ),
      ),

      body: ListView.builder(

        padding:
            const EdgeInsets.all(20),

        itemCount:
            alerts.length,

        itemBuilder:
            (context, index) {

          final alert =
              alerts[index];

          return Container(

            margin:
                const EdgeInsets.only(
              bottom: 18,
            ),

            padding:
                const EdgeInsets.all(
              20,
            ),

            decoration: BoxDecoration(

              color: Colors.white,

              borderRadius:
                  BorderRadius.circular(
                22,
              ),

              boxShadow: [

                BoxShadow(

                  color: Colors.black
                      .withOpacity(0.04),

                  blurRadius: 8,
                ),
              ],
            ),

            child: Row(

              children: [

                Container(

                  width: 60,
                  height: 60,

                  decoration:
                      BoxDecoration(

                    color:
                        (alert["color"]
                                as Color)
                            .withOpacity(
                      0.12,
                    ),

                    borderRadius:
                        BorderRadius.circular(
                      18,
                    ),
                  ),

                  child: Icon(

                    alert["icon"]
                        as IconData,

                    color:
                        alert["color"]
                            as Color,

                    size: 30,
                  ),
                ),

                const SizedBox(
                  width: 18,
                ),

                Expanded(

                  child: Column(

                    crossAxisAlignment:
                        CrossAxisAlignment
                            .start,

                    children: [

                      Text(

                        alert["title"]
                            as String,

                        style:
                            const TextStyle(

                          fontSize: 18,

                          fontWeight:
                              FontWeight.bold,
                        ),
                      ),

                      const SizedBox(
                        height: 8,
                      ),

                      Text(

                        alert["time"]
                            as String,

                        style:
                            const TextStyle(

                          color:
                              Colors.grey,
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          );
        },
      ),
    );
  }
}