import {

  useEffect,

  useState,

} from "react";

import Sidebar from "../../components/dashboard/Sidebar";

import Topbar from "../../components/dashboard/Topbar";

import {

  getUsers,

} from "../../services/usersService";

// =====================================
// USERS PAGE
// =====================================
const Users = () => {

  const [users, setUsers] =
    useState([]);

  // ===================================
  // LOAD USERS
  // ===================================
  const loadUsers =
    async () => {

      try {

        const response =
          await getUsers();

        setUsers(
          response.users || [],
        );

      } catch (error) {

        console.log(error);
      }
    };

  useEffect(() => {

    loadUsers();

  }, []);

  return (

    <div className="flex bg-black min-h-screen">

      <Sidebar />

      <div className="flex-1">

        <Topbar />

        <div className="p-6 text-white">

          <h1 className="text-3xl font-bold mb-6">

            Users

          </h1>

          <div className="overflow-auto rounded-xl">

            <table className="w-full bg-zinc-900 rounded-xl">

              <thead>

                <tr className="text-left border-b border-zinc-700">

                  <th className="p-4">

                    Name

                  </th>

                  <th className="p-4">

                    Email

                  </th>

                  <th className="p-4">

                    Role

                  </th>

                </tr>

              </thead>

              <tbody>

                {

                  users.map((user) => (

                    <tr
                      key={user._id}
                      className="border-b border-zinc-800"
                    >

                      <td className="p-4">

                        {user.name}

                      </td>

                      <td className="p-4">

                        {user.email}

                      </td>

                      <td className="p-4">

                        {user.role}

                      </td>

                    </tr>
                  ))
                }

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Users;