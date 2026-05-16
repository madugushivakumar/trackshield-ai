import '../models/face_profile_model.dart';

class FaceRecognitionService {

  // =====================================
  // MATCH FACE
  // =====================================
  static FaceProfileModel?
      matchFace({

    required List<double>
        embedding,

    required List<FaceProfileModel>
        profiles,
  }) {

    double bestScore = 0;

    FaceProfileModel?
        bestMatch;

    for (final profile
        in profiles) {

      final similarity =
          compareEmbeddings(

        embedding,

        profile.embedding,
      );

      if (similarity >
          bestScore) {

        bestScore =
            similarity;

        bestMatch =
            profile;
      }
    }

    // 80% confidence
    if (bestScore >= 0.80) {

      return bestMatch;
    }

    return null;
  }

  // =====================================
  // COMPARE EMBEDDINGS
  // =====================================
  static double compareEmbeddings(

    List<double> a,

    List<double> b,
  ) {

    if (a.length != b.length) {
      return 0;
    }

    double similarity = 0;

    for (int i = 0;
        i < a.length;
        i++) {

      similarity +=
          1 -
          (a[i] - b[i]).abs();
    }

    return similarity / a.length;
  }
}