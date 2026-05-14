import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter_map/flutter_map.dart';
import 'package:latlong2/latlong.dart';

import '../../data/firebase/firebase_tracking_service.dart';
import '../../data/services/location_service.dart';

import '../../../../core/background/gps_background_service.dart';

class TrackingPage extends StatefulWidget {

  const TrackingPage({super.key});

  @override
  State<TrackingPage> createState() =>
      _TrackingPageState();
}

class _TrackingPageState
    extends State<TrackingPage> {

  // =========================================
  // DEFAULT LOCATION
  // =========================================

  double latitude = 17.3850;
  double longitude = 78.4867;

  // =========================================
  // TRACKING STATE
  // =========================================

  bool isTracking = false;

  StreamSubscription? stream;

  final MapController mapController =
      MapController();

  // =========================================
  // START TRACKING
  // =========================================

  Future<void> startTracking() async {

    // PREVENT MULTIPLE STREAMS

    if (isTracking) return;

    setState(() {
      isTracking = true;
    });

    // =====================================
    // START BACKGROUND SERVICE
    // =====================================

    await GPSBackgroundService
        .startService();

    // =====================================
    // LIVE LOCATION STREAM
    // =====================================

    stream = LocationService
        .getLiveLocation()
        .listen(

      (position) async {

        latitude = position.latitude;
        longitude = position.longitude;

        // =================================
        // UPDATE UI
        // =================================

        if (mounted) {

          setState(() {});
        }

        // =================================
        // MOVE MAP CAMERA
        // =================================

        mapController.move(

          LatLng(latitude, longitude),

          15,
        );

        // =================================
        // FIREBASE REALTIME SYNC
        // =================================

        await FirebaseTrackingService
            .updateLocation(

          deviceId: "TS-1001",

          latitude: latitude,

          longitude: longitude,
        );
      },

      onError: (error) {

        debugPrint(
          "Tracking Error: $error",
        );
      },
    );
  }

  // =========================================
  // STOP TRACKING
  // =========================================

  Future<void> stopTracking() async {

    await stream?.cancel();

    setState(() {

      isTracking = false;
    });
  }

  // =========================================
  // DISPOSE
  // =========================================

  @override
  void dispose() {

    stream?.cancel();

    super.dispose();
  }

  // =========================================
  // UI
  // =========================================

  @override
  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(

        title: const Text(
          "Live Tracking",
        ),

        centerTitle: true,
      ),

      body: Column(

        children: [

          const SizedBox(height: 15),

          // =================================
          // CONTROL BUTTONS
          // =================================

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

          // =================================
          // LIVE MAP
          // =================================

          Expanded(

            child: FlutterMap(

              mapController:
                  mapController,

              options: MapOptions(

                initialCenter:
                    LatLng(
                  latitude,
                  longitude,
                ),

                initialZoom: 15,
              ),

              children: [

                // =============================
                // MAP TILES
                // =============================

                TileLayer(

                  urlTemplate:
                      'https://tile.openstreetmap.org/{z}/{x}/{y}.png',

                  userAgentPackageName:
                      'com.trackshield.ai',
                ),

                // =============================
                // DEVICE MARKER
                // =============================

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

          // =================================
          // LOCATION PANEL
          // =================================

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

                Row(

                  children: [

                    Icon(

                      isTracking
                          ? Icons.gps_fixed
                          : Icons.gps_off,

                      color:
                          isTracking
                              ? Colors.green
                              : Colors.red,
                    ),

                    const SizedBox(width: 10),

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

                const SizedBox(height: 10),

                if (isTracking)

                  const Text(

                    "Background GPS Tracking Enabled",

                    style: TextStyle(

                      color: Colors.blue,

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