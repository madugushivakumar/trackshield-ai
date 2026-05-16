class SecurityIncidentModel {

  final String id;

  final String deviceId;

  final String type;

  final String severity;

  final String description;

  final int timestamp;

  final bool resolved;

  SecurityIncidentModel({

    required this.id,

    required this.deviceId,

    required this.type,

    required this.severity,

    required this.description,

    required this.timestamp,

    required this.resolved,
  });

  Map<String, dynamic> toJson() {

    return {

      "id": id,

      "deviceId": deviceId,

      "type": type,

      "severity": severity,

      "description": description,

      "timestamp": timestamp,

      "resolved": resolved,
    };
  }

  factory SecurityIncidentModel
      .fromJson(

    Map<dynamic, dynamic> json,
  ) {

    return SecurityIncidentModel(

      id: json["id"] ?? "",

      deviceId:
          json["deviceId"] ?? "",

      type:
          json["type"] ?? "",

      severity:
          json["severity"] ?? "",

      description:
          json["description"] ?? "",

      timestamp:
          json["timestamp"] ?? 0,

      resolved:
          json["resolved"] ?? false,
    );
  }
}