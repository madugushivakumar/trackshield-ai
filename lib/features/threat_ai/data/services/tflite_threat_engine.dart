import 'package:tflite_flutter/tflite_flutter.dart';

class TFLiteThreatEngine {

  static Interpreter?
      _interpreter;

  // =====================================
  // LOAD MODEL
  // =====================================
  static Future<void>
      initialize() async {

    try {

      _interpreter =
          await Interpreter.fromAsset(

        "models/threat_model.tflite",
      );

      print(
        "TFLITE MODEL LOADED",
      );

    } catch (e) {

      print(
        "TFLITE ERROR: $e",
      );
    }
  }

  // =====================================
  // PREDICT
  // =====================================
  static double predictThreat({

    required List<double> input,
  }) {

    if (_interpreter == null) {
      return 0;
    }

    final output =
        List.generate(
      1,
      (_) => List.filled(1, 0.0),
    );

    _interpreter!.run(
      [input],
      output,
    );

    return output[0][0];
  }
}