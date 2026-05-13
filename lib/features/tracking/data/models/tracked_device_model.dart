class TrackedDeviceModel {

  final String userId;

  final double latitude;

  final double longitude;

  final bool isOnline;

  final DateTime? updatedAt;

  TrackedDeviceModel({

    required this.userId,

    required this.latitude,

    required this.longitude,

    required this.isOnline,

    required this.updatedAt,
  });

  factory TrackedDeviceModel.fromMap(

    Map<String, dynamic> map,
    String id,

  ) {

    return TrackedDeviceModel(

      userId: id,

      latitude:
          (map["latitude"] ?? 0)
              .toDouble(),

      longitude:
          (map["longitude"] ?? 0)
              .toDouble(),

      isOnline:
          map["isOnline"] ?? false,

      updatedAt:
          map["updatedAt"] != null
              ? map["updatedAt"]
                  .toDate()
              : null,
    );
  }
}