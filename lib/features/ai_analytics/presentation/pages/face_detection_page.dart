import 'dart:io';

import 'package:flutter/material.dart';

import 'package:image_picker/image_picker.dart';

import '../../data/services/face_security_service.dart';

class FaceDetectionPage
    extends StatefulWidget {

  const FaceDetectionPage({
    super.key,
  });

  @override
  State<FaceDetectionPage>
      createState() =>
          _FaceDetectionPageState();
}

class _FaceDetectionPageState
    extends State<FaceDetectionPage> {

  File? imageFile;

  bool detecting = false;

  String result =
      "No Face Scan Yet";

  // =====================================
  // PICK IMAGE
  // =====================================
  Future<void>
      pickImage() async {

    final picker =
        ImagePicker();

    final picked =
        await picker.pickImage(

      source: ImageSource.camera,
    );

    if (picked == null) {
      return;
    }

    imageFile =
        File(picked.path);

    setState(() {
      detecting = true;
    });

    final found =
        await FaceSecurityService
            .detectFace(
      imageFile!,
    );

    setState(() {

      detecting = false;

      result =
          found
              ? "FACE DETECTED"
              : "NO FACE DETECTED";
    });
  }

  @override
  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(

        title: const Text(
          "Facial Intrusion Detection",
        ),
      ),

      body: Center(

        child: Column(

          mainAxisAlignment:
              MainAxisAlignment.center,

          children: [

            imageFile != null

                ? Image.file(

                    imageFile!,

                    width: 250,
                    height: 250,

                    fit: BoxFit.cover,
                  )

                : const Icon(

                    Icons.face,

                    size: 150,

                    color: Colors.grey,
                  ),

            const SizedBox(height: 30),

            Text(

              result,

              style: TextStyle(

                fontSize: 28,

                fontWeight:
                    FontWeight.bold,

                color:
                    result.contains(
                            "DETECTED")
                        ? Colors.green
                        : Colors.red,
              ),
            ),

            const SizedBox(height: 40),

            SizedBox(

              width: 260,
              height: 65,

              child: ElevatedButton.icon(

                onPressed:
                    detecting
                        ? null
                        : pickImage,

                icon:
                    detecting

                        ? const CircularProgressIndicator(
                            color:
                                Colors.white,
                          )

                        : const Icon(
                            Icons.camera,
                          ),

                label: Text(

                  detecting
                      ? "Scanning..."
                      : "Scan Face",

                  style: const TextStyle(
                    fontSize: 20,
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}