import 'package:firebase_database/firebase_database.dart';

import '../models/tenant_model.dart';

class TenantService {

  static final FirebaseDatabase
      _database =
          FirebaseDatabase.instance;

  // =====================================
  // CREATE TENANT
  // =====================================
  static Future<void>
      createTenant({

    required TenantModel tenant,
  }) async {

    await _database.ref(

      "tenants/${tenant.tenantId}",
    ).set(
      tenant.toJson(),
    );

    print(
      "TENANT CREATED",
    );
  }

  // =====================================
  // REGISTER DEVICE
  // =====================================
  static Future<void>
      registerTenantDevice({

    required String tenantId,

    required String deviceId,

    required String deviceName,
  }) async {

    await _database.ref(

      "tenant_devices/$tenantId/$deviceId",
    ).set({

      "deviceId":
          deviceId,

      "deviceName":
          deviceName,

      "status":
          "ACTIVE",

      "timestamp":
          DateTime.now()
              .millisecondsSinceEpoch,
    });

    print(
      "TENANT DEVICE REGISTERED",
    );
  }

  // =====================================
  // UPDATE SUBSCRIPTION
  // =====================================
  static Future<void>
      updateSubscription({

    required String tenantId,

    required String subscription,
  }) async {

    await _database.ref(

      "tenants/$tenantId",
    ).update({

      "subscription":
          subscription,
    });

    print(
      "SUBSCRIPTION UPDATED",
    );
  }
}