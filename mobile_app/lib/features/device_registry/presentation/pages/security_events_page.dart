import 'package:firebase_database/firebase_database.dart';

import 'package:flutter/material.dart';

import '../../data/services/security_event_service.dart';

class SecurityEventsPage
    extends StatefulWidget {

  const SecurityEventsPage({
    super.key,
  });

  @override
  State<SecurityEventsPage>
      createState() =>
          _SecurityEventsPageState();
}

class _SecurityEventsPageState
    extends State<SecurityEventsPage> {

  @override
  void initState() {

    super.initState();

    SecurityEventService
        .pushEvent(

      type: "LOGIN",

      deviceId: "TS-1001",

      description:
          "User authenticated successfully",
    );
  }

  @override
  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(

        title: const Text(
          "Security Events",
        ),
      ),

      body:
          StreamBuilder<DatabaseEvent>(

        stream:
            SecurityEventService
                .getEvents(),

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
              snapshot.data!
                  .snapshot.value;

          if (data == null) {

            return const Center(

              child: Text(
                "No Security Events",
              ),
            );
          }

          final events =
              Map<String, dynamic>.from(
            data as Map,
          );

          return ListView(

            children:
                events.entries.map((entry) {

              final item =
                  Map<String, dynamic>.from(
                entry.value,
              );

              return Card(

                margin:
                    const EdgeInsets.all(
                  12,
                ),

                child: ListTile(

                  leading:
                      const CircleAvatar(

                    backgroundColor:
                        Colors.deepPurple,

                    child: Icon(

                      Icons.security,

                      color:
                          Colors.white,
                    ),
                  ),

                  title: Text(
                    item["type"],
                  ),

                  subtitle: Text(
                    item["description"],
                  ),

                  trailing: Text(
                    item["deviceId"],
                  ),
                ),
              );
            }).toList(),
          );
        },
      ),
    );
  }
}