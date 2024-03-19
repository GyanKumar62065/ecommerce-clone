import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export default function CartItem() {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/x/e/d/xl-pepfsteesmlb-damensch-original-imagh9p35mwjza4s.jpeg?q=70&crop=false"
          />
        </div>

        <div className=" ml-5 space-y-1">
          <p className="font-semibold">
            Men Solid Round Neck Cotton Blend Brown T-Shirt
          </p>
          <p className="opacity-70 ">Size: L,White</p>
          <p className="opacity-70 mt-2">Seller: Killer </p>
          <div className="flex space-x-5 items-center text-gray-900 pt-5">
            <p className="font-semibold ">₹1,990</p>
            <p className="opacity-50 line-through">₹1,990</p>
            <p className="text-green-500 font-semibold">5% off</p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">5</span>
          <IconButton sx={{ color: "RGB(145 85 253)" }}>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div>
          <Button sx={{ color: "RGB(145 85 253)" }}>remove</Button>
        </div>
      </div>
    </div>
  );
}
