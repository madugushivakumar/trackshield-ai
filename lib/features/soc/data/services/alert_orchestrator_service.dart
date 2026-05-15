import 'soc_engine_service.dart';

import 'threat_timeline_service.dart';

class AlertOrchestratorService {

  // =====================================
  // PROCESS ALERT
  // =====================================
  static Future<void>
      process({

    required String deviceId,

    required String type,

    required String severity,
  }) async {

    await SOCEngineService
        .createIncident(

      deviceId: deviceId,

      type: type,

      severity: severity,

      description:
          "Automated enterprise alert",
    );

    await ThreatTimelineService
        .logEvent(

      deviceId: deviceId,

      event: type,

      severity: severity,
    );

    print(
      "ALERT ORCHESTRATED",
    );
  }
}