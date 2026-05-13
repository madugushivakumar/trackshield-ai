import 'package:flutter/material.dart';

import '../../../../core/services/storage_service.dart';

import '../../../auth/presentation/pages/login_page.dart';

import '../../../geofence/presentation/pages/geofence_page.dart';

import '../../../tracking/presentation/pages/tracking_page.dart';

import '../../../tracking/presentation/pages/device_finder_page.dart';

import 'alerts_page.dart';
import 'devices_page.dart';
import 'profile_page.dart';

class DashboardPage extends StatelessWidget {
  const DashboardPage({super.key});

  // =========================================
  // LOGOUT
  // =========================================
  Future<void> logout(
    BuildContext context,
  ) async {
    await StorageService.clearToken();

    if (context.mounted) {
      Navigator.pushAndRemoveUntil(
        context,
        MaterialPageRoute(
          builder: (_) => const LoginPage(),
        ),
        (route) => false,
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      // =========================================
      // APPBAR
      // =========================================
      appBar: AppBar(
        title: const Text(
          "TrackShield AI",
        ),

        centerTitle: true,

        actions: [
          IconButton(
            onPressed: () => logout(context),

            icon: const Icon(
              Icons.logout,
            ),
          ),
        ],
      ),

      // =========================================
      // DRAWER
      // =========================================
      drawer: Drawer(
        child: Column(
          children: [
            Container(
              width: double.infinity,

              padding: const EdgeInsets.only(
                top: 60,
                left: 20,
                bottom: 20,
              ),

              decoration: const BoxDecoration(
                color: Colors.blue,
              ),

              child: const Column(
                crossAxisAlignment:
                    CrossAxisAlignment.start,

                children: [
                  Icon(
                    Icons.shield,
                    size: 60,
                    color: Colors.white,
                  ),

                  SizedBox(height: 10),

                  Text(
                    "TrackShield AI",

                    style: TextStyle(
                      color: Colors.white,
                      fontSize: 26,
                      fontWeight:
                          FontWeight.bold,
                    ),
                  ),

                  SizedBox(height: 5),

                  Text(
                    "Smart Security Platform",

                    style: TextStyle(
                      color: Colors.white70,
                    ),
                  ),
                ],
              ),
            ),

            Expanded(
              child: ListView(
                children: [
                  drawerItem(
                    context,
                    icon: Icons.dashboard,
                    title: "Dashboard",
                    onTap: () {
                      Navigator.pop(context);
                    },
                  ),

                  drawerItem(
                    context,
                    icon: Icons.location_on,
                    title: "Live Tracking",
                    onTap: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (_) =>
                              TrackingPage(),
                        ),
                      );
                    },
                  ),

                  drawerItem(
                    context,
                    icon: Icons.gps_fixed,
                    title: "Geofence",
                    onTap: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (_) =>
                              const GeofencePage(),
                        ),
                      );
                    },
                  ),

                  drawerItem(
                    context,
                    icon: Icons.radar,
                    title: "Device Finder",
                    onTap: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (_) =>
                              const DeviceFinderPage(),
                        ),
                      );
                    },
                  ),

                  drawerItem(
                    context,
                    icon: Icons.phone_android,
                    title: "My Devices",
                    onTap: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (_) =>
                              const DevicesPage(),
                        ),
                      );
                    },
                  ),

                  drawerItem(
                    context,
                    icon: Icons.warning,
                    title: "Alerts",
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

                  drawerItem(
                    context,
                    icon: Icons.person,
                    title: "Profile",
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
            ),
          ],
        ),
      ),

      // =========================================
      // BODY
      // =========================================
      body: Padding(
        padding: const EdgeInsets.all(16),

        child: GridView.count(
          crossAxisCount: 2,

          crossAxisSpacing: 15,
          mainAxisSpacing: 15,

          children: [
            dashboardCard(
              context,

              title: "Live Tracking",

              icon:
                  Icons.location_searching,

              color: Colors.blue,

              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (_) =>
                        TrackingPage(),
                  ),
                );
              },
            ),

            dashboardCard(
              context,

              title: "Geofence",

              icon: Icons.gps_fixed,

              color: Colors.indigo,

              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (_) =>
                        const GeofencePage(),
                  ),
                );
              },
            ),

            dashboardCard(
              context,

              title: "Device Finder",

              icon: Icons.radar,

              color: Colors.deepPurple,

              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (_) =>
                        const DeviceFinderPage(),
                  ),
                );
              },
            ),

            dashboardCard(
              context,

              title: "Emergency",

              icon: Icons.sos,

              color: Colors.red,

              onTap: () {
                ScaffoldMessenger.of(context)
                    .showSnackBar(
                  const SnackBar(
                    content: Text(
                      "SOS Feature Coming Soon",
                    ),
                  ),
                );
              },
            ),

            dashboardCard(
              context,

              title: "Intruder Alert",

              icon: Icons.warning,

              color: Colors.orange,

              onTap: () {
                ScaffoldMessenger.of(context)
                    .showSnackBar(
                  const SnackBar(
                    content: Text(
                      "Intruder Detection Enabled",
                    ),
                  ),
                );
              },
            ),

            dashboardCard(
              context,

              title: "Connected Devices",

              icon: Icons.devices,

              color: Colors.green,

              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (_) =>
                        const DevicesPage(),
                  ),
                );
              },
            ),

            dashboardCard(
              context,

              title: "AI Protection",

              icon: Icons.shield,

              color: Colors.purple,

              onTap: () {
                ScaffoldMessenger.of(context)
                    .showSnackBar(
                  const SnackBar(
                    content: Text(
                      "AI Protection Active",
                    ),
                  ),
                );
              },
            ),

            dashboardCard(
              context,

              title: "Settings",

              icon: Icons.settings,

              color: Colors.teal,

              onTap: () {
                ScaffoldMessenger.of(context)
                    .showSnackBar(
                  const SnackBar(
                    content: Text(
                      "Settings Coming Soon",
                    ),
                  ),
                );
              },
            ),
          ],
        ),
      ),
    );
  }

  // =========================================
  // DRAWER ITEM
  // =========================================
  Widget drawerItem(
    BuildContext context, {

    required IconData icon,

    required String title,

    required VoidCallback onTap,
  }) {
    return ListTile(
      leading: Icon(icon),

      title: Text(title),

      onTap: onTap,
    );
  }

  // =========================================
  // DASHBOARD CARD
  // =========================================
  Widget dashboardCard(
    BuildContext context, {

    required String title,

    required IconData icon,

    required Color color,

    required VoidCallback onTap,
  }) {
    return InkWell(
      onTap: onTap,

      borderRadius:
          BorderRadius.circular(25),

      child: Container(
        decoration: BoxDecoration(
          color: color.withOpacity(0.1),

          borderRadius:
              BorderRadius.circular(25),

          border: Border.all(
            color: color,
            width: 2,
          ),

          boxShadow: [
            BoxShadow(
              color:
                  color.withOpacity(0.15),

              blurRadius: 10,

              offset: const Offset(0, 5),
            ),
          ],
        ),

        child: Column(
          mainAxisAlignment:
              MainAxisAlignment.center,

          children: [
            Icon(
              icon,
              size: 55,
              color: color,
            ),

            const SizedBox(height: 15),

            Text(
              title,

              textAlign: TextAlign.center,

              style: TextStyle(
                fontSize: 18,

                fontWeight:
                    FontWeight.bold,

                color: color,
              ),
            ),
          ],
        ),
      ),
    );
  }
}