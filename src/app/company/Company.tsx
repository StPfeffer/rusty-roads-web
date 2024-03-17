'use client';

import React, { useState, useEffect } from "react";
import { CompanyService } from "@/services/CompanyService";

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
    <div>
      <h1>Empresa</h1>
      {company && (
        <div>
          <h2>{company.nomeFantasia}</h2>
          <p>{company.razaoSocial}</p>
        </div>
      )}
    </div>
  );
}

export default Company;