class ThreatMemoryModel {

  final String id;

  final String deviceId;

  final String threatType;

  final int severity;

  final double confidence;

  final int timestamp;

  ThreatMemoryModel({

    required this.id,

    required this.deviceId,

    required this.threatType,

    required this.severity,

    required this.confidence,

    required this.timestamp,
  });

  Map<String, dynamic> toJson() {

    return {

      "id": id,

      "deviceId": deviceId,

      "threatType": threatType,

      "severity": severity,

      "confidence": confidence,

      "timestamp": timestamp,
    };
  }

  factory ThreatMemoryModel.fromJson(
    Map<dynamic, dynamic> json,
  ) {

    return ThreatMemoryModel(

      id: json["id"] ?? "",

      deviceId:
          json["deviceId"] ?? "",

      threatType:
          json["threatType"] ?? "",

      severity:
          json["severity"] ?? 0,

      confidence:
          (json["confidence"] ?? 0)
              .toDouble(),

      timestamp:
          json["timestamp"] ?? 0,
    );
  }
}