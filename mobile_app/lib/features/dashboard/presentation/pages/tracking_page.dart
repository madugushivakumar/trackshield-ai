import 'dart:async';

import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:flutter_map/flutter_map.dart';
import 'package:geolocator/geolocator.dart';
import 'package:latlong2/latlong.dart';

import '../../../../core/services/location_service.dart';

class TrackingPage extends StatefulWidget {

  const TrackingPage({super.key});

  @override
  State<TrackingPage> createState() =>
      _TrackingPageState();
}

class _TrackingPageState
    extends State<TrackingPage> {

  // =========================
  // CURRENT LOCATION
  // =========================
  double latitude = 17.3850;

  double longitude = 78.4867;

  // =========================
  // TRACKING STATUS
  // =========================
  bool isTracking = false;

  // =========================
  // USER ID
  // =========================
  final String userId =
      "trackshield_user_1";

  // =========================
  // MAP CONTROLLER
  // =========================
  final MapController mapController =
      MapController();

  // =========================
  // LOCATION STREAM
  // =========================
  StreamSubscription<Position>?
      positionStream;

  // =========================
  // START LIVE TRACKING
  // =========================
  Future<void> startTracking() async {

    bool serviceEnabled =
        await Geolocator
            .isLocationServiceEnabled();

    if (!serviceEnabled) {

      ScaffoldMessenger.of(context)
          .showSnackBar(

        const SnackBar(
          content: Text(
            "Please Enable GPS",
          ),
        ),
      );

      return;
    }

    // =========================
    // LOCATION PERMISSION
    // =========================
    LocationPermission permission =
        await Geolocator
            .checkPermission();

    if (permission ==
        LocationPermission.denied) {

      permission =
          await Geolocator
              .requestPermission();
    }

    if (permission ==
            LocationPermission.denied ||
        permission ==
            LocationPermission
                .deniedForever) {

      ScaffoldMessenger.of(context)
          .showSnackBar(

        const SnackBar(
          content: Text(
            "Location Permission Denied",
          ),
        ),
      );

      return;
    }

    // =========================
    // START TRACKING
    // =========================
    setState(() {
      isTracking = true;
    });

    ScaffoldMessenger.of(context)
        .showSnackBar(

      const SnackBar(
        content: Text(
          "Live Tracking Started",
        ),
      ),
    );

    // =========================
    // LIVE LOCATION STREAM
    // =========================
    positionStream =
        LocationService
            .getLiveLocation()

            .listen(

      (Position position) async {

        // =========================
        // UPDATE UI
        // =========================
        setState(() {

          latitude =
              position.latitude;

          longitude =
              position.longitude;
        });

        // =========================
        // MOVE MAP
        // =========================
        mapController.move(

          LatLng(
            latitude,
            longitude,
          ),

          mapController.camera.zoom,
        );

        // =========================
        // SAVE TO FIREBASE
        // =========================
        await LocationService
            .uploadLiveLocation(

          userId: userId,

          latitude: latitude,

          longitude: longitude,
        );
      },
    );
  }

  // =========================
  // STOP TRACKING
  // =========================
  Future<void> stopTracking() async {

    await positionStream?.cancel();

    await LocationService
        .stopTracking(

      userId: userId,
    );

    setState(() {
      isTracking = false;
    });

    ScaffoldMessenger.of(context)
        .showSnackBar(

      const SnackBar(
        content: Text(
          "Tracking Stopped",
        ),
      ),
    );
  }

  // =========================
  // DISPOSE
  // =========================
  @override
  void dispose() {

    positionStream?.cancel();

    super.dispose();
  }

  // =========================
  // UI
  // =========================
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

          // =========================
          // BUTTONS
          // =========================
          Padding(

            padding:
                const EdgeInsets.symmetric(
              horizontal: 16,
            ),

            child: Row(

              children: [

                // START BUTTON
                Expanded(

                  child: SizedBox(

                    height: 55,

                    child:
                        ElevatedButton.icon(

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
                    ),
                  ),
                ),

                const SizedBox(width: 15),

                // STOP BUTTON
                Expanded(

                  child: SizedBox(

                    height: 55,

                    child:
                        ElevatedButton.icon(

                      style:
                          ElevatedButton
                              .styleFrom(

                        backgroundColor:
                            Colors.red,
                      ),

                      onPressed:
                          isTracking
                              ? stopTracking
                              : null,

                      icon: const Icon(
                        Icons.stop,
                        color: Colors.white,
                      ),

                      label: const Text(

                        "Stop",

                        style: TextStyle(
                          color:
                              Colors.white,
                        ),
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),

          const SizedBox(height: 20),

          // =========================
          // MAP
          // =========================
          Expanded(

            child: FlutterMap(

              mapController:
                  mapController,

              options: MapOptions(

                initialCenter: LatLng(
                  latitude,
                  longitude,
                ),

                initialZoom: 15,
              ),

              children: [

                // =========================
                // MAP TILES
                // =========================
                TileLayer(

                  urlTemplate:
                      'https://tile.openstreetmap.org/{z}/{x}/{y}.png',

                  userAgentPackageName:
                      'com.trackshield.ai',
                ),

                // =========================
                // LIVE MARKER
                // =========================
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

                        color: Colors.red,

                        size: 50,
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),

          // =========================
          // LOCATION DETAILS
          // =========================
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

                const SizedBox(height: 10),

                Text(

                  isTracking
                      ? "Tracking Active"
                      : "Tracking Stopped",

                  style: TextStyle(

                    fontSize: 18,

                    fontWeight:
                        FontWeight.bold,

                    color:
                        isTracking
                            ? Colors.green
                            : Colors.red,
                  ),
                ),

                const SizedBox(height: 10),

                const Text(

                  "Realtime Firebase Sync Enabled",

                  style: TextStyle(

                    fontSize: 16,

                    fontWeight:
                        FontWeight.w500,

                    color: Colors.blue,
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