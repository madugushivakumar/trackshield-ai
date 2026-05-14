import 'dart:io';

import 'package:flutter/foundation.dart';

import 'package:camera/camera.dart';

import 'package:firebase_database/firebase_database.dart';

import 'package:firebase_storage/firebase_storage.dart';

import '../../../face_ai/data/services/face_ai_service.dart';

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

  // =====================================
  // INITIALIZE CAMERA
  // =====================================
  static Future<void>
      initialize() async {

    try {

      // =================================
      // PREVENT MULTIPLE INITIALIZATION
      // =================================
      if (_isInitialized) {

        print(
          "Camera already initialized",
        );

        return;
      }

      // =================================
      // WEB INFO
      // =================================
      if (kIsWeb) {

        print(
          "Camera AI running in web-safe mode",
        );
      }

      // =================================
      // AVAILABLE CAMERAS
      // =================================
      _cameras =
          await availableCameras();

      if (_cameras.isEmpty) {

        print(
          "No cameras found",
        );

        return;
      }

      // =================================
      // CAMERA CONTROLLER
      // =================================
      _controller =
          CameraController(

        _cameras.first,

        ResolutionPreset.medium,

        enableAudio: false,
      );

      // =================================
      // INITIALIZE CAMERA
      // =================================
      await _controller!
          .initialize();

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
  // CAPTURE INTRUDER
  // =====================================
  static Future<void>
      captureIntruder({

    required String deviceId,
  }) async {

    try {

      // =================================
      // CHECK INITIALIZATION
      // =================================
      if (!_isInitialized ||
          _controller == null) {

        print(
          "Camera not initialized",
        );

        return;
      }

      // =================================
      // PREVENT MULTIPLE CAPTURES
      // =================================
      if (_isCapturing) {

        print(
          "Capture already in progress",
        );

        return;
      }

      _isCapturing = true;

      // =================================
      // CAMERA STATE CHECK
      // =================================
      if (!_controller!
          .value
          .isInitialized) {

        print(
          "Camera controller invalid",
        );

        _isCapturing = false;

        return;
      }

      // =================================
      // TAKE PICTURE
      // =================================
      final XFile image =
          await _controller!
              .takePicture();

      final File file =
          File(image.path);

      // =================================
      // FACE AI DETECTION
      // =================================
      await FaceAIService
          .detectFaces(

        imagePath: file.path,

        deviceId: deviceId,
      );

      // =================================
      // STORAGE PATH
      // =================================
      final storageRef =
          _storage.ref().child(

        "intruder_snapshots/"
        "${DateTime.now().millisecondsSinceEpoch}.jpg",
      );

      // =================================
      // UPLOAD IMAGE
      // =================================
      await storageRef.putFile(
        file,
      );

      final imageUrl =
          await storageRef
              .getDownloadURL();

      // =================================
      // SAVE ALERT
      // =================================
      await _database.ref(

        "intruder_alerts",
      ).push().set({

        "deviceId":
            deviceId,

        "imageUrl":
            imageUrl,

        "timestamp":
            DateTime.now()
                .millisecondsSinceEpoch,

        "severity":
            "CRITICAL",

        "message":
            "Possible intruder detected",
      });

      // =================================
      // SOS ALERT
      // =================================
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
        "INTRUDER SNAPSHOT SAVED",
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
  // GET CONTROLLER
  // =====================================
  static CameraController?
      get controller =>
          _controller;
}