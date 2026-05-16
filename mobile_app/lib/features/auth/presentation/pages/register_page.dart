import 'package:flutter/material.dart';

import '../../data/services/auth_service.dart';

class RegisterPage extends StatefulWidget {

  const RegisterPage({super.key});

  @override
  State<RegisterPage> createState() =>
      _RegisterPageState();
}

class _RegisterPageState
    extends State<RegisterPage> {

  final TextEditingController
      fullNameController =
      TextEditingController();

  final TextEditingController
      emailController =
      TextEditingController();

  final TextEditingController
      passwordController =
      TextEditingController();

  final AuthService authService =
      AuthService();

  bool isLoading = false;


  Future<void> registerUser() async {

    try {

      setState(() {
        isLoading = true;
      });

      final response =
          await authService.registerUser(

        fullName:
            fullNameController.text.trim(),

        email:
            emailController.text.trim(),

        password:
            passwordController.text.trim(),
      );

      if (response.statusCode == 201) {

        if (mounted) {

          ScaffoldMessenger.of(context)
              .showSnackBar(

            const SnackBar(
              content: Text(
                "Registration Successful",
              ),
            ),
          );

          Navigator.pushReplacementNamed(
            context,
            '/login',
          );
        }
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

  @override
  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(
        title: const Text(
          "Register",
        ),
      ),

      body: Padding(

        padding:
            const EdgeInsets.all(20),

        child: Column(

          children: [

            const SizedBox(height: 30),

            TextField(

              controller:
                  fullNameController,

              decoration: InputDecoration(

                labelText: "Full Name",

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

            TextField(

              controller:
                  emailController,

              decoration: InputDecoration(

                labelText: "Email",

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

            TextField(

              controller:
                  passwordController,

              obscureText: true,

              decoration: InputDecoration(

                labelText: "Password",

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

            SizedBox(

              width: double.infinity,
              height: 55,

              child: ElevatedButton(

                onPressed:
                    isLoading
                        ? null
                        : registerUser,

                child: isLoading

                    ? const CircularProgressIndicator()

                    : const Text(
                        "Register",
                        style: TextStyle(
                          fontSize: 18,
                        ),
                      ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}