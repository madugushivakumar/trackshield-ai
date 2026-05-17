import 'package:firebase_database/firebase_database.dart';

import 'package:flutter/material.dart';

import '../../data/services/sos_service.dart';

class EmergencyDashboardPage
    extends StatefulWidget {

  const EmergencyDashboardPage({
    super.key,
  });

  @override
  State<EmergencyDashboardPage>
      createState() =>
          _EmergencyDashboardPageState();
}

class _EmergencyDashboardPageState
    extends State<EmergencyDashboardPage> {

  @override
  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(

        title: const Text(
          "Emergency Dashboard",
        ),
      ),

      body: StreamBuilder<DatabaseEvent>(

        stream:
            SOSService.getSOSAlerts(),

        builder:
            (
              context,
              snapshot,
            ) {

          if (!snapshot.hasData) {

            return const Center(
              child:
                  CircularProgressIndicator(),
            );
          }

          final data =
              snapshot.data!
                  .snapshot.value;

          if (data == null) {

            return const Center(

              child: Text(
                "No Active SOS Alerts",
              ),
            );
          }

          final alerts =
              Map<String, dynamic>.from(
            data as Map,
          );

          return ListView(

            children:
                alerts.entries.map((entry) {

              final alert =
                  Map<String, dynamic>.from(
                entry.value,
              );

              return Card(

                margin:
                    const EdgeInsets.all(
                  12,
                ),

                child: ListTile(

                  leading: const CircleAvatar(

                    backgroundColor:
                        Colors.red,

                    child: Icon(

                      Icons.warning,

                      color:
                          Colors.white,
                    ),
                  ),

                  title: Text(

                    "Device: ${alert["deviceId"]}",
                  ),

                  subtitle: Column(

                    crossAxisAlignment:
                        CrossAxisAlignment
                            .start,

                    children: [

                      Text(
                        "Latitude: ${alert["latitude"]}",
                      ),

                      Text(
                        "Longitude: ${alert["longitude"]}",
                      ),

                      const Text(

                        "EMERGENCY ACTIVE",

                        style: TextStyle(

                          color:
                              Colors.red,

                          fontWeight:
                              FontWeight.bold,
                        ),
                      ),
                    ],
                  ),
                ),
              );
            }).toList(),
          );
        },
      ),
    );
  }
}