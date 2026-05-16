class FaceProfileModel {

  final String id;

  final String name;

  final String role;

  final String imageUrl;

  final List<double> embedding;

  final bool authorized;

  FaceProfileModel({

    required this.id,

    required this.name,

    required this.role,

    required this.imageUrl,

    required this.embedding,

    required this.authorized,
  });

  Map<String, dynamic> toJson() {

    return {

      "id": id,

      "name": name,

      "role": role,

      "imageUrl": imageUrl,

      "embedding": embedding,

      "authorized": authorized,
    };
  }

  factory FaceProfileModel.fromJson(
    Map<dynamic, dynamic> json,
  ) {

    return FaceProfileModel(

      id: json["id"] ?? "",

      name:
          json["name"] ?? "",

      role:
          json["role"] ?? "",

      imageUrl:
          json["imageUrl"] ?? "",

      embedding:
          List<double>.from(
        json["embedding"] ?? [],
      ),

      authorized:
          json["authorized"] ?? false,
    );
  }
}