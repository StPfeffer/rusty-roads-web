import React from "react";

import Link from "next/link";
import styles from "../../components/collaborator/collaborators.module.css";
import { fetchVehicles } from "@/actions/vehicle/fetchVehicles";
import { fetchVehicleDoc, fetchVehiclesDocs } from "@/actions/vehicle/fetchVehiclesDocuments";

const VehiclesPage = async () => {
  const vehicles = await fetchVehicles();

  return (
    <div className="bg-[color:var(--bgSoft)] p-5 mt-5 rounded-lg">
      <div className="flex justify-between items-center">
        <Link href="/vehicles/add">
          <button className="p-2.5 bg-[#5D57C9] border-none pointer rounded text-[color:var(--text)]" disabled>Adicionar</button>
        </Link>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <td className="pt-2.5 font-bold p-2">Nome do carro</td>
            <td className="pt-2.5 font-bold p-2">KM inicial</td>
            <td className="pt-2.5 font-bold p-2">KM atual</td>
            <td className="pt-2.5 font-bold p-2">Ações</td>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => (
            <tr key={vehicle.id}>
              <td className="p-2">
                <div className="flex items-center gap-2.5">
                  {vehicle.name}
                </div>
              </td>
              <td className="p-2">{vehicle.initialMileage}</td>
              <td className="p-2">{vehicle.actualMileage}</td>
              <td className="p-2">
                <div className="flex gap-2.5">
                  <Link href={`/vehicles/${vehicle.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      Ver mais
                    </button>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VehiclesPage;