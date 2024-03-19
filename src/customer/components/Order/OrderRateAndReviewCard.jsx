import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import React from "react";

export default function OrderRateAndReviewCard() {
  return (
    <div className="space-y-5">
      <Grid container className="space-x-5">
        <Grid
          item
          container
          className="shadow-xl border rounded-lg py-5 px-8"
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Grid item xs={6}>
            <div className="flex items-center space-x-5 ">
              <img
                className="w-[5rem] h-[5rem] object-cover object-top"
                src="https://rukminim2.flixcart.com/image/832/832/xif0q/kids-short/c/j/m/12-13-years-ct-shorts-race3-cute-trend-original-imafhpy8r66qxckm-bb.jpeg?q=70&crop=false"
                alt=""
              />

              <div className="space-y-2">
                <p className="font-semibold text-lg">
                  Short For Boys Sports Printed Pure Cotton
                </p>
                <p className="space-x-5 opacity-60 text-xs font-semibold">
                  <span>Color: Pink</span>
                  <span>Size: M</span>
                </p>
                <p>Seller: Fashon Factory</p>
                <p>₹299</p>
              </div>
            </div>
          </Grid>
          <Grid item>
            <Box
              sx={{
                color: deepPurple[600],
                display: "flex",
                alignItems: "center",
              }}
            >
              <StarBorderOutlinedIcon
                sx={{ fontSize: "2rem" }}
                className="px-2"
              />

              <span>Rate & Review Product</span>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
