import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";

export default function OrderCard() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/account/order/orderId")}
      className="p-5 shadow-lg hover:shadow-2xl rounded-lg border"
    >
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item sm={6}>
          <div className="flex cursor-pointer ">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://rukminim2.flixcart.com/image/832/832/xif0q/kids-short/c/j/m/12-13-years-ct-shorts-race3-cute-trend-original-imafhpy8r66qxckm-bb.jpeg?q=70&crop=false"
              alt=""
            />
            <div className="ml-5  space-y-2">
              <p className="">Men Slim Mid Rise Black Jeans</p>
              <p className="opacity-50 text-xs font-semibold ">Size: M</p>
              <p className="opacity-50 text-xs font-semibold ">Color: Black</p>
            </div>
          </div>
        </Grid>
        <Grid item sm={2}>
          <p>₹299</p>
        </Grid>
        <Grid item sm={4}>
          {true && (
            <div>
              <p>
                <AdjustIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 mr-2 text-sm"
                />
                <span>Delivered On March 03</span>
              </p>
              <p className="text-xs">Your Item Has Been Delivered</p>
            </div>
          )}
          {false && (
            <p>
              <span>Expected On March 03</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
}
