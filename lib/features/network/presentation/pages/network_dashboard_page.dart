import 'package:firebase_database/firebase_database.dart';

import 'package:flutter/material.dart';

import '../../data/services/heartbeat_service.dart';

class NetworkDashboardPage
    extends StatefulWidget {

  const NetworkDashboardPage({
    super.key,
  });

  @override
  State<NetworkDashboardPage>
      createState() =>
          _NetworkDashboardPageState();
}

class _NetworkDashboardPageState
    extends State<NetworkDashboardPage> {

  @override
  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(

        title: const Text(
          "Live Device Network",
        ),
      ),

      body:
          StreamBuilder<DatabaseEvent>(

        stream:
            HeartbeatService
                .getDeviceStatus(),

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
                "No Devices Online",
              ),
            );
          }

          final devices =
              Map<String, dynamic>.from(
            data as Map,
          );

          return ListView(

            children:
                devices.entries.map((entry) {

              final item =
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
                      CircleAvatar(

                    backgroundColor:
                        item["online"]
                            ? Colors.green
                            : Colors.red,

                    child: Icon(

                      item["online"]
                          ? Icons.wifi
                          : Icons.wifi_off,

                      color:
                          Colors.white,
                    ),
                  ),

                  title: Text(
                    entry.key,
                  ),

                  subtitle: Text(

                    item["online"]
                        ? "ONLINE"
                        : "OFFLINE",
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