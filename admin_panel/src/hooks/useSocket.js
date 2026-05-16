import {

  useContext,

} from "react";

import {

  SocketContext,

} from "../context/SocketContext";

// =====================================
// USE SOCKET
// =====================================
const useSocket =
  () => {

    return useContext(
      SocketContext,
    );
  };

export default useSocket;