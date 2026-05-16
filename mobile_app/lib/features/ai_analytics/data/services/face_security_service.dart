import 'dart:io';

import 'package:google_mlkit_face_detection/google_mlkit_face_detection.dart';

class FaceSecurityService {

  static final FaceDetector
      faceDetector = FaceDetector(

    options: FaceDetectorOptions(

      enableContours: true,

      enableClassification: true,
    ),
  );

  // =====================================
  // DETECT FACE
  // =====================================
  static Future<bool>
      detectFace(
    File imageFile,
  ) async {

    final inputImage =
        InputImage.fromFile(
      imageFile,
    );

    final faces =
        await faceDetector
            .processImage(
      inputImage,
    );

    return faces.isNotEmpty;
  }
}