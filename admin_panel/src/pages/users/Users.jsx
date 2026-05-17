import {

  useEffect,

  useMemo,

  useState,

} from "react";

import {

  FaUsers,

  FaUserShield,

  FaSearch,

  FaSyncAlt,

  FaUserCircle,

} from "react-icons/fa";

import {

  getUsers,

} from "../../services/usersService";

// =====================================
// USERS PAGE
// =====================================
const Users = () => {

  const [users, setUsers] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  const [roleFilter, setRoleFilter] =
    useState("ALL");

  // ===================================
  // LOAD USERS
  // ===================================
  const loadUsers =
    async () => {

      try {

        setLoading(true);

        const response =
          await getUsers();

        setUsers(

          response.users || [],
        );

      } catch (error) {

        console.log(
          "Load Users Error:",
          error,
        );

      } finally {

        setLoading(false);
      }
    };

  // ===================================
  // USE EFFECT
  // ===================================
  useEffect(() => {

    loadUsers();

  }, []);

  // ===================================
  // FILTER USERS
  // ===================================
  const filteredUsers =
    useMemo(() => {

      return users.filter(
        (user) => {

          const matchesSearch =

            user.name
              ?.toLowerCase()
              .includes(
                search.toLowerCase(),
              ) ||

            user.email
              ?.toLowerCase()
              .includes(
                search.toLowerCase(),
              );

          const matchesRole =

            roleFilter === "ALL"

              ? true

              : user.role ===
                roleFilter;

          return (
            matchesSearch &&
            matchesRole
          );
        },
      );
    }, [

      users,

      search,

      roleFilter,
    ]);

  // ===================================
  // STATS
  // ===================================
  const totalUsers =
    users.length;

  const adminUsers =
    users.filter(

      (u) =>
        u.role === "ADMIN",
    ).length;

  const securityUsers =
    users.filter(

      (u) =>
        u.role === "SECURITY",
    ).length;

  return (

    <div>

      {/* ================================= */}
      {/* HEADER */}
      {/* ================================= */}
      <div
        style={{
          marginBottom: "30px",
        }}
      >

        <h1
          style={{

            color: "white",

            fontSize: "36px",

            fontWeight: "bold",

            marginBottom: "10px",
          }}
        >

          Users Management

        </h1>

        <p
          style={{
            color: "#94a3b8",
            fontSize: "16px",
          }}
        >

          Monitor and manage
          all enterprise users

        </p>

      </div>

      {/* ================================= */}
      {/* STATS */}
      {/* ================================= */}
      <div
        style={{

          display: "grid",

          gridTemplateColumns:
            "repeat(auto-fit, minmax(250px, 1fr))",

          gap: "20px",

          marginBottom: "30px",
        }}
      >

        <StatCard
          title="Total Users"
          value={totalUsers}
          icon={<FaUsers />}
          color="#3b82f6"
        />

        <StatCard
          title="Admins"
          value={adminUsers}
          icon={<FaUserShield />}
          color="#22c55e"
        />

        <StatCard
          title="Security Team"
          value={securityUsers}
          icon={<FaUserShield />}
          color="#f59e0b"
        />

      </div>

      {/* ================================= */}
      {/* FILTERS */}
      {/* ================================= */}
      <div
        style={{

          display: "flex",

          gap: "15px",

          marginBottom: "25px",

          flexWrap: "wrap",
        }}
      >

        {/* SEARCH */}
        <div
          style={{
            position: "relative",
            flex: 1,
            minWidth: "280px",
          }}
        >

          <FaSearch
            style={{

              position: "absolute",

              left: "15px",

              top: "16px",

              color: "#64748b",
            }}
          />

          <input
            type="text"
            placeholder="Search users..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value,
              )
            }
            style={{

              width: "100%",

              padding:
                "14px 14px 14px 45px",

              background: "#111827",

              border:
                "1px solid #1e293b",

              borderRadius: "14px",

              color: "white",

              outline: "none",

              boxSizing:
                "border-box",
            }}
          />

        </div>

        {/* FILTER */}
        <select
          value={roleFilter}
          onChange={(e) =>
            setRoleFilter(
              e.target.value,
            )
          }
          style={{

            padding: "14px",

            background: "#111827",

            border:
              "1px solid #1e293b",

            borderRadius: "14px",

            color: "white",

            outline: "none",
          }}
        >

          <option value="ALL">
            All Roles
          </option>

          <option value="ADMIN">
            Admin
          </option>

          <option value="USER">
            User
          </option>

          <option value="SECURITY">
            Security
          </option>

        </select>

        {/* REFRESH */}
        <button
          onClick={loadUsers}
          style={{

            padding:
              "14px 18px",

            background:
              "#2563eb",

            border: "none",

            borderRadius: "14px",

            color: "white",

            cursor: "pointer",

            fontWeight: "bold",

            display: "flex",

            alignItems: "center",

            gap: "10px",
          }}
        >

          <FaSyncAlt />

          Refresh

        </button>

      </div>

      {/* ================================= */}
      {/* TABLE */}
      {/* ================================= */}
      <div
        style={{

          background: "#111827",

          borderRadius: "20px",

          overflow: "hidden",

          border:
            "1px solid #1e293b",
        }}
      >

        <div
          style={{
            overflowX: "auto",
          }}
        >

          <table
            style={{

              width: "100%",

              borderCollapse:
                "collapse",

              color: "white",
            }}
          >

            {/* HEADER */}
            <thead
              style={{
                background: "#0f172a",
              }}
            >

              <tr>

                <th style={tableHeader}>
                  User
                </th>

                <th style={tableHeader}>
                  Email
                </th>

                <th style={tableHeader}>
                  Role
                </th>

                <th style={tableHeader}>
                  Status
                </th>

              </tr>

            </thead>

            {/* BODY */}
            <tbody>

              {

                loading ? (

                  <tr>

                    <td
                      colSpan="4"
                      style={
                        loadingStyle
                      }
                    >

                      Loading users...

                    </td>

                  </tr>

                ) : filteredUsers.length === 0 ? (

                  <tr>

                    <td
                      colSpan="4"
                      style={
                        loadingStyle
                      }
                    >

                      No users found

                    </td>

                  </tr>

                ) : (

                  filteredUsers.map(
                    (user) => (

                      <tr
                        key={user._id}
                        style={{

                          borderBottom:
                            "1px solid #1e293b",
                        }}
                      >

                        {/* USER */}
                        <td
                          style={
                            tableCell
                          }
                        >

                          <div
                            style={{

                              display:
                                "flex",

                              alignItems:
                                "center",

                              gap: "14px",
                            }}
                          >

                            <FaUserCircle
                              size={
                                42
                              }
                              color="#38bdf8"
                            />

                            <div>

                              <div
                                style={{

                                  fontWeight:
                                    "bold",
                                }}
                              >

                                {
                                  user.name
                                }

                              </div>

                              <div
                                style={{

                                  color:
                                    "#94a3b8",

                                  fontSize:
                                    "13px",
                                }}
                              >

                                ID:
                                {" "}
                                {
                                  user._id?.slice(
                                    0,
                                    8,
                                  )
                                }

                              </div>

                            </div>

                          </div>

                        </td>

                        {/* EMAIL */}
                        <td
                          style={
                            tableCell
                          }
                        >

                          {
                            user.email
                          }

                        </td>

                        {/* ROLE */}
                        <td
                          style={
                            tableCell
                          }
                        >

                          <span
                            style={{

                              padding:
                                "6px 14px",

                              borderRadius:
                                "10px",

                              background:
                                user.role ===
                                "ADMIN"

                                  ? "#1d4ed8"

                                  : user.role ===
                                    "SECURITY"

                                  ? "#78350f"

                                  : "#14532d",

                              fontSize:
                                "13px",

                              fontWeight:
                                "bold",
                            }}
                          >

                            {
                              user.role
                            }

                          </span>

                        </td>

                        {/* STATUS */}
                        <td
                          style={
                            tableCell
                          }
                        >

                          <span
                            style={{

                              padding:
                                "6px 12px",

                              borderRadius:
                                "10px",

                              background:
                                "#14532d",

                              color:
                                "#4ade80",

                              fontSize:
                                "13px",

                              fontWeight:
                                "bold",
                            }}
                          >

                            Active

                          </span>

                        </td>

                      </tr>
                    ),
                  )
                )
              }

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

// =====================================
// STAT CARD
// =====================================
const StatCard = ({
  title,
  value,
  icon,
  color,
}) => {

  return (

    <div
      style={{

        background: "#111827",

        border:
          "1px solid #1e293b",

        borderRadius: "20px",

        padding: "24px",

        display: "flex",

        justifyContent:
          "space-between",

        alignItems: "center",
      }}
    >

      <div>

        <div
          style={{

            color: "#94a3b8",

            marginBottom: "10px",
          }}
        >

          {title}

        </div>

        <div
          style={{

            color: "white",

            fontSize: "34px",

            fontWeight: "bold",
          }}
        >

          {value}

        </div>

      </div>

      <div
        style={{

          width: "70px",

          height: "70px",

          borderRadius: "18px",

          background: color,

          display: "flex",

          justifyContent:
            "center",

          alignItems:
            "center",

          color: "white",

          fontSize: "28px",
        }}
      >

        {icon}

      </div>

    </div>
  );
};

// =====================================
// STYLES
// =====================================
const tableHeader = {

  padding: "20px",

  textAlign: "left",

  color: "#94a3b8",

  fontSize: "15px",

  fontWeight: "600",
};

const tableCell = {

  padding: "20px",

  fontSize: "15px",
};

const loadingStyle = {

  padding: "40px",

  textAlign: "center",

  color: "#94a3b8",
};

export default Users;