class NotificationService {

  static Future<void>
      initialize() async {

    print(
      "Notification Service Initialized",
    );
  }

  static Future<void>
      showNotification({

    required String title,

    required String body,

  }) async {

    print(title);

    print(body);
  }
}