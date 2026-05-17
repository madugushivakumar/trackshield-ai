import 'package:firebase_database/firebase_database.dart';

import '../models/device_model.dart';

class EnterpriseService {

  static final FirebaseDatabase
      _database =
          FirebaseDatabase.instance;

  // =====================================
  // REGISTER DEVICE
  // =====================================
  static Future<void>
      registerDevice({

    required DeviceModel device,
  }) async {

    await _database.ref(

      "enterprise_devices/${device.organizationId}/${device.deviceId}",
    ).set(
      device.toJson(),
    );

    print(
      "DEVICE REGISTERED",
    );
  }

  // =====================================
  // UPDATE STATUS
  // =====================================
  static Future<void>
      updateDeviceStatus({

    required String organizationId,

    required String deviceId,

    required String status,
  }) async {

    await _database.ref(

      "enterprise_devices/$organizationId/$deviceId",
    ).update({

      "status":
          status,

      "lastSeen":
          DateTime.now()
              .millisecondsSinceEpoch,
    });

    print(
      "DEVICE STATUS UPDATED",
    );
  }

  // =====================================
  // UPDATE SECURITY LEVEL
  // =====================================
  static Future<void>
      updateSecurityLevel({

    required String organizationId,

    required String deviceId,

    required String securityLevel,
  }) async {

    await _database.ref(

      "enterprise_devices/$organizationId/$deviceId",
    ).update({

      "securityLevel":
          securityLevel,
    });

    print(
      "SECURITY LEVEL UPDATED",
    );
  }
}