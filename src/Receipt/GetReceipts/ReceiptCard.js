import React from "react";
import "./ReceiptCardStyles.css";

function ReceiptCard({ receipt }) {
  return (
    <div className="card">
        <h2>Order number</h2>
        <ul>
        {receipt.drinks.map((drink, index) => (
          <li key={index}>{drink.name}</li>
        ))}
        {receipt.coctails.map((coctail, index) => (
          <li key={index}>{coctail.name}</li>
        ))}
        </ul>
    </div>
  );
}

export default ReceiptCard;
