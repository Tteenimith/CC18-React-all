import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [productID, setProductID] = useState("");
  const navigate = useNavigate();
  const hdlSubmit = (e) => {
    e.preventDefault;
    navigate(`/product/${productID}`);
  };
  return (
    <div className="mt-4">
      <form onSubmit={hdlSubmit}>
        <label>
          {" "}
          Product id :
          <input
            className="border"
            value={productID}
            onChange={(e) => setProductID(e.target.value)}
          />
        </label>
        <button className="bg-blue-700 p-1">Search</button>
      </form>
    </div>
  );
}
