import Sidebar from "@/components/sidebar/Sidebar";
import { Box } from "@mui/material";
import React from "react";

const Payroll = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />

      <h1>Folha de Pagamento</h1>
    </Box>
  )
}

export default Payroll;