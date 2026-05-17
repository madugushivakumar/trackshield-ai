import 'package:firebase_database/firebase_database.dart';

class AdminService {

  static final database =
      FirebaseDatabase.instance.ref();

  // =====================================
  // GET LIVE DEVICES
  // =====================================
  static Stream<DatabaseEvent>
      getDevices() {

    return database
        .child("devices")
        .onValue;
  }

  // =====================================
  // GET SOS ALERTS
  // =====================================
  static Stream<DatabaseEvent>
      getSOSAlerts() {

    return database
        .child("sos_alerts")
        .onValue;
  }

  // =====================================
  // GET THREAT ALERTS
  // =====================================
  static Stream<DatabaseEvent>
      getThreatAlerts() {

    return database
        .child("intruder_alerts")
        .onValue;
  }
}