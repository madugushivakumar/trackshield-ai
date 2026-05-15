import 'dart:ui';

import 'package:flutter/material.dart';

import '../logger/app_logger.dart';

class GlobalErrorHandler {

  // =====================================
  // INITIALIZE
  // =====================================
  static void initialize() {

    // =====================================
    // FLUTTER ERRORS
    // =====================================
    FlutterError.onError = (

      FlutterErrorDetails details,

    ) {

      AppLogger.logger.e(

        details.exceptionAsString(),
      );

      FlutterError.presentError(
        details,
      );
    };

    // =====================================
    // PLATFORM ERRORS
    // =====================================
    PlatformDispatcher.instance
        .onError = (

      Object error,

      StackTrace stack,
    ) {

      AppLogger.logger.e(
        error.toString(),
      );

      return true;
    };
  }
}