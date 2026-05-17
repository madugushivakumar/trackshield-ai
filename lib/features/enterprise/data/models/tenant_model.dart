class TenantModel {

  final String tenantId;

  final String companyName;

  final String adminEmail;

  final String subscription;

  final int createdAt;

  TenantModel({

    required this.tenantId,

    required this.companyName,

    required this.adminEmail,

    required this.subscription,

    required this.createdAt,
  });

  // =====================================
  // TO JSON
  // =====================================
  Map<String, dynamic> toJson() {

    return {

      "tenantId":
          tenantId,

      "companyName":
          companyName,

      "adminEmail":
          adminEmail,

      "subscription":
          subscription,

      "createdAt":
          createdAt,
    };
  }

  // =====================================
  // FROM JSON
  // =====================================
  factory TenantModel.fromJson(
    Map<dynamic, dynamic> json,
  ) {

    return TenantModel(

      tenantId:
          json["tenantId"] ?? "",

      companyName:
          json["companyName"] ?? "",

      adminEmail:
          json["adminEmail"] ?? "",

      subscription:
          json["subscription"] ?? "",

      createdAt:
          json["createdAt"] ?? 0,
    );
  }
}