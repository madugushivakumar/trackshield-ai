import 'package:firebase_database/firebase_database.dart';

import 'package:flutter/material.dart';

import '../../data/services/device_registry_service.dart';

class DeviceRegistryPage
    extends StatefulWidget {

  const DeviceRegistryPage({
    super.key,
  });

  @override
  State<DeviceRegistryPage>
      createState() =>
          _DeviceRegistryPageState();
}

class _DeviceRegistryPageState
    extends State<DeviceRegistryPage> {

  @override
  void initState() {

    super.initState();

    DeviceRegistryService
        .registerDevice(

      deviceId: "TS-1001",

      owner: "TrackShield User",

      platform: "Flutter",
    );
  }

  @override
  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(

        title: const Text(
          "Device Registry",
        ),
      ),

      body:
          StreamBuilder<DatabaseEvent>(

        stream:
            DeviceRegistryService
                .getDevices(),

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
                "No Registered Devices",
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
                      const CircleAvatar(

                    backgroundColor:
                        Colors.blue,

                    child: Icon(

                      Icons.devices,

                      color:
                          Colors.white,
                    ),
                  ),

                  title: Text(
                    item["deviceId"],
                  ),

                  subtitle: Text(

                    "${item["owner"]} • ${item["platform"]}",
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