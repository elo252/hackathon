import React, { useState } from "react";
import landingScreenImg from "./img.jpg";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function EmailVer() {
  const [email, setEmail] = useState("");
  const [OTPCode, setOTPCode] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
  };
  const navigate = useNavigate();

  return (
    <Grid
      container
      component="main"
      sx={{ height: "100vh", overflow: "hidden" }}
    >
      <Grid item xs={false} sm={7} md={7}>
        <img
          src={landingScreenImg}
          style={{ width: "100%", height: "100vh" }}
        />
      </Grid>

      <Grid
        item
        xs={12}
        sm={5}
        md={5}
        component={Paper}
        elevation={6}
        square
        backgroundColor="#ececed"
      >
        <div>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              component="h1"
              variant="h5"
              display="flex"
              flexDirection="column"
              alignItems="right"
              sx={{ mt: 8, fontWeight: "bold" }}
            >
              Email Verification
            </Typography>

            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                sx={{ width: "350px" }}
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                sx={{
                  width: "350px",
                  display: "flex",
                  flexDirection: "column",
                }}
                name="otp"
                label="OTP CODE"
                type="number"
                id="otp"
                onChange={(e) => setOTPCode(e.target.value)}
              />

              {/* <Link to="/selection" > */}
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                sx={{ mt: 3, mb: 2 }}
              >
                Get the OTP
              </Button>
              {/* </Link> */}

              {/* <Link to="/phonever"> */}
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => {
                  navigate("/phonever");
                }}
              >
                Confirm and proceed
              </Button>
              {/* </Link> */}
              {/* <Divider></Divider>
							<h4>Don't get the code? </h4>
							<Link to="/signup" className="title">
								RESEND THE CODE
							</Link> */}
            </Box>
          </Box>
        </div>
      </Grid>
    </Grid>
  );
}
