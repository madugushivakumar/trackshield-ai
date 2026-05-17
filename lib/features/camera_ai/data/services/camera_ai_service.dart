import 'dart:io';

import 'package:flutter/foundation.dart';

import 'package:camera/camera.dart';

import 'package:firebase_database/firebase_database.dart';

import 'package:firebase_storage/firebase_storage.dart';

import '../../../face_ai/data/services/face_ai_service.dart';

import 'video_recording_service.dart';

import 'surveillance_storage_service.dart';

import 'camera_health_service.dart';

class CameraAIService {

  static final FirebaseDatabase
      _database =
          FirebaseDatabase.instance;

  static final FirebaseStorage
      _storage =
          FirebaseStorage.instance;

  static CameraController?
      _controller;

  static List<CameraDescription>
      _cameras = [];

  static bool
      _isInitialized = false;

  static bool
      _isCapturing = false;

  static bool
      _isRecording = false;

  // =====================================
  // INITIALIZE CAMERA
  // =====================================
  static Future<void>
      initialize() async {

    try {

      // ===============================
      // PREVENT DUPLICATE INIT
      // ===============================
      if (_isInitialized) {

        print(
          "Camera already initialized",
        );

        return;
      }

      // ===============================
      // WEB MODE
      // ===============================
      if (kIsWeb) {

        print(
          "Camera AI running in web-safe mode",
        );
      }

      // ===============================
      // LOAD CAMERAS
      // ===============================
      _cameras =
          await availableCameras();

      if (_cameras.isEmpty) {

        print(
          "No cameras available",
        );

        return;
      }

      // ===============================
      // CAMERA CONTROLLER
      // ===============================
      _controller =
          CameraController(

        _cameras.first,

        ResolutionPreset.high,

        enableAudio: true,
      );

      // ===============================
      // INITIALIZE CONTROLLER
      // ===============================
      await _controller!
          .initialize();

      // ===============================
      // RECORDING ENGINE
      // ===============================
      VideoRecordingService
          .setController(
        _controller!,
      );

      _isInitialized = true;

      print(
        "CAMERA AI READY",
      );

    } catch (e) {

      print(
        "CAMERA INIT ERROR: $e",
      );
    }
  }

  // =====================================
  // START SURVEILLANCE
  // =====================================
  static Future<void>
      startSurveillance() async {

    try {

      if (!_isInitialized ||
          _controller == null) {

        print(
          "Camera not initialized",
        );

        return;
      }

      if (_isRecording) {

        print(
          "Recording already active",
        );

        return;
      }

      await VideoRecordingService
          .startRecording();

      _isRecording = true;

      print(
        "SURVEILLANCE STARTED",
      );

    } catch (e) {

      print(
        "START SURVEILLANCE ERROR: $e",
      );
    }
  }

  // =====================================
  // STOP SURVEILLANCE
  // =====================================
  static Future<void>
      stopSurveillance({

    required String deviceId,
  }) async {

    try {

      if (!_isRecording) {
        return;
      }

      final file =
          await VideoRecordingService
              .stopRecording();

      _isRecording = false;

      if (file != null) {

        await SurveillanceStorageService
            .uploadRecording(

          deviceId: deviceId,

          file: file,
        );
      }

      print(
        "SURVEILLANCE STOPPED",
      );

    } catch (e) {

      print(
        "STOP SURVEILLANCE ERROR: $e",
      );
    }
  }

  // =====================================
  // CAPTURE INTRUDER
  // =====================================
  static Future<void>
      captureIntruder({

    required String deviceId,
  }) async {

    try {

      // ===============================
      // INITIALIZATION CHECK
      // ===============================
      if (!_isInitialized ||
          _controller == null) {

        print(
          "Camera not initialized",
        );

        return;
      }

      // ===============================
      // LOCK CAPTURE
      // ===============================
      if (_isCapturing) {

        print(
          "Capture already running",
        );

        return;
      }

      _isCapturing = true;

      // ===============================
      // CONTROLLER VALIDATION
      // ===============================
      if (!_controller!
          .value
          .isInitialized) {

        _isCapturing = false;

        print(
          "Invalid controller state",
        );

        return;
      }

      // ===============================
      // TAKE PICTURE
      // ===============================
      final XFile image =
          await _controller!
              .takePicture();

      final File file =
          File(image.path);

      // ===============================
      // FACE DETECTION
      // ===============================
      await FaceAIService
          .detectFaces(

        imagePath: file.path,

        deviceId: deviceId,
      );

      // ===============================
      // STORAGE
      // ===============================
      final storageRef =
          _storage.ref().child(

        "intruder_snapshots/"
        "${DateTime.now().millisecondsSinceEpoch}.jpg",
      );

      // ===============================
      // UPLOAD
      // ===============================
      await storageRef.putFile(
        file,
      );

      final imageUrl =
          await storageRef
              .getDownloadURL();

      // ===============================
      // SAVE ALERT
      // ===============================
      await _database.ref(

        "intruder_alerts",
      ).push().set({

        "deviceId":
            deviceId,

        "imageUrl":
            imageUrl,

        "severity":
            "CRITICAL",

        "message":
            "Possible intruder detected",

        "timestamp":
            DateTime.now()
                .millisecondsSinceEpoch,
      });

      // ===============================
      // SOS ESCALATION
      // ===============================
      await _database.ref(
        "sos_alerts",
      ).push().set({

        "deviceId":
            deviceId,

        "type":
            "INTRUDER_DETECTED",

        "timestamp":
            DateTime.now()
                .millisecondsSinceEpoch,
      });

      print(
        "INTRUDER CAPTURE COMPLETE",
      );

      _isCapturing = false;

    } catch (e) {

      _isCapturing = false;

      print(
        "CAPTURE ERROR: $e",
      );
    }
  }

  // =====================================
  // CAMERA HEALTH
  // =====================================
  static String healthStatus() {

    return CameraHealthService
        .getStatus(

      initialized:
          _isInitialized,

      recording:
          _isRecording,
    );
  }

  // =====================================
  // DISPOSE CAMERA
  // =====================================
  static Future<void>
      dispose() async {

    try {

      if (_controller != null) {

        await _controller!
            .dispose();

        _controller = null;

        _isInitialized = false;

        _isRecording = false;

        print(
          "CAMERA DISPOSED",
        );
      }

    } catch (e) {

      print(
        "DISPOSE ERROR: $e",
      );
    }
  }

  // =====================================
  // GETTERS
  // =====================================
  static CameraController?
      get controller =>
          _controller;

  static bool
      get isInitialized =>
          _isInitialized;

  static bool
      get isRecording =>
          _isRecording;
}