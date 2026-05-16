import 'package:dio/dio.dart';
import '../constants/app_constants.dart';
import '../config/app_config.dart';

class ApiClient {
  static final Dio dio =
      Dio(

    BaseOptions(

      baseUrl:
          AppConfig.apiBaseUrl,

      connectTimeout:
          const Duration(seconds: 30),

      receiveTimeout:
          const Duration(seconds: 30),
    ),
  );
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