"use client"

import { useState, useEffect } from "react";
import { fetchVehicles } from "@/actions/vehicle/fetchVehicles";
import ModalCreateVehicle from "@/components/vehicle/modalCreateVehicle";
import { createVehicle } from "@/actions/vehicle/createVehicle";
import { deleteVehicle } from "@/actions/vehicle/deleteVehicle";
import toast from 'react-hot-toast';
import Link from "next/link";
import SeeMoreButton from "@/components/button/SeeMoreButton";
import TrashButton from "@/components/button/TrashButton";

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

  const handleDelete = async (vehicleId: string) => {
    if (confirm("Are you sure you want to delete this vehicle?")) {
      const response = await deleteVehicle(vehicleId);

      if (response.error) {
        toast.error(response.error.message);
      } else {
        toast.success('Vehicle deleted successfully!');

        const fetchedVehicles = await fetchVehicles();

        if (fetchedVehicles.error) {
          toast.error(fetchedVehicles.error.message, { id: 'fetch-error' });
        } else {
          setVehicles(fetchedVehicles?.success?.data);
        }
      }
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
                    <SeeMoreButton />
                  </Link>
                  <TrashButton onClick={() => handleDelete(vehicle.id)} />
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
