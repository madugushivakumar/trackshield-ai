import 'package:firebase_database/firebase_database.dart';
import 'package:flutter/material.dart';
import 'package:flutter_map/flutter_map.dart';
import 'package:latlong2/latlong.dart';

import '../../data/firebase/firebase_tracking_service.dart';

class RemoteTrackingPage
    extends StatefulWidget {

  const RemoteTrackingPage({
    super.key,
  });

  @override
  State<RemoteTrackingPage>
      createState() =>
          _RemoteTrackingPageState();
}

class _RemoteTrackingPageState
    extends State<RemoteTrackingPage> {

  double latitude = 17.3850;
  double longitude = 78.4867;

  @override
  void initState() {

    super.initState();

    FirebaseTrackingService
        .getLiveLocation("TS-1001")
        .listen((event) {

      final data =
          event.snapshot.value
              as Map?;

      if (data != null) {

        setState(() {

          latitude =
              data["latitude"];

          longitude =
              data["longitude"];
        });
      }
    });
  }

  @override
  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(
        title: const Text(
          "Remote Device Tracking",
        ),
      ),

      body: Column(

        children: [

          Expanded(

            child: FlutterMap(

              options: MapOptions(

                initialCenter:
                    LatLng(
                  latitude,
                  longitude,
                ),

                initialZoom: 15,
              ),

              children: [

                TileLayer(

                  urlTemplate:
                      'https://tile.openstreetmap.org/{z}/{x}/{y}.png',

                  userAgentPackageName:
                      'com.trackshield.ai',
                ),

                MarkerLayer(

                  markers: [

                    Marker(

                      point: LatLng(
                        latitude,
                        longitude,
                      ),

                      width: 80,
                      height: 80,

                      child: const Icon(
                        Icons.location_pin,
                        size: 50,
                        color: Colors.red,
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),

          Padding(

            padding:
                const EdgeInsets.all(20),

            child: Column(

              children: [

                Text(
                  "Latitude: $latitude",
                  style: const TextStyle(
                    fontSize: 22,
                    fontWeight:
                        FontWeight.bold,
                  ),
                ),

                const SizedBox(height: 10),

                Text(
                  "Longitude: $longitude",
                  style: const TextStyle(
                    fontSize: 22,
                    fontWeight:
                        FontWeight.bold,
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