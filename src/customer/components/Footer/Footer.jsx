import React from "react";
import { Button, Grid, Typography, Link } from "@mui/material";

export default function Footer() {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{
          bgcolor: "black",
          color: "white",
          py: 3,
        }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              About
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Blog
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Press
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Jobs
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Partners
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Solutions
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Marketing
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Analitics
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Commerce
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Insights
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Support
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Documentation
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Guides
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              API Ststus
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Legal
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Claim
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Privacy
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Terms
            </Button>
          </div>
        </Grid>

        <Grid className="pt-20" item xs={12}>
          <Typography variant="body2" component="p" align="center">
            &copy; 2024 My Company. All rights reserved.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Made with love by Me.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Icons made by{" "}
            <Link
              href="https://www.freepik.com"
              color="inherit"
              underline="always"
            >
              Freepik
            </Link>{" "}
            <Link
              href="https://www.flaticon.com/"
              color="inherit"
              underline="always"
            >
              www.flaticon.com
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
