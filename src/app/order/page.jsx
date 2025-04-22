"use client";

import { useState } from "react";
import axios from "axios";

export default function OrderPage() {
  const [formData, setFormData] = useState({
    product_ids: "",
    s_product_qty: "",
    c_name: "",
    c_phone: "",
    address: "",
    courier: "steadfast",
    cod_amount: "",
    delivery_charge: "80",
  });

  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = { ...formData, advance: null, discount_amount: null };
      const res = await axios.post(
        "https://admin.refabry.com/api/public/order/create",
        payload
      );
      if (res.status === 200) {
        setSuccess("Order placed successfully!");
        setError(null);
        setFormData({
          product_ids: "",
          s_product_qty: "",
          c_name: "",
          c_phone: "",
          address: "",
          courier: "steadfast",
          cod_amount: "",
          delivery_charge: "80",
        });
      }
    } catch (err) {
      setError("Failed to place order");
      setSuccess(null);
    }
  };

  return (
    <div className="container mx-auto px-4 py-10 max-w-xl">
      <h1 className="text-2xl font-bold mb-6">Place Your Order</h1>

      {success && <p className="text-green-600">{success}</p>}
      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="product_ids"
          placeholder="Product IDs (e.g., 1,2)"
          className="w-full p-2 border rounded"
          onChange={handleChange}
          value={formData.product_ids}
          required
        />
        <input
          type="text"
          name="s_product_qty"
          placeholder="Quantities (e.g., 2,1)"
          className="w-full p-2 border rounded"
          onChange={handleChange}
          value={formData.s_product_qty}
          required
        />
        <input
          type="text"
          name="cod_amount"
          placeholder="COD Amount"
          className="w-full p-2 border rounded"
          onChange={handleChange}
          value={formData.cod_amount}
          required
        />
        <input
          type="text"
          name="c_name"
          placeholder="Customer Name"
          className="w-full p-2 border rounded"
          onChange={handleChange}
          value={formData.c_name}
          required
        />
        <input
          type="text"
          name="c_phone"
          placeholder="Phone Number"
          className="w-full p-2 border rounded"
          onChange={handleChange}
          value={formData.c_phone}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          className="w-full p-2 border rounded"
          onChange={handleChange}
          value={formData.address}
          required
        />
        <select
          name="courier"
          className="w-full p-2 border rounded"
          onChange={handleChange}
          value={formData.courier}
        >
          <option value="steadfast">Steadfast</option>
          <option value="sundarban">Sundarban</option>
          <option value="pathao">Pathao</option>
        </select>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}
