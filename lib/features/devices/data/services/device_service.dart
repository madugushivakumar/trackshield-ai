import '../models/device_model.dart';

class DeviceService {

  static List<DeviceModel> devices = [

    DeviceModel(
      deviceId: "TS-1001",
      deviceName: "Shiva Phone",
      latitude: 17.324879,
      longitude: 78.5878865,
      isOnline: true,
    ),

    DeviceModel(
      deviceId: "TS-1002",
      deviceName: "Family Device",
      latitude: 17.3850,
      longitude: 78.4867,
      isOnline: true,
    ),
  ];

  static List<DeviceModel> getDevices() {
    return devices;
  }
}