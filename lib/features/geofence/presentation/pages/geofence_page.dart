import 'dart:async';

import 'package:flutter/material.dart';
import 'package:geolocator/geolocator.dart';

import 'package:mobile_app/features/tracking/data/services/location_service.dart';

import '../../data/services/geofence_service.dart';

class GeofencePage
    extends StatefulWidget {

  const GeofencePage({
    super.key,
  });

  @override
  State<GeofencePage> createState() =>
      _GeofencePageState();
}

class _GeofencePageState
    extends State<GeofencePage> {

  // =========================
  // SAFE ZONE
  // =========================
  double safeLat = 17.324879;

  double safeLng = 78.5878865;

  double radius = 100;

  // =========================
  // CURRENT LOCATION
  // =========================
  double currentLat = 0;

  double currentLng = 0;

  bool isInside = true;

  bool monitoring = false;

  StreamSubscription<Position>?
      stream;

  // =========================
  // START MONITORING
  // =========================
  void startMonitoring() {

    setState(() {
      monitoring = true;
    });

    stream = LocationService
        .getLiveLocation()
        .listen(

      (Position position) {

        currentLat =
            position.latitude;

        currentLng =
            position.longitude;

        final inside =
            GeofenceService
                .isInsideGeofence(

          currentLat: currentLat,

          currentLng: currentLng,

          centerLat: safeLat,

          centerLng: safeLng,

          radius: radius,
        );

        setState(() {
          isInside = inside;
        });

        // ALERT
        if (!inside) {

          ScaffoldMessenger.of(context)
              .showSnackBar(

            const SnackBar(

              backgroundColor:
                  Colors.red,

              content: Text(
                "WARNING: Device Left Safe Zone",
              ),
            ),
          );
        }
      },
    );
  }

  // =========================
  // STOP MONITORING
  // =========================
  void stopMonitoring() {

    stream?.cancel();

    setState(() {
      monitoring = false;
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
          "Geofence Security",
        ),
      ),

      body: Padding(

        padding:
            const EdgeInsets.all(20),

        child: Column(

          crossAxisAlignment:
              CrossAxisAlignment.start,

          children: [

            // =====================
            // BUTTONS
            // =====================
            Row(

              children: [

                Expanded(

                  child: ElevatedButton(

                    onPressed:
                        monitoring
                            ? null
                            : startMonitoring,

                    child: const Text(
                      "Start Monitoring",
                    ),
                  ),
                ),

                const SizedBox(width: 20),

                Expanded(

                  child: ElevatedButton(

                    style:
                        ElevatedButton
                            .styleFrom(

                      backgroundColor:
                          Colors.red,
                    ),

                    onPressed:
                        monitoring
                            ? stopMonitoring
                            : null,

                    child: const Text(

                      "Stop",

                      style: TextStyle(
                        color:
                            Colors.white,
                      ),
                    ),
                  ),
                ),
              ],
            ),

            const SizedBox(height: 30),

            Text(

              "Safe Zone Radius: ${radius.toInt()} meters",

              style: const TextStyle(

                fontSize: 20,

                fontWeight:
                    FontWeight.bold,
              ),
            ),

            const SizedBox(height: 20),

            Text(

              "Latitude: $currentLat",

              style: const TextStyle(
                fontSize: 18,
              ),
            ),

            const SizedBox(height: 10),

            Text(

              "Longitude: $currentLng",

              style: const TextStyle(
                fontSize: 18,
              ),
            ),

            const SizedBox(height: 30),

            Container(

              width: double.infinity,

              padding:
                  const EdgeInsets.all(20),

              decoration: BoxDecoration(

                color:
                    isInside
                        ? Colors.green
                            .withOpacity(
                              0.1,
                            )
                        : Colors.red
                            .withOpacity(
                              0.1,
                            ),

                borderRadius:
                    BorderRadius.circular(
                  20,
                ),

                border: Border.all(

                  color:
                      isInside
                          ? Colors.green
                          : Colors.red,

                  width: 2,
                ),
              ),

              child: Column(

                children: [

                  Icon(

                    isInside
                        ? Icons.verified_user
                        : Icons.warning,

                    color:
                        isInside
                            ? Colors.green
                            : Colors.red,

                    size: 70,
                  ),

                  const SizedBox(height: 20),

                  Text(

                    isInside
                        ? "DEVICE INSIDE SAFE ZONE"
                        : "SECURITY ALERT",

                    textAlign:
                        TextAlign.center,

                    style: TextStyle(

                      fontSize: 22,

                      fontWeight:
                          FontWeight.bold,

                      color:
                          isInside
                              ? Colors.green
                              : Colors.red,
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}