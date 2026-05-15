class ConflictResolutionService {

  // =====================================
  // RESOLVE
  // =====================================
  static Map<String, dynamic>
      resolve({

    required Map<String, dynamic>
        local,

    required Map<String, dynamic>
        remote,
  }) {

    final localTime =
        local["timestamp"] ?? 0;

    final remoteTime =
        remote["timestamp"] ?? 0;

    // LATEST WINS
    if (localTime > remoteTime) {
      return local;
    }

    return remote;
  }
}