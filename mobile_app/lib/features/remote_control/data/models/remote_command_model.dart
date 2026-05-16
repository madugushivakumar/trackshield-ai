class RemoteCommandModel {

  final String id;

  final String action;

  final String deviceId;

  final String issuedBy;

  final int timestamp;

  final bool executed;

  final String signature;

  RemoteCommandModel({

    required this.id,

    required this.action,

    required this.deviceId,

    required this.issuedBy,

    required this.timestamp,

    required this.executed,

    required this.signature,
  });

  Map<String, dynamic> toJson() {

    return {

      "id": id,

      "action": action,

      "deviceId": deviceId,

      "issuedBy": issuedBy,

      "timestamp": timestamp,

      "executed": executed,

      "signature": signature,
    };
  }

  factory RemoteCommandModel.fromJson(
    Map<dynamic, dynamic> json,
  ) {

    return RemoteCommandModel(

      id: json["id"] ?? "",

      action:
          json["action"] ?? "",

      deviceId:
          json["deviceId"] ?? "",

      issuedBy:
          json["issuedBy"] ?? "",

      timestamp:
          json["timestamp"] ?? 0,

      executed:
          json["executed"] ?? false,

      signature:
          json["signature"] ?? "",
    );
  }
}