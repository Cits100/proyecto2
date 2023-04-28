import {
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../assets/img/login.svg";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    // event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });
    navigate("/auth/home");
  };

  return (
    <Container component="main" maxWidth="m">
      <Box
        sx={{
          backgroundColor: "primary.light",
          boxShadow: 4,
          borderRadius: 2,
          px: 4,
          py: 6,
          marginTop: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignContent: "left",
            maxWidth: 400,
          }}
        >
          <img className="form-img-2" src={loginImg}></img>
        </Box>
        <Divider orientation="vertical" variant="middle" flexItem></Divider>
        <Typography component="h1" variant="h4">
          Ingresar
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email "
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="success" />}
            label=""
          /> */}
          <Button
            color="secondary"
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
