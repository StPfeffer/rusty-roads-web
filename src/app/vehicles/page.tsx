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
  const [selectedVehicles, setSelectedVehicles] = useState<Set<string>>(new Set());

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

  const handleDeleteSelected = async () => {
    if (confirm("Are you sure you want to delete the selected vehicles?")) {
      const deletePromises = Array.from(selectedVehicles).map(id => deleteVehicle(id));
      const responses = await Promise.all(deletePromises);

      const errors = responses.filter(response => response.error);
      if (errors.length > 0) {
        errors.forEach(error => toast.error(error.error.message));
      } else {
        toast.success('Selected vehicles deleted successfully!');
      }

      const fetchedVehicles = await fetchVehicles();
      if (fetchedVehicles.error) {
        toast.error(fetchedVehicles.error.message, { id: 'fetch-error' });
      } else {
        setVehicles(fetchedVehicles?.success?.data);
      }
      setSelectedVehicles(new Set());
    }
  };

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    const allSelected = e.target.checked;
    if (allSelected) {
      setSelectedVehicles(new Set(vehicles.map((vehicle) => vehicle.id)));
    } else {
      setSelectedVehicles(new Set());
    }
  };

  const handleSelect = (id: string) => {
    setSelectedVehicles((prev) => {
      const newSelectedVehicles = new Set(prev);
      if (newSelectedVehicles.has(id)) {
        newSelectedVehicles.delete(id);
      } else {
        newSelectedVehicles.add(id);
      }
      return newSelectedVehicles;
    });
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
        {selectedVehicles.size > 0 && (
          <button
            className="p-2.5 bg-red-500 border-none pointer rounded text-[color:var(--text)]"
            onClick={handleDeleteSelected}
          >
            Excluir {selectedVehicles.size}
          </button>
        )}
      </div>
      {isModalOpen && <ModalCreateVehicle isOpen={isModalOpen} onClose={closeModal} onSubmit={handleCreate} />}
      <table className="w-full">
        <thead className="w-full">
          <tr className="w-full">
            <th className="font-semibold p-2 text-left">
              <input type="checkbox" onChange={handleSelectAll} checked={selectedVehicles.size === vehicles.length} />
            </th>
            <th className="font-semibold p-2 text-left">Nome do carro</th>
            <th className="font-semibold p-2 text-left">KM inicial</th>
            <th className="font-semibold p-2 text-left">KM atual</th>
            <th className="font-semibold p-2 text-right">Ações</th>
          </tr>
        </thead>
        <tbody className="w-full">
          {vehicles.map((vehicle) => (
            <tr key={vehicle.id} className="w-full">
              <td className="p-2 text-left">
                <input
                  type="checkbox"
                  checked={selectedVehicles.has(vehicle.id)}
                  onChange={() => handleSelect(vehicle.id)}
                />
              </td>
              <td className="p-2 text-left">{vehicle.name}</td>
              <td className="p-2 text-left">{vehicle.initialMileage}</td>
              <td className="p-2 text-left">{vehicle.actualMileage}</td>
              <td className="p-2 text-right">
                <div className="justify-center gap-1">
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
