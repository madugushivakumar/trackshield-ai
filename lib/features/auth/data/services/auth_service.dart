import 'package:firebase_auth/firebase_auth.dart';

import '../../../../core/storage/secure_storage_service.dart';

class AuthService {

  static final FirebaseAuth
      _auth =
          FirebaseAuth.instance;

  // =====================================
  // LOGIN
  // =====================================
  static Future<UserCredential?>
      login({

    required String email,

    required String password,
  }) async {

    try {

      final credential =
          await _auth
              .signInWithEmailAndPassword(

        email: email,

        password: password,
      );

      final token =
          await credential.user!
              .getIdToken();

      if (token != null) {

        await SecureStorageService
            .saveToken(
          token,
        );
      }

      return credential;

    } catch (e) {

      print(
        "LOGIN ERROR: $e",
      );

      return null;
    }
  }

  // =====================================
  // REGISTER
  // =====================================
  static Future<UserCredential?>
      register({

    required String email,

    required String password,
  }) async {

    try {

      final credential =
          await _auth
              .createUserWithEmailAndPassword(

        email: email,

        password: password,
      );

      await credential.user!
          .sendEmailVerification();

      return credential;

    } catch (e) {

      print(
        "REGISTER ERROR: $e",
      );

      return null;
    }
  }

  // =====================================
  // LOGOUT
  // =====================================
  static Future<void>
      logout() async {

    await SecureStorageService
        .clear();

    await _auth.signOut();
  }

  // =====================================
  // RESET PASSWORD
  // =====================================
  static Future<void>
      resetPassword(
    String email,
  ) async {

    await _auth.sendPasswordResetEmail(
      email: email,
    );
  }

  // =====================================
  // CURRENT USER
  // =====================================
  static User?
      get currentUser =>
          _auth.currentUser;
}