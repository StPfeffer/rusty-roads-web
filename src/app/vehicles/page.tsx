import React from "react";

import Link from "next/link";
import { fetchVehicles } from "@/actions/vehicle/fetchVehicles";
import VehicleRow from "@/components/vehicle/VehicleRow";

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
            <VehicleRow key={vehicle.id} vehicle={vehicle} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VehiclesPage;
