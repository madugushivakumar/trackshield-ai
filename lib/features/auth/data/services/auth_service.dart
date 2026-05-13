import 'package:dio/dio.dart';

import '../../../../core/constants/api_constants.dart';

class AuthService {

  final Dio _dio = Dio();


  // REGISTER
  Future<Response> registerUser({

    required String fullName,
    required String email,
    required String password,

  }) async {

    final response = await _dio.post(

      ApiConstants.register,

      data: {

        "fullName": fullName,
        "email": email,
        "password": password,
      },
    );

    return response;
  }


  // LOGIN
  Future<Response> loginUser({

    required String email,
    required String password,

  }) async {

    final response = await _dio.post(

      ApiConstants.login,

      data: {

        "email": email,
        "password": password,
      },
    );

    return response;
  }
}