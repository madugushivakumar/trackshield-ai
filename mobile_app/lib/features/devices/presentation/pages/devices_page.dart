import 'package:flutter/material.dart';

import '../../data/models/device_model.dart';
import '../../data/services/device_service.dart';

class DevicesPage extends StatelessWidget {

  const DevicesPage({super.key});

  @override
  Widget build(BuildContext context) {

    List<DeviceModel> devices =
        DeviceService.getDevices();

    return Scaffold(

      appBar: AppBar(
        title: const Text(
          "My Devices",
        ),
      ),

      body: ListView.builder(

        itemCount: devices.length,

        itemBuilder: (context, index) {

          final device = devices[index];

          return Card(

            margin: const EdgeInsets.all(12),

            child: ListTile(

              leading: CircleAvatar(

                backgroundColor:
                    device.isOnline
                        ? Colors.green
                        : Colors.red,

                child: const Icon(
                  Icons.phone_android,
                  color: Colors.white,
                ),
              ),

              title: Text(
                device.deviceName,
              ),

              subtitle: Column(

                crossAxisAlignment:
                    CrossAxisAlignment.start,

                children: [

                  Text(
                    "Device ID: ${device.deviceId}",
                  ),

                  Text(
                    "Latitude: ${device.latitude}",
                  ),

                  Text(
                    "Longitude: ${device.longitude}",
                  ),

                  Text(
                    device.isOnline
                        ? "ONLINE"
                        : "OFFLINE",

                    style: TextStyle(

                      color:
                          device.isOnline
                              ? Colors.green
                              : Colors.red,

                      fontWeight:
                          FontWeight.bold,
                    ),
                  ),
                ],
              ),

              trailing: IconButton(

                icon: const Icon(
                  Icons.location_on,
                  color: Colors.blue,
                ),

                onPressed: () {

                  ScaffoldMessenger.of(context)
                      .showSnackBar(

                    SnackBar(
                      content: Text(
                        "Opening tracking for ${device.deviceName}",
                      ),
                    ),
                  );
                },
              ),
            ),
          );
        },
      ),
    );
  }
}