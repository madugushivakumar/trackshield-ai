import AdminLayout
from "../layout/AdminLayout";

import {
  useEffect,
  useState,
} from "react";

import {
  ref,
  onValue,
} from "firebase/database";

import {
  database,
} from "../services/firebase";

const Tenants = () => {

  const [tenants,
    setTenants] =
      useState([]);

  useEffect(() => {

    const tenantRef =
      ref(
        database,
        "tenants"
      );

    onValue(
      tenantRef,
      (snapshot) => {

        const data =
          snapshot.val();

        if (data) {

          const loaded =
            Object.entries(data)
              .map(
                ([id, value]) => ({
                  id,
                  ...value,
                })
              );

          setTenants(
            loaded,
          );
        }
      }
    );

  }, []);

  return (

    <AdminLayout>

      <h1
        style={{

          color: "white",

          marginBottom: "30px",
        }}
      >
        Enterprise Tenants
      </h1>

      <div
        style={{

          display: "grid",

          gridTemplateColumns:
              "repeat(auto-fit, minmax(350px, 1fr))",

          gap: "24px",
        }}
      >

        {tenants.map(
          (
            tenant,
            index
          ) => (

            <div

              key={index}

              style={{

                background:
                    "#111827",

                padding: "24px",

                borderRadius:
                    "20px",

                color: "white",

                border:
                    "1px solid #1e293b",
              }}
            >

              <h2>
                {tenant.companyName}
              </h2>

              <p>
                Tenant ID:
                {" "}
                {tenant.tenantId}
              </p>

              <p>
                Admin:
                {" "}
                {tenant.adminEmail}
              </p>

              <p>
                Subscription:
                {" "}
                {tenant.subscription}
              </p>

            </div>
          )
        )}

      </div>

    </AdminLayout>
  );
};

export default Tenants;