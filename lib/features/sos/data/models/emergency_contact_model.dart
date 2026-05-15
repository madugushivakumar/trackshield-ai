class EmergencyContactModel {

  final String id;

  final String name;

  final String phone;

  final int priority;

  final bool active;

  EmergencyContactModel({

    required this.id,

    required this.name,

    required this.phone,

    required this.priority,

    required this.active,
  });

  Map<String, dynamic> toJson() {

    return {

      "id": id,

      "name": name,

      "phone": phone,

      "priority": priority,

      "active": active,
    };
  }

  factory EmergencyContactModel
      .fromJson(

    Map<dynamic, dynamic> json,
  ) {

    return EmergencyContactModel(

      id: json["id"] ?? "",

      name:
          json["name"] ?? "",

      phone:
          json["phone"] ?? "",

      priority:
          json["priority"] ?? 1,

      active:
          json["active"] ?? true,
    );
  }
}