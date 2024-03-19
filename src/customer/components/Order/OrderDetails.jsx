import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";

import OrderRateAndReviewCard from "./OrderRateAndReviewCard";

export default function OrderDetails() {
  return (
    <div className="lg:px-20 p-10 space-y-10">
      <div className="border shadow-xl rounded-lg p-10">
        <h1 className="font-bold text-xl pb-6 ">Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="border shadow-xl rounded-lg py-10">
        <OrderTracker activeStep={2} />
      </div>
      {[1, 1, 1, 1, 1].map((item) => (
        <OrderRateAndReviewCard />
      ))}
    </div>
  );
}
