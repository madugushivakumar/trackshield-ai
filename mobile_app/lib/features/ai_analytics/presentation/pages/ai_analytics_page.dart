import 'package:flutter/material.dart';

class AIAnalyticsPage
    extends StatefulWidget {

  const AIAnalyticsPage({
    super.key,
  });

  @override
  State<AIAnalyticsPage>
      createState() =>
          _AIAnalyticsPageState();
}

class _AIAnalyticsPageState
    extends State<AIAnalyticsPage> {

  final List<Map<String, dynamic>>
      analytics = [

    {
      "title":
          "Suspicious Login Attempts",

      "value": 4,
    },

    {
      "title":
          "Threat Detection Score",

      "value": "82%",
    },

    {
      "title":
          "Device Security Status",

      "value": "Protected",
    },

    {
      "title":
          "Intrusion Risk",

      "value": "LOW",
    },
  ];

  @override
  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(

        title: const Text(
          "AI Threat Analytics",
        ),
      ),

      body: ListView.builder(

        itemCount:
            analytics.length,

        itemBuilder:
            (context, index) {

          final item =
              analytics[index];

          return Card(

            margin:
                const EdgeInsets.all(
              12,
            ),

            child: ListTile(

              leading: const CircleAvatar(

                backgroundColor:
                    Colors.deepPurple,

                child: Icon(

                  Icons.analytics,

                  color:
                      Colors.white,
                ),
              ),

              title: Text(
                item["title"],
              ),

              trailing: Text(

                item["value"]
                    .toString(),

                style: const TextStyle(

                  fontWeight:
                      FontWeight.bold,

                  fontSize: 18,
                ),
              ),
            ),
          );
        },
      ),
    );
  }
}