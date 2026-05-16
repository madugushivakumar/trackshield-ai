import 'dart:async';

class OfflineRetryService {

  static Timer?
      _retryTimer;

  // =====================================
  // START RETRY LOOP
  // =====================================
  static void start({

    required Future<void>
        Function() onRetry,
  }) {

    _retryTimer?.cancel();

    _retryTimer = Timer.periodic(

      const Duration(
        seconds: 30,
      ),

      (_) async {

        await onRetry();

        print(
          "OFFLINE RETRY EXECUTED",
        );
      },
    );
  }

  // =====================================
  // STOP
  // =====================================
  static void stop() {

    _retryTimer?.cancel();
  }
}