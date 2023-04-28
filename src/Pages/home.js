import { Box, Container } from "@mui/system";
import React from "react";

const Home = () => {
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
      ></Box>
    </Container>
  );
};

export default Home;
