import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:flutter_map/flutter_map.dart';
import 'package:latlong2/latlong.dart';

import '../../data/models/tracked_device_model.dart';

class DeviceFinderPage
    extends StatefulWidget {

  const DeviceFinderPage({
    super.key,
  });

  @override
  State<DeviceFinderPage>
      createState() =>
          _DeviceFinderPageState();
}

class _DeviceFinderPageState
    extends State<DeviceFinderPage> {

  final FirebaseFirestore firestore =
      FirebaseFirestore.instance;

  final TextEditingController
      deviceController =
      TextEditingController();

  String trackedDeviceId = "";

  @override
  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(

        title: const Text(
          "Device Finder",
        ),
      ),

      body: Column(

        children: [

          const SizedBox(height: 20),

          // =====================
          // SEARCH BOX
          // =====================
          Padding(

            padding:
                const EdgeInsets.symmetric(
              horizontal: 16,
            ),

            child: TextField(

              controller:
                  deviceController,

              decoration:
                  InputDecoration(

                hintText:
                    "Enter Device ID",

                border:
                    OutlineInputBorder(

                  borderRadius:
                      BorderRadius.circular(
                    12,
                  ),
                ),

                suffixIcon: IconButton(

                  onPressed: () {

                    setState(() {

                      trackedDeviceId =
                          deviceController
                              .text
                              .trim();
                    });
                  },

                  icon: const Icon(
                    Icons.search,
                  ),
                ),
              ),
            ),
          ),

          const SizedBox(height: 20),

          // =====================
          // TRACKED DEVICE
          // =====================
          Expanded(

            child:
                trackedDeviceId.isEmpty

                    ? const Center(

                        child: Text(

                          "Enter Device ID To Track",
                        ),
                      )

                    : StreamBuilder<DocumentSnapshot>(

                        stream: firestore
                            .collection(
                              "live_locations",
                            )
                            .doc(
                              trackedDeviceId,
                            )
                            .snapshots(),

                        builder:
                            (
                              context,
                              snapshot,
                            ) {

                          if (!snapshot
                                  .hasData ||
                              !snapshot.data!
                                  .exists) {

                            return const Center(

                              child: Text(
                                "Device Not Found",
                              ),
                            );
                          }

                          final data =
                              snapshot.data!
                                      .data()
                                  as Map<String,
                                      dynamic>;

                          final device =
                              TrackedDeviceModel
                                  .fromMap(

                            data,
                            trackedDeviceId,
                          );

                          return Column(

                            children: [

                              // =====================
                              // MAP
                              // =====================
                              Expanded(

                                child: FlutterMap(

                                  options:
                                      MapOptions(

                                    initialCenter:
                                        LatLng(

                                      device
                                          .latitude,

                                      device
                                          .longitude,
                                    ),

                                    initialZoom:
                                        16,
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

                                          point:
                                              LatLng(

                                            device
                                                .latitude,

                                            device
                                                .longitude,
                                          ),

                                          width:
                                              80,

                                          height:
                                              80,

                                          child:
                                              const Icon(

                                            Icons
                                                .location_pin,

                                            color:
                                                Colors.red,

                                            size:
                                                50,
                                          ),
                                        ),
                                      ],
                                    ),
                                  ],
                                ),
                              ),

                              // =====================
                              // DEVICE INFO
                              // =====================
                              Container(

                                width:
                                    double.infinity,

                                padding:
                                    const EdgeInsets
                                        .all(
                                  20,
                                ),

                                child: Column(

                                  crossAxisAlignment:
                                      CrossAxisAlignment
                                          .start,

                                  children: [

                                    Text(

                                      "Device ID: ${device.userId}",

                                      style:
                                          const TextStyle(

                                        fontSize:
                                            18,

                                        fontWeight:
                                            FontWeight
                                                .bold,
                                      ),
                                    ),

                                    const SizedBox(
                                      height: 10,
                                    ),

                                    Text(

                                      "Latitude: ${device.latitude}",

                                      style:
                                          const TextStyle(

                                        fontSize:
                                            18,
                                      ),
                                    ),

                                    const SizedBox(
                                      height: 10,
                                    ),

                                    Text(

                                      "Longitude: ${device.longitude}",

                                      style:
                                          const TextStyle(

                                        fontSize:
                                            18,
                                      ),
                                    ),

                                    const SizedBox(
                                      height: 10,
                                    ),

                                    Row(

                                      children: [

                                        Icon(

                                          Icons.circle,

                                          size: 14,

                                          color: device
                                                  .isOnline
                                              ? Colors
                                                  .green
                                              : Colors
                                                  .red,
                                        ),

                                        const SizedBox(
                                          width: 10,
                                        ),

                                        Text(

                                          device.isOnline
                                              ? "Online"
                                              : "Offline",

                                          style:
                                              TextStyle(

                                            fontSize:
                                                18,

                                            fontWeight:
                                                FontWeight
                                                    .bold,

                                            color: device
                                                    .isOnline
                                                ? Colors
                                                    .green
                                                : Colors
                                                    .red,
                                          ),
                                        ),
                                      ],
                                    ),
                                  ],
                                ),
                              ),
                            ],
                          );
                        },
                      ),
          ),
        ],
      ),
    );
  }
}