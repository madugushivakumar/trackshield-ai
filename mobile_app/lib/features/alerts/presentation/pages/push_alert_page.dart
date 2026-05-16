import 'package:flutter/material.dart';

import '../../../../core/notifications/notification_service.dart';

class PushAlertPage
    extends StatelessWidget {

  const PushAlertPage({
    super.key,
  });

  Future<void> sendAlert() async {

    await NotificationService
        .showNotification(

      title: "🚨 SOS ALERT",

      body:
          "Emergency detected on TrackShield AI",
    );
  }

  @override
  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(

        title: const Text(
          "Push Notifications",
        ),
      ),

      body: Center(

        child: ElevatedButton.icon(

          onPressed: sendAlert,

          icon: const Icon(
            Icons.notifications_active,
          ),

          label: const Text(
            "SEND EMERGENCY ALERT",
          ),
        ),
      ),
    );
  }
}