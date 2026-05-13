import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter_map/flutter_map.dart';
import 'package:latlong2/latlong.dart';

import '../../data/firebase/firebase_tracking_service.dart';
import '../../data/services/location_service.dart';

class TrackingPage extends StatefulWidget {

  TrackingPage({super.key});

  @override
  State<TrackingPage> createState() =>
      _TrackingPageState();
}

class _TrackingPageState
    extends State<TrackingPage> {

  double latitude = 17.3850;
  double longitude = 78.4867;

  bool isTracking = false;

  StreamSubscription? stream;

  // =====================================
  // START TRACKING
  // =====================================
  void startTracking() {

    setState(() {
      isTracking = true;
    });

    stream = LocationService
        .getLiveLocation()
        .listen((position) async {

      setState(() {

        latitude = position.latitude;
        longitude = position.longitude;
      });

      // =====================================
      // SEND LOCATION TO FIREBASE
      // =====================================
      await FirebaseTrackingService
          .updateLocation(

        deviceId: "TS-1001",

        latitude: latitude,

        longitude: longitude,
      );
    });
  }

  // =====================================
  // STOP TRACKING
  // =====================================
  void stopTracking() {

    stream?.cancel();

    setState(() {
      isTracking = false;
    });
  }

  @override
  void dispose() {

    stream?.cancel();

    super.dispose();
  }

  @override
  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(

        title: const Text(
          "Live Tracking",
        ),
      ),

      body: Column(

        children: [

          const SizedBox(height: 20),

          // =====================================
          // BUTTONS
          // =====================================
          Row(

            children: [

              Expanded(

                child: Padding(

                  padding:
                      const EdgeInsets.all(8),

                  child: ElevatedButton.icon(

                    onPressed:
                        isTracking
                            ? null
                            : startTracking,

                    icon: const Icon(
                      Icons.play_arrow,
                    ),

                    label: const Text(
                      "Start Tracking",
                    ),

                    style:
                        ElevatedButton.styleFrom(

                      minimumSize:
                          const Size(
                        double.infinity,
                        60,
                      ),
                    ),
                  ),
                ),
              ),

              Expanded(

                child: Padding(

                  padding:
                      const EdgeInsets.all(8),

                  child: ElevatedButton.icon(

                    onPressed:
                        isTracking
                            ? stopTracking
                            : null,

                    icon: const Icon(
                      Icons.stop,
                    ),

                    label: const Text(
                      "Stop",
                    ),

                    style:
                        ElevatedButton.styleFrom(

                      backgroundColor:
                          Colors.red,

                      minimumSize:
                          const Size(
                        double.infinity,
                        60,
                      ),
                    ),
                  ),
                ),
              ),
            ],
          ),

          // =====================================
          // MAP
          // =====================================
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

          // =====================================
          // LOCATION INFO
          // =====================================
          Container(

            width: double.infinity,

            padding:
                const EdgeInsets.all(20),

            child: Column(

              crossAxisAlignment:
                  CrossAxisAlignment.start,

              children: [

                Text(

                  "Latitude: $latitude",

                  style: const TextStyle(

                    fontSize: 18,

                    fontWeight:
                        FontWeight.bold,
                  ),
                ),

                const SizedBox(height: 10),

                Text(

                  "Longitude: $longitude",

                  style: const TextStyle(

                    fontSize: 18,

                    fontWeight:
                        FontWeight.bold,
                  ),
                ),

                const SizedBox(height: 15),

                Text(

                  isTracking
                      ? "Realtime Tracking Active"
                      : "Tracking Stopped",

                  style: TextStyle(

                    color:
                        isTracking
                            ? Colors.green
                            : Colors.red,

                    fontSize: 18,

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