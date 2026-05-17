import 'package:flutter/material.dart';

import 'package:firebase_auth/firebase_auth.dart';

class ProtectedRoute
    extends StatelessWidget {

  final Widget child;

  const ProtectedRoute({

    super.key,

    required this.child,
  });

  @override
  Widget build(
    BuildContext context,
  ) {

    final user =
        FirebaseAuth
            .instance
            .currentUser;

    if (user == null) {

      Future.microtask(() {

        Navigator.pushReplacementNamed(
          context,
          '/login',
        );
      });

      return const Scaffold(

        body: Center(

          child:
              CircularProgressIndicator(),
        ),
      );
    }

    return child;
  }
}