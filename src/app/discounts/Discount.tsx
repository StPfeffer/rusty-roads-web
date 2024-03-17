import Sidebar from "@/components/sidebar/Sidebar";
import { Box } from "@mui/material";
import React from "react";

const Discounts = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />

      <h1>Descontos</h1>
    </Box>
  )
}

export default Discounts;