import 'package:firebase_database/firebase_database.dart';

class AILearningService {

  static final FirebaseDatabase
      _database =
          FirebaseDatabase.instance;

  // =====================================
  // STORE THREAT PATTERN
  // =====================================
  static Future<void>
      storePattern({

    required String deviceId,

    required String threatType,

    required int score,
  }) async {

    await _database.ref(
      "ai_learning_patterns",
    ).push().set({

      "deviceId":
          deviceId,

      "threatType":
          threatType,

      "score":
          score,

      "timestamp":
          DateTime.now()
              .millisecondsSinceEpoch,
    });

    print(
      "AI PATTERN STORED",
    );
  }

  // =====================================
  // LOAD HISTORY
  // =====================================
  static Future<int>
      loadThreatCount({

    required String deviceId,
  }) async {

    final snapshot =
        await _database.ref(
      "ai_learning_patterns",
    ).get();

    if (!snapshot.exists) {
      return 0;
    }

    final data =
        Map<dynamic, dynamic>.from(
      snapshot.value as Map,
    );

    int count = 0;

    for (final entry
        in data.entries) {

      final item =
          Map<dynamic, dynamic>.from(
        entry.value,
      );

      if (item["deviceId"] ==
          deviceId) {

        count++;
      }
    }

    return count;
  }
}