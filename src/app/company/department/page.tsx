"use client";

import React, { useState, useEffect } from "react";
import { DepartmentService } from "@/services/DepartmentService";

const Department = () => {
  const [departments, setDepartments] = useState<Departamento[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const departmentService = new DepartmentService();

      try {
        const response = await departmentService.get();

        setDepartments(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Departamentos</h1>
      {departments.map(department => (
        <div>
          <h2>{department.nome}</h2>
          <p>{department.descricao}</p>
        </div>
      ))}
    </div>
  );
}

export default Department;