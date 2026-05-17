import 'package:flutter/material.dart';

import '../../data/services/auth_service.dart';

class AuthProvider
    extends ChangeNotifier {

  bool _isLoading = false;

  bool get isLoading =>
      _isLoading;

  // =====================================
  // LOGIN
  // =====================================
  Future<bool> login({

    required String email,

    required String password,
  }) async {

    _isLoading = true;

    notifyListeners();

    final result =
        await AuthService.login(

      email: email,

      password: password,
    );

    _isLoading = false;

    notifyListeners();

    return result != null;
  }

  // =====================================
  // LOGOUT
  // =====================================
  Future<void> logout() async {

    await AuthService.logout();

    notifyListeners();
  }
}