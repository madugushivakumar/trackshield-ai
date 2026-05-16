class OfflineEventModel {

  final String id;

  final String type;

  final Map<String, dynamic>
      payload;

  final int timestamp;

  final bool synced;

  OfflineEventModel({

    required this.id,

    required this.type,

    required this.payload,

    required this.timestamp,

    required this.synced,
  });

  Map<String, dynamic> toJson() {

    return {

      "id": id,

      "type": type,

      "payload": payload,

      "timestamp": timestamp,

      "synced": synced,
    };
  }

  factory OfflineEventModel.fromJson(
    Map<dynamic, dynamic> json,
  ) {

    return OfflineEventModel(

      id: json["id"] ?? "",

      type:
          json["type"] ?? "",

      payload:
          Map<String, dynamic>.from(
        json["payload"] ?? {},
      ),

      timestamp:
          json["timestamp"] ?? 0,

      synced:
          json["synced"] ?? false,
    );
  }
}