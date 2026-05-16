class DeviceModel {

  final String deviceId;
  final String deviceName;
  final double latitude;
  final double longitude;
  final bool isOnline;

  DeviceModel({
    required this.deviceId,
    required this.deviceName,
    required this.latitude,
    required this.longitude,
    required this.isOnline,
  });
}