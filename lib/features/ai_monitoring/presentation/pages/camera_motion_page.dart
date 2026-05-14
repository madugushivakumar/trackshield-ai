import 'package:camera/camera.dart';

import 'package:flutter/material.dart';

class CameraMotionPage
    extends StatefulWidget {

  const CameraMotionPage({
    super.key,
  });

  @override
  State<CameraMotionPage>
      createState() =>
          _CameraMotionPageState();
}

class _CameraMotionPageState
    extends State<CameraMotionPage> {

  CameraController?
      cameraController;

  bool cameraReady = false;

  bool monitoring = false;

  // =====================================
  // INIT CAMERA
  // =====================================
  Future<void>
      initializeCamera() async {

    final cameras =
        await availableCameras();

    final firstCamera =
        cameras.first;

    cameraController =
        CameraController(

      firstCamera,

      ResolutionPreset.medium,
    );

    await cameraController!
        .initialize();

    setState(() {
      cameraReady = true;
    });
  }

  @override
  void initState() {

    super.initState();

    initializeCamera();
  }

  // =====================================
  // TOGGLE MONITORING
  // =====================================
  void toggleMonitoring() {

    setState(() {
      monitoring = !monitoring;
    });

    if (monitoring) {

      ScaffoldMessenger.of(context)
          .showSnackBar(

        const SnackBar(

          backgroundColor:
              Colors.red,

          content: Text(
            "AI MOTION MONITORING ACTIVE",
          ),
        ),
      );
    }
  }

  @override
  void dispose() {

    cameraController?.dispose();

    super.dispose();
  }

  @override
  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(

        title: const Text(
          "Camera Motion AI",
        ),
      ),

      body:
          cameraReady

              ? Column(

                  children: [

                    Expanded(

                      child: CameraPreview(
                        cameraController!,
                      ),
                    ),

                    Container(

                      padding:
                          const EdgeInsets
                              .all(20),

                      child: Column(

                        children: [

                          Text(

                            monitoring
                                ? "MOTION AI ACTIVE"
                                : "MOTION AI OFF",

                            style: TextStyle(

                              fontSize: 28,

                              fontWeight:
                                  FontWeight
                                      .bold,

                              color:
                                  monitoring
                                      ? Colors.red
                                      : Colors.green,
                            ),
                          ),

                          const SizedBox(
                            height: 20,
                          ),

                          SizedBox(

                            width: 260,
                            height: 65,

                            child:
                                ElevatedButton
                                    .icon(

                              onPressed:
                                  toggleMonitoring,

                              icon: Icon(

                                monitoring
                                    ? Icons.stop
                                    : Icons
                                        .videocam,
                              ),

                              label: Text(

                                monitoring
                                    ? "Stop Monitoring"
                                    : "Start AI Monitoring",

                                style:
                                    const TextStyle(
                                  fontSize: 20,
                                ),
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],
                )

              : const Center(
                  child:
                      CircularProgressIndicator(),
                ),
    );
  }
}