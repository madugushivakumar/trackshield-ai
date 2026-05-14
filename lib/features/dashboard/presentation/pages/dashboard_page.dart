import 'package:flutter/material.dart';

import '../../../../core/services/storage_service.dart';

import '../../../auth/presentation/pages/login_page.dart';

import '../../../geofence/presentation/pages/geofence_page.dart';

import '../../../tracking/presentation/pages/tracking_page.dart';

import '../../../tracking/presentation/pages/device_finder_page.dart';

import '../../../tracking/presentation/pages/remote_tracking_page.dart';

import '../../../devices/presentation/pages/devices_page.dart';

import '../../../sos/presentation/pages/sos_page.dart';

import '../../../sos/presentation/pages/emergency_dashboard_page.dart';

import '../../../security/presentation/pages/security_page.dart';

import '../../../security/presentation/pages/intruder_detection_page.dart';

import '../../../security/presentation/pages/remote_security_page.dart';

import '../../../security/presentation/pages/threat_detection_page.dart';


import '../../../admin/presentation/pages/admin_dashboard_page.dart';

import '../../../security/presentation/pages/ai_threat_page.dart';

import '../../../alerts/presentation/pages/push_alert_page.dart';

import '../../../theft/presentation/pages/theft_mode_page.dart';

import '../../../security/presentation/pages/security_page.dart';

import '../../../security/presentation/pages/threat_dashboard_page.dart';

import '../../../ai_security/presentation/pages/voice_sos_page.dart';

import '../../../ai_security/presentation/pages/remote_lock_page.dart';
import '../../../ai_monitoring/presentation/pages/camera_motion_page.dart';

import '../../../ai_monitoring/presentation/pages/fake_shutdown_page.dart';
import 'alerts_page.dart';
import '../../../ai_analytics/presentation/pages/face_detection_page.dart';

import '../../../ai_analytics/presentation/pages/ai_analytics_page.dart';
import '../../../admin/presentation/pages/admin_dashboard_page.dart';
import 'profile_page.dart';
import '../../../cyber_ai/presentation/pages/ai_threat_center_page.dart';
import '../../../network/presentation/pages/network_dashboard_page.dart';
import '../../../device_registry/presentation/pages/device_registry_page.dart';

import '../../../device_registry/presentation/pages/security_events_page.dart';

class DashboardPage extends StatelessWidget {

  const DashboardPage({
    super.key,
  });

  // =========================================
  // LOGOUT
  // =========================================
  Future<void> logout(
    BuildContext context,
  ) async {

    await StorageService
        .clearToken();

    if (context.mounted) {

      Navigator.pushAndRemoveUntil(

        context,

        MaterialPageRoute(

          builder: (_) =>
              const LoginPage(),
        ),

        (route) => false,
      );
    }
  }

  @override
  Widget build(BuildContext context) {

    return Scaffold(

      // =====================================
      // APP BAR
      // =====================================
      appBar: AppBar(

        title: const Text(
          "TrackShield AI",
        ),

        centerTitle: true,

        actions: [

          IconButton(

            onPressed: () =>
                logout(context),

            icon: const Icon(
              Icons.logout,
            ),
          ),
        ],
      ),

      // =====================================
      // DRAWER
      // =====================================
      drawer: Drawer(

        child: Column(

          children: [

            // =================================
            // HEADER
            // =================================
            Container(

              width: double.infinity,

              padding:
                  const EdgeInsets.only(

                top: 60,
                left: 20,
                bottom: 20,
              ),

              decoration:
                  const BoxDecoration(
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

                    "Enterprise Security Platform",

                    style: TextStyle(
                      color: Colors.white70,
                    ),
                  ),
                ],
              ),
            ),

            // =================================
            // MENU ITEMS
            // =================================
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

                    icon:
                        Icons.location_searching,

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

                    icon: Icons.radar,

                    title: "Remote Tracking",

                    onTap: () {

                      Navigator.push(

                        context,

                        MaterialPageRoute(

                          builder: (_) =>
                              const RemoteTrackingPage(),
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

                    icon: Icons.sos,

                    title: "Emergency SOS",

                    onTap: () {

                      Navigator.push(

                        context,

                        MaterialPageRoute(

                          builder: (_) =>
                              const SOSPage(),
                        ),
                      );
                    },
                  ),

                  drawerItem(

                    context,

                    icon: Icons.monitor_heart,

                    title:
                        "Emergency Dashboard",

                    onTap: () {

                      Navigator.push(

                        context,

                        MaterialPageRoute(

                          builder: (_) =>
                              const EmergencyDashboardPage(),
                        ),
                      );
                    },
                  ),

                  drawerItem(

                    context,

                    icon: Icons.security,

                    title: "Security Center",

                    onTap: () {

                      Navigator.push(

                        context,

                        MaterialPageRoute(

                          builder: (_) =>
                              const SecurityPage(),
                        ),
                      );
                    },
                  ),

                  drawerItem(

                    context,

                    icon: Icons.warning,

                    title: "AI Intruder",

                    onTap: () {

                      Navigator.push(

                        context,

                        MaterialPageRoute(

                          builder: (_) =>
                              const IntruderDetectionPage(),
                        ),
                      );
                    },
                  ),

                  drawerItem(

                    context,

                    icon: Icons.lock,

                    title: "Remote Security",

                    onTap: () {

                      Navigator.push(

                        context,

                        MaterialPageRoute(

                          builder: (_) =>
                              const RemoteSecurityPage(),
                        ),
                      );
                    },
                  ),

                  drawerItem(

                    context,

                    icon: Icons.gpp_bad,

                    title: "Threat Detection",

                    onTap: () {

                      Navigator.push(

                        context,

                        MaterialPageRoute(

                          builder: (_) =>
                              const ThreatDetectionPage(),
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

      // =====================================
      // BODY
      // =====================================
      body: Padding(

        padding:
            const EdgeInsets.all(16),

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

              title: "Remote Tracking",

              icon: Icons.radar,

              color: Colors.deepPurple,

              onTap: () {

                Navigator.push(

                  context,

                  MaterialPageRoute(

                    builder: (_) =>
                        const RemoteTrackingPage(),
                  ),
                );
              },
            ),
dashboardCard(

  context,

  title: "Theft Mode",

  icon: Icons.security,

  color: Colors.red,

  onTap: () {

    Navigator.push(

      context,

      MaterialPageRoute(

        builder: (_) =>
            const TheftModePage(),
      ),
    );
  },
),
dashboardCard(

  context,

  title: "Device Network",

  icon: Icons.devices,

  color: Colors.blue,

  onTap: () {

    Navigator.push(

      context,

      MaterialPageRoute(

        builder: (_) =>
            const NetworkDashboardPage(),
      ),
    );
  },
),
dashboardCard(

  context,

  title: "AI Security",

  icon: Icons.security,

  color: Colors.deepPurple,

  onTap: () {

    Navigator.push(

      context,

      MaterialPageRoute(

        builder: (_) =>
            const SecurityPage(),
      ),
    );
  },
),
dashboardCard(

  context,

  title: "Camera Motion AI",

  icon: Icons.videocam,

  color: Colors.deepPurple,

  onTap: () {

    Navigator.push(

      context,

      MaterialPageRoute(

        builder: (_) =>
            const CameraMotionPage(),
      ),
    );
  },
),
dashboardCard(

  context,

  title: "Fake Shutdown",

  icon: Icons.power_settings_new,

  color: Colors.red,

  onTap: () {

    Navigator.push(

      context,

      MaterialPageRoute(

        builder: (_) =>
            const FakeShutdownPage(),
      ),
    );
  },
),
dashboardCard(

  context,

  title: "Threat Dashboard",

  icon: Icons.warning,

  color: Colors.red,

  onTap: () {

    Navigator.push(

      context,

      MaterialPageRoute(

        builder: (_) =>
            const ThreatDashboardPage(),
      ),
    );
  },
),
dashboardCard(

  context,

  title: "Voice SOS",

  icon: Icons.mic,

  color: Colors.deepOrange,

  onTap: () {

    Navigator.push(

      context,

      MaterialPageRoute(

        builder: (_) =>
            const VoiceSOSPage(),
      ),
    );
  },
),
dashboardCard(

  context,

  title: "Remote Lock",

  icon: Icons.lock,

  color: Colors.red,

  onTap: () {

    Navigator.push(

      context,

      MaterialPageRoute(

        builder: (_) =>
            const RemoteLockPage(),
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

              title: "My Devices",

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

              title: "Emergency SOS",

              icon: Icons.sos,

              color: Colors.red,

              onTap: () {

                Navigator.push(

                  context,

                  MaterialPageRoute(

                    builder: (_) =>
                        const SOSPage(),
                  ),
                );
              },
            ),

            dashboardCard(

              context,

              title:
                  "Emergency Dashboard",

              icon: Icons.monitor_heart,

              color: Colors.orange,

              onTap: () {

                Navigator.push(

                  context,

                  MaterialPageRoute(

                    builder: (_) =>
                        const EmergencyDashboardPage(),
                  ),
                );
              },
            ),
            dashboardCard(

  context,

  title: "Face Detection",

  icon: Icons.face,

  color: Colors.indigo,

  onTap: () {

    Navigator.push(

      context,

      MaterialPageRoute(

        builder: (_) =>
            const FaceDetectionPage(),
      ),
    );
  },
),
dashboardCard(

  context,

  title: "Admin Dashboard",

  icon: Icons.admin_panel_settings,

  color: Colors.black,

  onTap: () {

    Navigator.push(

      context,

      MaterialPageRoute(

        builder: (_) =>
            const AdminDashboardPage(),
      ),
    );
  },
),
dashboardCard(

  context,

  title: "AI Threat Center",

  icon: Icons.psychology,

  color: Colors.deepPurple,

  onTap: () {

    Navigator.push(

      context,

      MaterialPageRoute(

        builder: (_) =>
            const AIThreatCenterPage(),
      ),
    );
  },
),
dashboardCard(

  context,

  title: "Device Registry",

  icon: Icons.devices_other,

  color: Colors.blue,

  onTap: () {

    Navigator.push(

      context,

      MaterialPageRoute(

        builder: (_) =>
            const DeviceRegistryPage(),
      ),
    );
  },
),
dashboardCard(

  context,

  title: "Security Events",

  icon: Icons.history,

  color: Colors.deepPurple,

  onTap: () {

    Navigator.push(

      context,

      MaterialPageRoute(

        builder: (_) =>
            const SecurityEventsPage(),
      ),
    );
  },
),
dashboardCard(

  context,

  title: "AI Analytics",

  icon: Icons.analytics,

  color: Colors.deepPurple,

  onTap: () {

    Navigator.push(

      context,

      MaterialPageRoute(

        builder: (_) =>
            const AIAnalyticsPage(),
      ),
    );
  },
),
            dashboardCard(

              context,

              title: "Device Finder",

              icon: Icons.phone_android,

              color: Colors.teal,

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

              title: "Security Center",

              icon: Icons.security,

              color: Colors.purple,

              onTap: () {

                Navigator.push(

                  context,

                  MaterialPageRoute(

                    builder: (_) =>
                        const SecurityPage(),
                  ),
                );
              },
            ),

            dashboardCard(

              context,

              title: "AI Intruder",

              icon: Icons.warning,

              color: Colors.orange,

              onTap: () {

                Navigator.push(

                  context,

                  MaterialPageRoute(

                    builder: (_) =>
                        const IntruderDetectionPage(),
                  ),
                );
              },
            ),

            dashboardCard(

              context,

              title: "Remote Security",

              icon: Icons.lock,

              color: Colors.red,

              onTap: () {

                Navigator.push(

                  context,

                  MaterialPageRoute(

                    builder: (_) =>
                        const RemoteSecurityPage(),
                  ),
                );
              },
            ),

            dashboardCard(

              context,

              title: "Threat Detection",

              icon: Icons.gpp_bad,

              color: Colors.deepOrange,

              onTap: () {

                Navigator.push(

                  context,

                  MaterialPageRoute(

                    builder: (_) =>
                        const ThreatDetectionPage(),
                  ),
                );
              },
            ),
            dashboardCard(

  context,

  title: "Camera Security",

  icon: Icons.camera_alt,

  color: Colors.deepPurple,

  onTap: () {

    Navigator.push(

      context,

      MaterialPageRoute(

        builder: (_) =>
            const CameraMotionPage(),
      ),
    );
  },
),
dashboardCard(

  context,

  title: "Admin Dashboard",

  icon: Icons.admin_panel_settings,

  color: Colors.indigo,

  onTap: () {

    Navigator.push(

      context,

      MaterialPageRoute(

        builder: (_) =>
            const AdminDashboardPage(),
      ),
    );
  },
),
dashboardCard(

  context,

  title: "AI Threat",

  icon: Icons.analytics,

  color: Colors.deepPurple,

  onTap: () {

    Navigator.push(

      context,

      MaterialPageRoute(

        builder: (_) =>
            const AIThreatPage(),
      ),
    );
  },
),
dashboardCard(

  context,

  title: "Push Alerts",

  icon: Icons.notifications_active,

  color: Colors.red,

  onTap: () {

    Navigator.push(

      context,

      MaterialPageRoute(

        builder: (_) =>
            const PushAlertPage(),
      ),
    );
  },
),
          ],
        ),
      ),
    );
  }

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

          color:
              color.withOpacity(0.1),

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

              offset:
                  const Offset(0, 5),
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

            Padding(

              padding:
                  const EdgeInsets.symmetric(
                horizontal: 10,
              ),

              child: Text(

                title,

                textAlign: TextAlign.center,

                style: TextStyle(

                  fontSize: 18,

                  fontWeight:
                      FontWeight.bold,

                  color: color,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}