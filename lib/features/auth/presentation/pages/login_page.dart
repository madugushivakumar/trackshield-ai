import 'package:flutter/material.dart';

import '../../../../core/services/storage_service.dart';

import '../../../dashboard/presentation/pages/dashboard_page.dart';

import '../../data/services/auth_service.dart';

class LoginPage extends StatefulWidget {

  const LoginPage({super.key});

  @override
  State<LoginPage> createState() =>
      _LoginPageState();
}

class _LoginPageState
    extends State<LoginPage> {

  final TextEditingController
      emailController =
      TextEditingController();

  final TextEditingController
      passwordController =
      TextEditingController();

  final AuthService authService =
      AuthService();

  bool isLoading = false;

  // ================= LOGIN FUNCTION =================

  Future<void> loginUser() async {

    try {

      setState(() {
        isLoading = true;
      });

      final response =
          await authService.loginUser(

        email:
            emailController.text.trim(),

        password:
            passwordController.text.trim(),
      );

      // SUCCESS LOGIN

      if (response.statusCode == 200) {

        final token =
            response.data["token"];

        // SAVE JWT TOKEN

        await StorageService
            .saveToken(token);

        if (!mounted) return;

        ScaffoldMessenger.of(context)
            .showSnackBar(

          const SnackBar(
            content: Text(
              "Login Successful",
            ),
          ),
        );

        // GO TO DASHBOARD

        Navigator.pushReplacement(

          context,

          MaterialPageRoute(

            builder: (_) =>
                const DashboardPage(),
          ),
        );

      } else {

        // LOGIN FAILED

        ScaffoldMessenger.of(context)
            .showSnackBar(

          const SnackBar(
            content: Text(
              "Invalid Credentials",
            ),
          ),
        );
      }

    } catch (e) {

      ScaffoldMessenger.of(context)
          .showSnackBar(

        SnackBar(
          content: Text(
            e.toString(),
          ),
        ),
      );

    } finally {

      setState(() {
        isLoading = false;
      });
    }
  }

  // ================= UI =================

  @override
  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(
        title: const Text(
          "Login",
        ),
      ),

      body: Padding(

        padding:
            const EdgeInsets.all(20),

        child: SingleChildScrollView(

          child: Column(

            children: [

              const SizedBox(height: 30),

              // EMAIL

              TextField(

                controller:
                    emailController,

                keyboardType:
                    TextInputType.emailAddress,

                decoration: InputDecoration(

                  labelText: "Email",

                  prefixIcon:
                      const Icon(Icons.email),

                  border:
                      OutlineInputBorder(

                    borderRadius:
                        BorderRadius.circular(
                      12,
                    ),
                  ),
                ),
              ),

              const SizedBox(height: 20),

              // PASSWORD

              TextField(

                controller:
                    passwordController,

                obscureText: true,

                decoration: InputDecoration(

                  labelText: "Password",

                  prefixIcon:
                      const Icon(Icons.lock),

                  border:
                      OutlineInputBorder(

                    borderRadius:
                        BorderRadius.circular(
                      12,
                    ),
                  ),
                ),
              ),

              const SizedBox(height: 30),

              // LOGIN BUTTON

              SizedBox(

                width: double.infinity,
                height: 55,

                child: ElevatedButton(

                  onPressed:
                      isLoading
                          ? null
                          : loginUser,

                  style: ElevatedButton.styleFrom(

                    shape:
                        RoundedRectangleBorder(

                      borderRadius:
                          BorderRadius.circular(
                        12,
                      ),
                    ),
                  ),

                  child: isLoading

                      ? const CircularProgressIndicator()

                      : const Text(

                          "Login",

                          style: TextStyle(
                            fontSize: 18,
                            fontWeight:
                                FontWeight.bold,
                          ),
                        ),
                ),
              ),

              const SizedBox(height: 20),

              // REGISTER BUTTON

              TextButton(

                onPressed: () {

                  Navigator.pushNamed(
                    context,
                    '/register',
                  );
                },

                child: const Text(
                  "Create Account",
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}