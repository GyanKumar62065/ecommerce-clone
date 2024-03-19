import React from "react";
import CartItem from "./CartItem";
import { Button, Divider } from "@mui/material";

export default function Cart() {
  return (
    <div className="mt-10 mx-14">
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2 space-y-3">
          {[1, 1, 1].map((item) => (
            <CartItem />
          ))}
        </div>
        <div className="ps-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 ">
          <div className="border mb-2 p-3 py-4 shadow-lg rounded-lg ">
            <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
            <Divider />
            <div className="space-y-1 font-semibold mb-3">
              <div className="flex justify-between pt-3 text-black">
                <span>Price (1 item)</span>
                <span>₹1,990</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Discount</span>
                <span className="text-green-600">-₹200</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Delivery Charge</span>
                <span className="text-green-600">Free</span>
              </div>
            </div>
            <Divider className="font-bold" />
            <div className="flex justify-between pt-3 text-black font-bold">
              <span className="font-bold">Total Amount</span>
              <span className="text-green-600 ">₹1,790</span>
            </div>
          </div>
          <Button
            variant="contained"
            className="w-full "
            sx={{
              px: "2.5rem",
              py: "0.7rem",
              bgcolor: "#9155fd",
            }}
          >
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
}
