import React from "react";
import ReceiptCard from "./ReceiptCard";
import "./ReceiptCardsLayout.css";

function ReceiptCardsLayout() {
    const receipts = [
        {
            "drinks" : [
                {
                    "name" : "drink1"
                },
                {
                    "name" : "drink2"
                },
                {
                    "name" : "drink3"
                }
            ],
            "coctails" : [
                {
                    "name" : "coctail1"
                },
                {
                    "name" : "coctail2"
                },
                {
                    "name" : "coctail3"
                }
            ]
        },
        {
            "drinks" : [
                {
                    "name" : "drink1"
                },
                {
                    "name" : "drink2"
                },
                {
                    "name" : "drink3"
                }
            ],
            "coctails" : [
                {
                    "name" : "coctail1"
                },
                {
                    "name" : "coctail2"
                },
                {
                    "name" : "coctail3"
                }
            ]
        },
        {
            "drinks" : [
                {
                    "name" : "drink1"
                },
                {
                    "name" : "drink2"
                },
                {
                    "name" : "drink3"
                }
            ],
            "coctails" : [
                {
                    "name" : "coctail1"
                },
                {
                    "name" : "coctail2"
                },
                {
                    "name" : "coctail3"
                }
            ]
        }
    ]
    return (
        <div className="grid-container">
            {receipts.map((receipt, index) => (
                <ReceiptCard key={index} receipt={receipt} />
            ))}
        </div>
    );
}

export default ReceiptCardsLayout;