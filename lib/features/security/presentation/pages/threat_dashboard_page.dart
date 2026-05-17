import 'package:firebase_database/firebase_database.dart';

import 'package:flutter/material.dart';

import '../../data/services/security_service.dart';

class ThreatDashboardPage
    extends StatefulWidget {

  const ThreatDashboardPage({
    super.key,
  });

  @override
  State<ThreatDashboardPage>
      createState() =>
          _ThreatDashboardPageState();
}

class _ThreatDashboardPageState
    extends State<ThreatDashboardPage> {

  @override
  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(

        title: const Text(
          "Threat Dashboard",
        ),
      ),

      body: StreamBuilder<DatabaseEvent>(

        stream:
            SecurityService
                .getIntruderAlerts(),

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
                "No Threat Alerts",
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

                  leading:
                      const CircleAvatar(

                    backgroundColor:
                        Colors.red,

                    child: Icon(

                      Icons.warning,

                      color:
                          Colors.white,
                    ),
                  ),

                  title: Text(

                    alert["message"],
                  ),

                  subtitle: Text(

                    "Device: ${alert["deviceId"]}",
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