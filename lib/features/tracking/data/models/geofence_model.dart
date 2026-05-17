class GeofenceModel {

  final String id;

  final String name;

  final double latitude;

  final double longitude;

  final double radius;

  final bool active;

  GeofenceModel({

    required this.id,

    required this.name,

    required this.latitude,

    required this.longitude,

    required this.radius,

    required this.active,
  });

  Map<String, dynamic> toJson() {

    return {

      "id": id,

      "name": name,

      "latitude": latitude,

      "longitude": longitude,

      "radius": radius,

      "active": active,
    };
  }

  factory GeofenceModel.fromJson(
    Map<dynamic, dynamic> json,
  ) {

    return GeofenceModel(

      id: json["id"] ?? "",

      name: json["name"] ?? "",

      latitude:
          (json["latitude"] ?? 0)
              .toDouble(),

      longitude:
          (json["longitude"] ?? 0)
              .toDouble(),

      radius:
          (json["radius"] ?? 100)
              .toDouble(),

      active:
          json["active"] ?? true,
    );
  }
}