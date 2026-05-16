import 'package:flutter/material.dart';

import '../../../alerts/presentation/pages/alerts_page.dart';

import '../../../profile/presentation/pages/profile_page.dart';

class SecurityCenterPage
    extends StatelessWidget {

  const SecurityCenterPage({
    super.key,
  });

  @override
  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(
        title: const Text(
          "Security Center",
        ),
      ),

      body: ListView(

        padding:
            const EdgeInsets.all(
          20,
        ),

        children: [

          // =================================
          // ALERTS
          // =================================
          buildTile(

            context,

            title:
                "Security Alerts",

            subtitle:
                "Realtime AI threat alerts",

            icon:
                Icons.warning,

            color:
                Colors.red,

            onTap: () {

              Navigator.push(

                context,

                MaterialPageRoute(

                  builder: (_) =>
                      const AlertsPage(),
                ),
              );
            },
          ),

          const SizedBox(
            height: 20,
          ),

          // =================================
          // PROFILE
          // =================================
          buildTile(

            context,

            title:
                "Profile",

            subtitle:
                "User security profile",

            icon:
                Icons.person,

            color:
                Colors.blue,

            onTap: () {

              Navigator.push(

                context,

                MaterialPageRoute(

                  builder: (_) =>
                      const ProfilePage(),
                ),
              );
            },
          ),
        ],
      ),
    );
  }

  Widget buildTile(

    BuildContext context, {

    required String title,

    required String subtitle,

    required IconData icon,

    required Color color,

    required VoidCallback onTap,
  }) {

    return InkWell(

      onTap: onTap,

      borderRadius:
          BorderRadius.circular(
        20,
      ),

      child: Container(

        padding:
            const EdgeInsets.all(
          20,
        ),

        decoration: BoxDecoration(

          color: Colors.white,

          borderRadius:
              BorderRadius.circular(
            20,
          ),

          boxShadow: [

            BoxShadow(

              color: Colors.black
                  .withOpacity(
                0.05,
              ),

              blurRadius: 8,
            ),
          ],
        ),

        child: Row(

          children: [

            Container(

              width: 60,
              height: 60,

              decoration:
                  BoxDecoration(

                color:
                    color.withOpacity(
                  0.12,
                ),

                borderRadius:
                    BorderRadius.circular(
                  18,
                ),
              ),

              child: Icon(

                icon,

                color: color,

                size: 32,
              ),
            ),

            const SizedBox(
              width: 20,
            ),

            Expanded(

              child: Column(

                crossAxisAlignment:
                    CrossAxisAlignment
                        .start,

                children: [

                  Text(

                    title,

                    style:
                        const TextStyle(

                      fontSize: 20,

                      fontWeight:
                          FontWeight.bold,
                    ),
                  ),

                  const SizedBox(
                    height: 8,
                  ),

                  Text(

                    subtitle,

                    style:
                        const TextStyle(

                      color:
                          Colors.grey,
                    ),
                  ),
                ],
              ),
            ),

            const Icon(
              Icons.arrow_forward_ios,
            ),
          ],
        ),
      ),
    );
  }
}