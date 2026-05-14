import 'package:hive_flutter/hive_flutter.dart';

class OfflineSyncService {

  static const String boxName =
      "offline_sos";

  // =====================================
  // INIT HIVE
  // =====================================
  static Future<void> init() async {

    await Hive.initFlutter();

    await Hive.openBox(boxName);
  }

  // =====================================
  // SAVE OFFLINE SOS
  // =====================================
  static Future<void>
      saveOfflineSOS({

    required double latitude,

    required double longitude,

  }) async {

    final box =
        Hive.box(boxName);

    await box.add({

      "latitude": latitude,

      "longitude": longitude,

      "timestamp":
          DateTime.now()
              .millisecondsSinceEpoch,
    });
  }

  // =====================================
  // GET OFFLINE ALERTS
  // =====================================
  static List getOfflineAlerts() {

    final box =
        Hive.box(boxName);

    return box.values.toList();
  }

  // =====================================
  // CLEAR ALERTS
  // =====================================
  static Future<void>
      clearAlerts() async {

    final box =
        Hive.box(boxName);

    await box.clear();
  }
}