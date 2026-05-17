import 'dart:io';

import 'package:camera/camera.dart';

class VideoRecordingService {

  static CameraController?
      _controller;

  // =====================================
  // SET CONTROLLER
  // =====================================
  static void setController(
    CameraController controller,
  ) {

    _controller = controller;
  }

  // =====================================
  // START RECORDING
  // =====================================
  static Future<void>
      startRecording() async {

    try {

      if (_controller == null) {
        return;
      }

      if (_controller!
          .value
          .isRecordingVideo) {

        return;
      }

      await _controller!
          .startVideoRecording();

      print(
        "VIDEO RECORDING STARTED",
      );

    } catch (e) {

      print(
        "START RECORD ERROR: $e",
      );
    }
  }

  // =====================================
  // STOP RECORDING
  // =====================================
  static Future<File?>
      stopRecording() async {

    try {

      if (_controller == null) {
        return null;
      }

      if (!_controller!
          .value
          .isRecordingVideo) {

        return null;
      }

      final file =
          await _controller!
              .stopVideoRecording();

      print(
        "VIDEO RECORDING STOPPED",
      );

      return File(file.path);

    } catch (e) {

      print(
        "STOP RECORD ERROR: $e",
      );

      return null;
    }
  }
}