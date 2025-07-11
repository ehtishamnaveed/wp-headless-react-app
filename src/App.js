import React, { useState, useEffect } from "react";
// import {fetchOrders} from "./OrderDetails"
import axios from "axios";

function OrdersTest() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadOrders() {
      try {
        // const response = await axios.get("http://localhost:3001/orders");
        const response = await axios.get("https://api.7ringsstore.com/orders");
        // response.data should be an array of orders
        const data = response.data;

        // Map over the array to format your orders
        // const ordersData = data.map(order => ({
        //   orderID: order.id,
        //   orderTotal: order.total,
        //   orderStatus: order.status
        // }));

        setOrders(data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    }
    loadOrders();
  }, []);

  if (loading) return <div>Loading orders...</div>;

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "40px auto",
        padding: "24px",
        background: "#fff",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
      }}
    >
      <h2
        className="text-5xl bg-black text-white px-4"
        style={{ textAlign: "center", marginBottom: "24px" }}
      >
        Orders List
      </h2>

      {orders.length === 0 ? (
        <div style={{ textAlign: "center", color: "#888" }}>
          No orders found.
        </div>
      ) : (
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "1rem",
          }}
        >
          <thead>
            <tr>
              {/* Dynamically render header cells */}
              {Object.keys(orders[0]).map((key) => (
                <th
                  key={key}
                  style={{
                    borderBottom: "2px solid #f0f0f0",
                    padding: "10px",
                    textTransform: "capitalize",
                  }}
                >
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {orders.map((order, idx) => (
              <tr key={order.orderID || idx}>
                {Object.keys(order).map((key) => (
                  <td
                    key={key}
                    style={{
                      borderBottom: "1px solid #eee",
                      padding: "10px",
                      textAlign: "center",
                    }}
                  >
                    {String(order[key])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default OrdersTest;
