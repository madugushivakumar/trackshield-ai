import 'package:firebase_messaging/firebase_messaging.dart';

class NotificationService {

  static final FirebaseMessaging
      messaging =
          FirebaseMessaging.instance;

  // =====================================
  // INITIALIZE NOTIFICATIONS
  // =====================================
  static Future<void>
      initialize() async {

    await messaging
        .requestPermission();

    final token =
        await messaging.getToken();

    print("FCM TOKEN: $token");

    FirebaseMessaging.onMessage.listen(

      (RemoteMessage message) {

        print(
          "NOTIFICATION RECEIVED",
        );

        print(message.notification?.title);

        print(message.notification?.body);
      },
    );
  }
}