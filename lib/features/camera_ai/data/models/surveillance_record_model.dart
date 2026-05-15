class SurveillanceRecordModel {

  final String id;

  final String deviceId;

  final String videoUrl;

  final int duration;

  final String quality;

  final int timestamp;

  SurveillanceRecordModel({

    required this.id,

    required this.deviceId,

    required this.videoUrl,

    required this.duration,

    required this.quality,

    required this.timestamp,
  });

  Map<String, dynamic> toJson() {

    return {

      "id": id,

      "deviceId": deviceId,

      "videoUrl": videoUrl,

      "duration": duration,

      "quality": quality,

      "timestamp": timestamp,
    };
  }

  factory SurveillanceRecordModel
      .fromJson(

    Map<dynamic, dynamic> json,
  ) {

    return SurveillanceRecordModel(

      id: json["id"] ?? "",

      deviceId:
          json["deviceId"] ?? "",

      videoUrl:
          json["videoUrl"] ?? "",

      duration:
          json["duration"] ?? 0,

      quality:
          json["quality"] ?? "",

      timestamp:
          json["timestamp"] ?? 0,
    );
  }
}