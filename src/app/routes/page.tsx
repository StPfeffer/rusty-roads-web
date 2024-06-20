"use client"

import { deleteRoute } from '@/actions/route/deleteRoute';
import { fetchRoute, fetchRoutes } from '@/actions/route/fetchRoutes';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { Route } from '@mui/icons-material';
import Link from 'next/link';
import SeeMoreButton from '@/components/button/SeeMoreButton';
import TrashButton from '@/components/button/TrashButton';
import { createRoute } from '@/actions/route/createRoute';
import ModalCreateRoute from '@/components/route/ModalCreateRoute';

const RoutesPage = () => {
  const [routes, setRoutes] = useState<Route[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRoutes, setSelectedRoutes] = useState<Set<string>>(new Set());
  
  useEffect(() => {
    const fetchData = async () => {
      const fetchedRoutes = await fetchRoutes();

      if (fetchedRoutes.error) {
        toast.error(fetchedRoutes.error.message, { id: 'fetch-error' });
      } else {
        setRoutes(fetchedRoutes?.success?.data);
      }
    };

    fetchData();
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleCreate = async (routeData: CreateRouteData) => {
    const createVehicleResponse = await createRoute(routeData);

    if (createVehicleResponse.error) {
      toast.error(createVehicleResponse.error.message, { id: 'create-error' });
    } else {
      toast.success("Route created successfully");
    }

    closeModal();
    const fetchRoutesResponse = await fetchRoutes();

    if (fetchRoutesResponse.error) {
      toast.error(fetchRoutesResponse.error.message, { id: 'fetch-error' });
      setRoutes(fetchRoutesResponse.error.data);
    } else {
      setRoutes(fetchRoutesResponse?.success?.data);
    }
  };

  const handleDelete = async (routeId: string) => {
    if (confirm("Are you sure you want to delete this route?")) {
      const response = await deleteRoute(routeId);

      if (response.error) {
        toast.error(response.error.message);
      } else {
        toast.success('Route deleted successfully!');

        const fetchedRoutes = await fetchRoutes();

        if (fetchedRoutes.error) {
          toast.error(fetchedRoutes.error.message, { id: 'fetch-error' });
        } else {
          setRoutes(fetchedRoutes?.success?.data);
        }
      }
    }
  };

  const handleDeleteSelected = async () => {
    if (confirm("Are you sure you want to delete the selected routes?")) {
      const deletePromises = Array.from(selectedRoutes).map(id => deleteRoute(id));
      const responses = await Promise.all(deletePromises);

      const errors = responses.filter(response => response.error);
      if (errors.length > 0) {
        errors.forEach(error => toast.error(error.error.message));
      } else {
        toast.success('Selected routes deleted successfully!');
      }

      const fetchedRoutes = await fetchRoutes();
      if (fetchedRoutes.error) {
        toast.error(fetchedRoutes.error.message, { id: 'fetch-error' });
      } else {
        setRoutes(fetchedRoutes?.success?.data);
      }
      setSelectedRoutes(new Set());
    }
  };

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    const allSelected = e.target.checked;
    if (allSelected) {
      setSelectedRoutes(new Set(routes.map((route) => route.id)));
    } else {
      setSelectedRoutes(new Set());
    }
  };

  const handleSelect = (id: string) => {
    setSelectedRoutes((prev) => {
      const newSelectedRoutes = new Set(prev);
      if (newSelectedRoutes.has(id)) {
        newSelectedRoutes.delete(id);
      } else {
        newSelectedRoutes.add(id);
      }
      return newSelectedRoutes;
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
        {selectedRoutes.size > 0 && (
          <button
            className="p-2.5 bg-red-500 border-none pointer rounded text-[color:var(--text)]"
            onClick={handleDeleteSelected}
          >
            Excluir {selectedRoutes.size}
          </button>
        )}
      </div>
      {isModalOpen && <ModalCreateRoute isOpen={isModalOpen} onClose={closeModal} onSubmit={handleCreate} />}
      <table className="w-full">
        <thead className="w-full">
          <tr className="w-full">
            <th className="font-semibold p-2 text-left">
              <input type="checkbox" onChange={handleSelectAll} checked={selectedRoutes.size === routes.length} />
            </th>
            <th className="font-semibold p-2 text-left">Início da rota</th>
            <th className="font-semibold p-2 text-left">Final da rota</th>
            <th className="font-semibold p-2 text-left">Total de KMs</th>
            <th className="font-semibold p-2 text-right">Ações</th>
          </tr>
        </thead>
        <tbody className="w-full">
          {routes.map((route) => (
            <tr key={route.id} className="w-full">
              <td className="p-2 text-left">
                <input
                  type="checkbox"
                  checked={selectedRoutes.has(route.id)}
                  onChange={() => handleSelect(route.id)}
                />
              </td>
              <td className="p-2 text-left">{route.startedAt}</td>
              <td className="p-2 text-left">{route.endedAt}</td>
              <td className="p-2 text-left">{(route.totalDistance / 1000).toFixed(2)} kms</td>
              <td className="p-2 text-right">
                <div className="justify-center gap-1">
                  <Link href={`/routes/${route.id}`}>
                    <SeeMoreButton />
                  </Link>
                  <TrashButton onClick={() => handleDelete(route.id)} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RoutesPage