'use client';

import React, { useState, useEffect } from "react";
import { CompanyService } from "@/services/CompanyService";
import Sidebar from "@/components/sidebar/Sidebar";
import { Box, CssBaseline } from "@mui/material";

const Company = () => {
  const [company, setCompany] = useState<CompanyType>();

  useEffect(() => {
    const fetchData = async () => {
      const companyService = new CompanyService();

      try {
        const response = await companyService.get();

        setCompany(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />

      <div>
        <h1>Empresa</h1>
        {company && (
          <div>
            <h2>{company.nomeFantasia}</h2>
            <p>{company.razaoSocial}</p>
          </div>
        )}
      </div>
    </Box>
  );
}

export default Company;