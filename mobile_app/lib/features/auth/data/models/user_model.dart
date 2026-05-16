class UserModel {

  final String uid;

  final String email;

  final String role;

  final String tenantId;

  final bool emailVerified;

  UserModel({

    required this.uid,

    required this.email,

    required this.role,

    required this.tenantId,

    required this.emailVerified,
  });

  Map<String, dynamic> toJson() {

    return {

      "uid": uid,

      "email": email,

      "role": role,

      "tenantId": tenantId,

      "emailVerified":
          emailVerified,
    };
  }

  factory UserModel.fromJson(
    Map<dynamic, dynamic> json,
  ) {

    return UserModel(

      uid: json["uid"] ?? "",

      email:
          json["email"] ?? "",

      role:
          json["role"] ?? "USER",

      tenantId:
          json["tenantId"] ?? "",

      emailVerified:
          json["emailVerified"] ?? false,
    );
  }
}