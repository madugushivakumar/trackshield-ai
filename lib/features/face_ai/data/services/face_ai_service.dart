import 'dart:io';

import 'package:firebase_database/firebase_database.dart';

import 'package:google_mlkit_face_detection/google_mlkit_face_detection.dart';

import '../../../threat_ai/data/services/threat_ai_service.dart';

class FaceAIService {

  // =====================================
  // FIREBASE
  // =====================================
  static final FirebaseDatabase
      _database =
          FirebaseDatabase.instance;

  // =====================================
  // FACE DETECTOR
  // =====================================
  static final FaceDetector
      _faceDetector =
          FaceDetector(

    options: FaceDetectorOptions(

      enableContours: true,

      enableClassification: true,

      enableLandmarks: true,

      performanceMode:
          FaceDetectorMode.accurate,
    ),
  );

  // =====================================
  // DETECT FACES
  // =====================================
  static Future<void>
      detectFaces({

    required String imagePath,

    required String deviceId,
  }) async {

    try {

      // ================================
      // CREATE INPUT IMAGE
      // ================================
      final inputImage =
          InputImage.fromFile(
        File(imagePath),
      );

      // ================================
      // PROCESS IMAGE
      // ================================
      final faces =
          await _faceDetector
              .processImage(
        inputImage,
      );

      print(
        "FACES DETECTED: ${faces.length}",
      );

      // ================================
      // NO FACE FOUND
      // ================================
      if (faces.isEmpty) {

        print(
          "NO FACE DETECTED",
        );

        return;
      }

      // ================================
      // ANALYZE EVERY FACE
      // ================================
      for (final face in faces) {

        print(
          "FACE TRACKING ACTIVE",
        );

        print(
          "HEAD ROTATION X: "
          "${face.headEulerAngleX}",
        );

        print(
          "HEAD ROTATION Y: "
          "${face.headEulerAngleY}",
        );

        print(
          "SMILING: "
          "${face.smilingProbability}",
        );

        print(
          "LEFT EYE OPEN: "
          "${face.leftEyeOpenProbability}",
        );

        print(
          "RIGHT EYE OPEN: "
          "${face.rightEyeOpenProbability}",
        );
      }

      // ================================
      // TRIGGER ALERT
      // ================================
      await triggerFaceAlert(

        deviceId: deviceId,

        facesCount:
            faces.length,
      );

    } catch (e) {

      print(
        "FACE AI ERROR: $e",
      );
    }
  }

  // =====================================
  // FACE ALERT
  // =====================================
  static Future<void>
      triggerFaceAlert({

    required String deviceId,

    required int facesCount,
  }) async {

    try {

      // ================================
      // SAVE FACE ALERT
      // ================================
      await _database.ref(

        "face_intrusion_alerts",
      ).push().set({

        "deviceId":
            deviceId,

        "facesDetected":
            facesCount,

        "severity":
            "CRITICAL",

        "message":
            "Unknown face detected",

        "aiStatus":
            "ACTIVE",

        "timestamp":
            DateTime.now()
                .millisecondsSinceEpoch,
      });

      // ================================
      // GENERAL SOS
      // ================================
      await _database.ref(
        "sos_alerts",
      ).push().set({

        "deviceId":
            deviceId,

        "type":
            "FACE_INTRUSION",

        "severity":
            "CRITICAL",

        "timestamp":
            DateTime.now()
                .millisecondsSinceEpoch,
      });

      // ================================
      // AI THREAT ANALYSIS
      // ================================
      await ThreatAIService
          .analyzeThreat(

        deviceId: deviceId,

        simSwap: false,

        faceIntrusion: true,

        voiceSOS: false,

        shutdownAttempt: false,

        remoteLock: false,
      );

      print(
        "FACE INTRUSION ALERT",
      );

    } catch (e) {

      print(
        "FACE ALERT ERROR: $e",
      );
    }
  }

  // =====================================
  // DISPOSE
  // =====================================
  static Future<void>
      dispose() async {

    await _faceDetector.close();

    print(
      "FACE AI DISPOSED",
    );
  }
}