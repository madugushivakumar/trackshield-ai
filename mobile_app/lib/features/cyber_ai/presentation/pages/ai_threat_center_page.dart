import 'package:firebase_database/firebase_database.dart';

import 'package:flutter/material.dart';

import '../../data/services/cyber_ai_service.dart';

class AIThreatCenterPage
    extends StatefulWidget {

  const AIThreatCenterPage({
    super.key,
  });

  @override
  State<AIThreatCenterPage>
      createState() =>
          _AIThreatCenterPageState();
}

class _AIThreatCenterPageState
    extends State<AIThreatCenterPage> {

  bool generating = false;

  // =====================================
  // GENERATE AI ANALYTICS
  // =====================================
  Future<void>
      generateThreat() async {

    setState(() {
      generating = true;
    });

    await CyberAIService
        .pushThreatAnalytics(

      deviceId: "TS-1001",
    );

    setState(() {
      generating = false;
    });
  }

  // =====================================
  // REMOTE WIPE
  // =====================================
  Future<void>
      remoteWipe() async {

    await CyberAIService
        .remoteWipe(

      deviceId: "TS-1001",
    );

    if (mounted) {

      ScaffoldMessenger.of(context)
          .showSnackBar(

        const SnackBar(

          backgroundColor:
              Colors.red,

          content: Text(
            "REMOTE WIPE TRIGGERED",
          ),
        ),
      );
    }
  }

  Color riskColor(
    String level,
  ) {

    switch (level) {

      case "CRITICAL":
        return Colors.red;

      case "HIGH":
        return Colors.orange;

      case "MEDIUM":
        return Colors.amber;

      default:
        return Colors.green;
    }
  }

  @override
  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(

        title: const Text(
          "AI Threat Center",
        ),
      ),

      body: Column(

        children: [

          // ===============================
          // ACTION BUTTONS
          // ===============================
          Padding(

            padding:
                const EdgeInsets.all(
              20,
            ),

            child: Column(

              children: [

                SizedBox(

                  width: double.infinity,
                  height: 60,

                  child:
                      ElevatedButton.icon(

                    onPressed:
                        generating
                            ? null
                            : generateThreat,

                    icon:
                        generating

                            ? const CircularProgressIndicator(
                                color:
                                    Colors.white,
                              )

                            : const Icon(
                                Icons.analytics,
                              ),

                    label: const Text(

                      "Generate AI Threat Scan",

                      style: TextStyle(
                        fontSize: 20,
                      ),
                    ),
                  ),
                ),

                const SizedBox(height: 20),

                SizedBox(

                  width: double.infinity,
                  height: 60,

                  child:
                      ElevatedButton.icon(

                    onPressed:
                        remoteWipe,

                    icon: const Icon(
                      Icons.delete_forever,
                    ),

                    style:
                        ElevatedButton
                            .styleFrom(

                      backgroundColor:
                          Colors.red,
                    ),

                    label: const Text(

                      "Remote Wipe Device",

                      style: TextStyle(
                        fontSize: 20,
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),

          const Divider(),

          // ===============================
          // ANALYTICS LIST
          // ===============================
          Expanded(

            child:
                StreamBuilder<DatabaseEvent>(

              stream:
                  CyberAIService
                      .getAnalytics(),

              builder:
                  (
                    context,
                    snapshot,
                  ) {

                if (!snapshot.hasData) {

                  return const Center(
                    child:
                        CircularProgressIndicator(),
                  );
                }

                final data =
                    snapshot
                        .data!
                        .snapshot
                        .value;

                if (data == null) {

                  return const Center(

                    child: Text(
                      "No AI Threat Analytics",
                    ),
                  );
                }

                final analytics =
                    Map<String, dynamic>.from(
                  data as Map,
                );

                return ListView(

                  children:
                      analytics.entries.map((entry) {

                    final item =
                        Map<String, dynamic>.from(
                      entry.value,
                    );

                    return Card(

                      margin:
                          const EdgeInsets
                              .all(12),

                      child: ListTile(

                        leading:
                            CircleAvatar(

                          backgroundColor:
                              riskColor(
                            item["riskLevel"],
                          ),

                          child: const Icon(

                            Icons.security,

                            color:
                                Colors.white,
                          ),
                        ),

                        title: Text(

                          "Threat Score: ${item["threatScore"]}",
                        ),

                        subtitle: Text(

                          "Risk: ${item["riskLevel"]}",
                        ),
                      ),
                    );
                  }).toList(),
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}