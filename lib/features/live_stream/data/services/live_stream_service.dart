import 'dart:async';

import 'package:camera/camera.dart';

import 'package:web_socket_channel/web_socket_channel.dart';

class LiveStreamService {

  static CameraController?
      _controller;

  static List<CameraDescription>
      _cameras = [];

  static WebSocketChannel?
      _channel;

  static Timer?
      _streamTimer;

  // =====================================
  // INITIALIZE
  // =====================================
  static Future<void>
      initialize() async {

    try {

      _cameras =
          await availableCameras();

      if (_cameras.isEmpty) {

        print(
          "NO CAMERAS FOUND",
        );

        return;
      }

      _controller =
          CameraController(

        _cameras.first,

        ResolutionPreset.low,

        enableAudio: false,
      );

      await _controller!
          .initialize();

      print(
        "LIVE STREAM READY",
      );

    } catch (e) {

      print(
        "STREAM INIT ERROR: $e",
      );
    }
  }

  // =====================================
  // START STREAM
  // =====================================
  static Future<void>
      startStreaming({

    required String websocketUrl,
  }) async {

    try {

      _channel =
          WebSocketChannel.connect(
        Uri.parse(websocketUrl),
      );

      _streamTimer =
          Timer.periodic(

        const Duration(
          milliseconds: 1200,
        ),

        (_) async {

          if (_controller == null) {
            return;
          }

          final XFile image =
              await _controller!
                  .takePicture();

          final bytes =
              await image.readAsBytes();

          _channel?.sink.add(
            bytes,
          );

          print(
            "FRAME STREAMED",
          );
        },
      );

      print(
        "LIVE STREAM STARTED",
      );

    } catch (e) {

      print(
        "STREAM ERROR: $e",
      );
    }
  }

  // =====================================
  // STOP STREAM
  // =====================================
  static Future<void>
      stopStreaming() async {

    _streamTimer?.cancel();

    await _channel?.sink.close();

    print(
      "STREAM STOPPED",
    );
  }

  // =====================================
  // DISPOSE
  // =====================================
  static Future<void>
      dispose() async {

    await _controller?.dispose();

    await stopStreaming();
  }
}