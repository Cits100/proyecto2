import React from "react";
import { Button, MenuItem } from "@mui/base";
import {
  AppBar,
  Avatar,
  Container,
  IconButton,
  Menu,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";

import { Box } from "@mui/system";
const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const NavBar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters></Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
