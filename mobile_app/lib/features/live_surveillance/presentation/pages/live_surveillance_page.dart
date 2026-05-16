import 'package:flutter/material.dart';

import 'package:camera/camera.dart';

class LiveSurveillancePage
    extends StatefulWidget {

  const LiveSurveillancePage({
    super.key,
  });

  @override
  State<LiveSurveillancePage>
      createState() =>
          _LiveSurveillancePageState();
}

class _LiveSurveillancePageState
    extends State<LiveSurveillancePage> {

  CameraController?
      _controller;

  bool isLoading = true;

  bool hasError = false;

  // =====================================
  // INIT
  // =====================================
  @override
  void initState() {

    super.initState();

    initializeCamera();
  }

  // =====================================
  // INITIALIZE CAMERA
  // =====================================
  Future<void>
      initializeCamera() async {

    try {

      final cameras =
          await availableCameras();

      if (cameras.isEmpty) {

        setState(() {

          hasError = true;
        });

        return;
      }

      _controller =
          CameraController(

        cameras.first,

        ResolutionPreset.medium,

        enableAudio: false,
      );

      await _controller!
          .initialize();

      if (!mounted) return;

      setState(() {

        isLoading = false;
      });

    } catch (e) {

      print(
        "LIVE CAMERA ERROR: $e",
      );

      if (!mounted) return;

      setState(() {

        hasError = true;

        isLoading = false;
      });
    }
  }

  // =====================================
  // DISPOSE
  // =====================================
  @override
  void dispose() {

    _controller?.dispose();

    super.dispose();
  }

  // =====================================
  // UI
  // =====================================
  @override
  Widget build(
    BuildContext context,
  ) {

    return Scaffold(

      backgroundColor:
          const Color(
        0xFF050816,
      ),

      appBar: AppBar(

        backgroundColor:
            Colors.black,

        title: const Text(

          "Live Surveillance",

          style: TextStyle(
            color: Colors.white,
          ),
        ),
      ),

      body: Center(

        child: isLoading

            ? const CircularProgressIndicator()

            : hasError

                ? const Text(

                    "Camera unavailable",

                    style: TextStyle(
                      color: Colors.white,
                    ),
                  )

                : Column(

                    children: [

                      Expanded(

                        child: ClipRRect(

                          borderRadius:
                              BorderRadius.circular(
                            20,
                          ),

                          child: CameraPreview(
                            _controller!,
                          ),
                        ),
                      ),

                      Container(

                        width:
                            double.infinity,

                        padding:
                            const EdgeInsets.all(
                          18,
                        ),

                        color:
                            Colors.black,

                        child: const Row(

                          mainAxisAlignment:
                              MainAxisAlignment.spaceBetween,

                          children: [

                            Text(

                              "LIVE FEED ACTIVE",

                              style: TextStyle(

                                color:
                                    Colors.green,

                                fontSize: 16,

                                fontWeight:
                                    FontWeight.bold,
                              ),
                            ),

                            Icon(

                              Icons.videocam,

                              color:
                                  Colors.red,
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