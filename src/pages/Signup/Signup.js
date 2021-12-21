import React, { useState } from "react";
import landingScreenImg from "./img.jpg";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import EmailVer from "../EmailVerification/EmailVer";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

export default function SigninSide() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  //   console.log("Data: ", name, email, address, phone);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const result = await Axios({
      method: "POST",
      data: {
        firstName: name,
        lastName: lastname,
        email,
        mobile: phone,
        address,
        password,
        role: "buyer",
      },
      withCredentials: true,
      url: "http://localhost:3000/api/user/new",
    });

    console.log(result.data);
    navigate("/emailver");
  };
  const navigate = useNavigate();

  return (
    <Grid
      container
      component="main"
      sx={{ height: "100vh" }}
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
              sx={{ mt: 4, fontWeight: "bold" }}
            >
              Sign Up
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
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                sx={{ width: "350px" }}
                id="lastname"
                label="Lastname"
                name="lastname"
                autoComplete="lastname"
                autoFocus
                onChange={(e) => setLastname(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                sx={{
                  width: "350px",
                }}
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                sx={{
                  width: "350px",
                }}
                name="email"
                label="Email"
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                sx={{ width: "350px" }}
                id="phone-number"
                label="Phone Number"
                name="phone-number"
                autoComplete="integer"
                autoFocus
                onChange={(e) => setPhone(e.target.value)}
              />
              <TextField
                margin="normal"
                onChange
                required
                sx={{ width: "350px" }}
                id="address"
                label="Address"
                name="address"
                autoComplete="address"
                autoFocus
                onChange={(e) => setAddress(e.target.value)}
              />
              {/* <Link to="/emailver"> */}
              <Button
                type="submit"
                sx={{ width: "150px", mt: 2 }}
                variant="outlined"
                // sx={{ mt: 3, mb: 2 }}
                // onClick={() => {
                // 	navigate("/emailver");
                // }}
                onClick={handleSubmit}
              >
                Sign Up
              </Button>
              {/* </Link> */}
            </Box>
          </Box>
        </div>
      </Grid>
    </Grid>
  );
}
