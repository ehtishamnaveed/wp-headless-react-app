import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL, CONSUMER_KEY, CONSUMER_SECRET } from "./Api";

const KEY = `consumer_key=${CONSUMER_KEY}`;
const SECRET = `consumer_secret=${CONSUMER_SECRET}`;

export async function fetchOrders() {
  // try {
  //   const response = await axios.get(`${API_URL}/orders?${KEY}&${SECRET}` , {
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   });

  try {
  const response = await axios.get('http://localhost:3001/orders', {
    headers: {
      "Content-Type": "application/json"
    }
  });

    // Extract Entries
    const data = response.data;
    const ordersData = data.map(order => {
          return {
            orderID: order.id,
            orderTotal: order.total,
            orderStatus:order.status
            // order
          };
      });

   return ordersData;

  } catch (error) {
      console.error("Error fetching data:", error.message);
      return [];
    }

}


