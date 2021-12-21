import React, { useState } from "react";
import "./Login.css";
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
import Axios from "axios";

export default function LoginSide() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const result = await Axios({
      method: "POST",
      data: {
        email,
        password,
      },
      withCredentials: true,
      url: "http://localhost:3000/api/user/login",
    });
    console.log("Result data: ", result.data);
    window.sessionStorage.setItem("user", result.data.token);
    console.log("Window storage rn: ", window.sessionStorage.getItem("user"));
    navigate("/selection");
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
              Login
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
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              {/* <Link to="/selection" > */}
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                sx={{ mt: 3, mb: 2 }}
                // onClick={() => {
                //   navigate("/selection");
                // }}
                onClick={handleSubmit}
              >
                SIGN IN
              </Button>
              {/* </Link> */}
              <Divider></Divider>
              <h4>Don't have an account? </h4>
              <Link to="/signup" className="title">
                {" "}
                SIGN UP{" "}
              </Link>
            </Box>
          </Box>
        </div>
      </Grid>
    </Grid>
  );
}
