import 'package:firebase_database/firebase_database.dart';

import '../models/face_profile_model.dart';

class FaceMemoryService {

  static final FirebaseDatabase
      _database =
          FirebaseDatabase.instance;

  // =====================================
  // REGISTER FACE
  // =====================================
  static Future<void>
      registerFace({

    required FaceProfileModel
        profile,
  }) async {

    await _database.ref(

      "authorized_faces/${profile.id}",
    ).set(
      profile.toJson(),
    );

    print(
      "FACE REGISTERED",
    );
  }

  // =====================================
  // LOAD FACES
  // =====================================
  static Future<List<FaceProfileModel>>
      loadFaces() async {

    try {

      final snapshot =
          await _database.ref(
        "authorized_faces",
      ).get();

      if (!snapshot.exists) {
        return [];
      }

      final data =
          Map<dynamic, dynamic>.from(
        snapshot.value as Map,
      );

      return data.entries.map((e) {

        return FaceProfileModel
            .fromJson(

          Map<dynamic, dynamic>.from(
            e.value,
          ),
        );

      }).toList();

    } catch (e) {

      print(
        "LOAD FACE ERROR: $e",
      );

      return [];
    }
  }
}