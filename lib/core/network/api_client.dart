import 'package:dio/dio.dart';
import '../constants/app_constants.dart';

class ApiClient {
  late Dio dio;

  ApiClient() {
    dio = Dio(
      BaseOptions(
        baseUrl: AppConstants.baseUrl,
        connectTimeout: const Duration(seconds: 30),
        receiveTimeout: const Duration(seconds: 30),
        headers: {
          "Content-Type": "application/json",
        },
      ),
    );
  }
}