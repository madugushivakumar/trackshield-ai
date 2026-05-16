import 'package:firebase_database/firebase_database.dart';

import 'package:flutter/material.dart';

import '../../data/services/ai_threat_service.dart';

class AIThreatPage
    extends StatefulWidget {

  const AIThreatPage({
    super.key,
  });

  @override
  State<AIThreatPage>
      createState() =>
          _AIThreatPageState();
}

class _AIThreatPageState
    extends State<AIThreatPage> {

  bool loading = false;

  Future<void> runAnalysis() async {

    setState(() {
      loading = true;
    });

    await AIThreatService
        .generateThreatAnalysis(
      deviceId: "TS-1001",
    );

    setState(() {
      loading = false;
    });
  }

  Color getRiskColor(
    String level,
  ) {

    switch (level) {

      case "HIGH":
        return Colors.red;

      case "MEDIUM":
        return Colors.orange;

      default:
        return Colors.green;
    }
  }

  @override
  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(

        title: const Text(
          "AI Threat Analysis",
        ),
      ),

      body: Padding(

        padding:
            const EdgeInsets.all(20),

        child: Column(

          children: [

            SizedBox(

              width: double.infinity,

              height: 65,

              child: ElevatedButton.icon(

                onPressed:
                    loading
                        ? null
                        : runAnalysis,

                icon: const Icon(
                  Icons.analytics,
                ),

                label:

                    loading

                        ? const CircularProgressIndicator()

                        : const Text(

                            "RUN AI ANALYSIS",

                            style: TextStyle(
                              fontSize: 18,
                            ),
                          ),

                style:
                    ElevatedButton.styleFrom(

                  backgroundColor:
                      Colors.deepPurple,
                ),
              ),
            ),

            const SizedBox(height: 30),

            Expanded(

              child:
                  StreamBuilder<DatabaseEvent>(

                stream:
                    AIThreatService
                        .threatStream(
                  "TS-1001",
                ),

                builder:
                    (
                      context,
                      snapshot,
                    ) {

                  if (!snapshot.hasData) {

                    return const Center(

                      child:
                          Text(
                        "No AI analysis yet",
                      ),
                    );
                  }

                  final data =
                      snapshot
                          .data!
                          .snapshot
                          .value;

                  if (data == null) {

                    return const Center(

                      child:
                          Text(
                        "No AI data found",
                      ),
                    );
                  }

                  final threat =
                      Map<String, dynamic>
                          .from(
                    data as Map,
                  );

                  final riskLevel =
                      threat["riskLevel"];

                  final threatScore =
                      threat["threatScore"];

                  final prediction =
                      threat["prediction"];

                  return Container(

                    width: double.infinity,

                    padding:
                        const EdgeInsets.all(
                      25,
                    ),

                    decoration: BoxDecoration(

                      color:
                          getRiskColor(
                        riskLevel,
                      ).withOpacity(0.1),

                      borderRadius:
                          BorderRadius.circular(
                        25,
                      ),

                      border: Border.all(

                        color:
                            getRiskColor(
                          riskLevel,
                        ),

                        width: 2,
                      ),
                    ),

                    child: Column(

                      mainAxisAlignment:
                          MainAxisAlignment
                              .center,

                      children: [

                        Icon(

                          Icons.shield,

                          size: 100,

                          color:
                              getRiskColor(
                            riskLevel,
                          ),
                        ),

                        const SizedBox(
                          height: 25,
                        ),

                        Text(

                          "Threat Score: $threatScore",

                          style: TextStyle(

                            fontSize: 32,

                            fontWeight:
                                FontWeight
                                    .bold,

                            color:
                                getRiskColor(
                              riskLevel,
                            ),
                          ),
                        ),

                        const SizedBox(
                          height: 15,
                        ),

                        Text(

                          "Risk Level: $riskLevel",

                          style: TextStyle(

                            fontSize: 26,

                            fontWeight:
                                FontWeight
                                    .bold,

                            color:
                                getRiskColor(
                              riskLevel,
                            ),
                          ),
                        ),

                        const SizedBox(
                          height: 25,
                        ),

                        Text(

                          prediction,

                          textAlign:
                              TextAlign.center,

                          style:
                              const TextStyle(
                            fontSize: 20,
                          ),
                        ),
                      ],
                    ),
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}