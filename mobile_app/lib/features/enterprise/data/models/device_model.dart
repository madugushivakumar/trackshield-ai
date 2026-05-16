class DeviceModel {

  final String deviceId;

  final String organizationId;

  final String deviceName;

  final String status;

  final String securityLevel;

  final int lastSeen;

  DeviceModel({

    required this.deviceId,

    required this.organizationId,

    required this.deviceName,

    required this.status,

    required this.securityLevel,

    required this.lastSeen,
  });

  // =====================================
  // TO JSON
  // =====================================
  Map<String, dynamic> toJson() {

    return {

      "deviceId":
          deviceId,

      "organizationId":
          organizationId,

      "deviceName":
          deviceName,

      "status":
          status,

      "securityLevel":
          securityLevel,

      "lastSeen":
          lastSeen,
    };
  }

  // =====================================
  // FROM JSON
  // =====================================
  factory DeviceModel.fromJson(
    Map<dynamic, dynamic> json,
  ) {

    return DeviceModel(

      deviceId:
          json["deviceId"] ?? "",

      organizationId:
          json["organizationId"] ?? "",

      deviceName:
          json["deviceName"] ?? "",

      status:
          json["status"] ?? "",

      securityLevel:
          json["securityLevel"] ?? "",

      lastSeen:
          json["lastSeen"] ?? 0,
    );
  }
}