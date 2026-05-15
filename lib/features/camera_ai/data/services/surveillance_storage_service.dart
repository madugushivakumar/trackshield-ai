import 'dart:io';

import 'package:firebase_storage/firebase_storage.dart';

import 'package:firebase_database/firebase_database.dart';

class SurveillanceStorageService {

  static final FirebaseStorage
      _storage =
          FirebaseStorage.instance;

  static final FirebaseDatabase
      _database =
          FirebaseDatabase.instance;

  // =====================================
  // UPLOAD RECORDING
  // =====================================
  static Future<void>
      uploadRecording({

    required String deviceId,

    required File file,
  }) async {

    try {

      final path =

          "surveillance_videos/"
          "${DateTime.now().millisecondsSinceEpoch}.mp4";

      final ref =
          _storage.ref().child(
        path,
      );

      await ref.putFile(file);

      final url =
          await ref.getDownloadURL();

      await _database.ref(
        "surveillance_records",
      ).push().set({

        "deviceId":
            deviceId,

        "videoUrl":
            url,

        "timestamp":
            DateTime.now()
                .millisecondsSinceEpoch,

        "quality":
            "HD",
      });

      print(
        "SURVEILLANCE VIDEO SAVED",
      );

    } catch (e) {

      print(
        "UPLOAD ERROR: $e",
      );
    }
  }
}