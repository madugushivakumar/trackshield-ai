import 'package:firebase_database/firebase_database.dart';

import 'package:flutter/material.dart';

import '../../data/services/admin_service.dart';

class AdminDashboardPage
    extends StatefulWidget {

  const AdminDashboardPage({
    super.key,
  });

  @override
  State<AdminDashboardPage>
      createState() =>
          _AdminDashboardPageState();
}

class _AdminDashboardPageState
    extends State<AdminDashboardPage> {

  @override
  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(

        title: const Text(
          "TrackShield AI Admin",
        ),
      ),

      body: SingleChildScrollView(

        child: Padding(

          padding:
              const EdgeInsets.all(
            16,
          ),

          child: Column(

            children: [

              // ============================
              // LIVE DEVICE STATS
              // ============================
              StreamBuilder<DatabaseEvent>(

                stream:
                    AdminService
                        .getDevices(),

                builder:
                    (
                      context,
                      snapshot,
                    ) {

                  int totalDevices = 0;

                  if (snapshot.hasData &&
                      snapshot
                              .data!
                              .snapshot
                              .value !=
                          null) {

                    final data =
                        Map<String, dynamic>
                            .from(

                      snapshot
                          .data!
                          .snapshot
                          .value as Map,
                    );

                    totalDevices =
                        data.length;
                  }

                  return dashboardCard(

                    title:
                        "Active Devices",

                    value:
                        totalDevices
                            .toString(),

                    color:
                        Colors.blue,
                  );
                },
              ),

              const SizedBox(height: 20),

              // ============================
              // SOS ALERTS
              // ============================
              StreamBuilder<DatabaseEvent>(

                stream:
                    AdminService
                        .getSOSAlerts(),

                builder:
                    (
                      context,
                      snapshot,
                    ) {

                  int totalSOS = 0;

                  if (snapshot.hasData &&
                      snapshot
                              .data!
                              .snapshot
                              .value !=
                          null) {

                    final data =
                        Map<String, dynamic>
                            .from(

                      snapshot
                          .data!
                          .snapshot
                          .value as Map,
                    );

                    totalSOS =
                        data.length;
                  }

                  return dashboardCard(

                    title:
                        "SOS Alerts",

                    value:
                        totalSOS
                            .toString(),

                    color:
                        Colors.red,
                  );
                },
              ),

              const SizedBox(height: 20),

              // ============================
              // THREAT ALERTS
              // ============================
              StreamBuilder<DatabaseEvent>(

                stream:
                    AdminService
                        .getThreatAlerts(),

                builder:
                    (
                      context,
                      snapshot,
                    ) {

                  int threats = 0;

                  if (snapshot.hasData &&
                      snapshot
                              .data!
                              .snapshot
                              .value !=
                          null) {

                    final data =
                        Map<String, dynamic>
                            .from(

                      snapshot
                          .data!
                          .snapshot
                          .value as Map,
                    );

                    threats =
                        data.length;
                  }

                  return dashboardCard(

                    title:
                        "Threat Alerts",

                    value:
                        threats
                            .toString(),

                    color:
                        Colors.deepPurple,
                  );
                },
              ),

              const SizedBox(height: 30),

              // ============================
              // SECURITY STATUS
              // ============================
              Container(

                width: double.infinity,

                padding:
                    const EdgeInsets.all(
                  25,
                ),

                decoration: BoxDecoration(

                  color:
                      Colors.green
                          .shade100,

                  borderRadius:
                      BorderRadius.circular(
                    20,
                  ),
                ),

                child: Column(

                  children: const [

                    Icon(

                      Icons.security,

                      size: 80,

                      color: Colors.green,
                    ),

                    SizedBox(height: 20),

                    Text(

                      "AI SECURITY ACTIVE",

                      style: TextStyle(

                        fontSize: 28,

                        fontWeight:
                            FontWeight.bold,

                        color:
                            Colors.green,
                      ),
                    ),

                    SizedBox(height: 10),

                    Text(

                      "Realtime enterprise security monitoring is active across all devices.",

                      textAlign:
                          TextAlign.center,

                      style: TextStyle(
                        fontSize: 18,
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  // =====================================
  // DASHBOARD CARD
  // =====================================
  Widget dashboardCard({

    required String title,

    required String value,

    required Color color,

  }) {

    return Container(

      width: double.infinity,

      padding:
          const EdgeInsets.all(
        20,
      ),

      decoration: BoxDecoration(

        color:
            color.withOpacity(0.1),

        borderRadius:
            BorderRadius.circular(
          20,
        ),
      ),

      child: Row(

        mainAxisAlignment:
            MainAxisAlignment.spaceBetween,

        children: [

          Text(

            title,

            style: TextStyle(

              fontSize: 22,

              fontWeight:
                  FontWeight.bold,

              color: color,
            ),
          ),

          Text(

            value,

            style: TextStyle(

              fontSize: 32,

              fontWeight:
                  FontWeight.bold,

              color: color,
            ),
          ),
        ],
      ),
    );
  }
}