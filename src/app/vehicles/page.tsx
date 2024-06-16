"use client"

import { useState, useEffect } from "react";
import { fetchVehicles } from "@/actions/vehicle/fetchVehicles";
import VehicleRow from "@/components/vehicle/VehicleRow";
import ModalCreateVehicle from "@/components/vehicle/modalCreateVehicle";
import { createVehicle } from "@/actions/vehicle/createVehicle";
import { toast } from 'react-hot-toast';

const VehiclesPage = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedVehicles = await fetchVehicles();

      if (fetchedVehicles.error) {
        toast.error(fetchedVehicles.error.message, { id: 'fetch-error' });
      } else {
        setVehicles(fetchedVehicles?.success?.data);
      }
    };

    fetchData();
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleCreate = async (vehicleData: CreateVehicleData) => {
    const createVehicleResponse = await createVehicle(vehicleData);

    if (createVehicleResponse.error) {
      toast.error(createVehicleResponse.error.message, { id: 'create-error' });
    } else {
      toast.success("Vehicle created successfully");
    }

    closeModal();
    const fetchVehiclesResponse = await fetchVehicles();

    if (fetchVehiclesResponse.error) {
      toast.error(fetchVehiclesResponse.error.message, { id: 'fetch-error' });
      setVehicles(fetchVehiclesResponse.error.data);
    } else {
      setVehicles(fetchVehiclesResponse?.success?.data);
    }
  };

  return (
    <div className="bg-[color:var(--bgSoft)] p-5 mt-5 rounded-lg">
      <div className="flex justify-between items-center">
        <button
          className="p-2.5 bg-[#5D57C9] border-none pointer rounded text-[color:var(--text)]"
          onClick={openModal}
        >
          Adicionar
        </button>
      </div>
      {isModalOpen && <ModalCreateVehicle isOpen={isModalOpen} onClose={closeModal} onSubmit={handleCreate} />}
      <table className="w-full">
        <thead>
          <tr>
            <th className="pt-2.5 font-semibold p-2">Nome do carro</th>
            <th className="pt-2.5 font-semibold p-2">KM inicial</th>
            <th className="pt-2.5 font-semibold p-2">KM atual</th>
            <th className="pt-2.5 font-semibold p-2">Ações</th>
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
