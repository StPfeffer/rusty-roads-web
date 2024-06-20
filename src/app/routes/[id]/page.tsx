"use client";

import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import styles from "../../../components/collaborator/singleCollaborator/singleCollaborator.module.css";
import toast from 'react-hot-toast';
import { format } from 'date-fns';
import { fetchRoute } from '@/actions/route/fetchRoutes';
import { updateRoute } from '@/actions/route/updateRoute';
import { fetchDriver } from '@/actions/collaborator/fetchDrivers';

interface Props {
  params: {
    id: string;
  };
}

const SingleRoutePage: React.FC<Props> = ({ params }) => {
  const { id } = params;

  const [route, setRoute] = useState<Route | null>(null);
  const [routeStatus, setRouteStatus] = useState<RouteStatus | null>(null);
  const [isRouteModified, setIsRouteModified] = useState<boolean>(false);
  const [isRouteStatusModified, setIsRouteStatusModified] = useState<boolean>(false);

  const driverRoute = useState<>

  useEffect(() => {
    const fetchData = async () => {
      const initialRoute = await fetchRoute(id);

      if (initialRoute.error) {
        toast.error(initialRoute.error.message, { id: 'fetch-route-error' });
      } else {
        setRoute(initialRoute.success?.data);
      }
    };
    fetchData();
  }, [id]);

  const handleRouteChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRoute((prevRoute) => ({
      ...prevRoute!,
      [name]: value,
    }));
    setIsRouteModified(true);
  };

  const handleRouteSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await updateRoute(id, route!);

    if (response.error) {
      toast.error(response.error.message, { id: 'update-route-error' });
    } else {
      setIsRouteModified(false);
      toast.success('Route updated successfully!');
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return format(date, 'dd/MM/yyyy HH:mm:ss');
  };

  if (!route) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div className="w-full">
        <div id="informacoes" className={styles.formContainer}>
          <form className={styles.form} onSubmit={handleRouteSubmit}>
            <input type="hidden" name="id" value={route.id} />
            <div className="flex justify-between">
              <div className="flex-col w-1/3">
                <label>Data / hora de início</label>
                <input className="w-full" type="text" name="name" value={route.startedAt} onChange={handleRouteChange} disabled/>
              </div>
              <div className="flex-col w-1/3">
                <label>Data / hora de chegada</label>
                <input className="w-full" type="text" name="actualMileage" value={route.endedAt} onChange={handleRouteChange} disabled />
              </div>
              <div className="flex-col w-1/4">
                <label>Distância percorrida</label>
                <input className="w-full" type="text" name="initialMileage" value={route.totalDistance} onChange={handleRouteChange} disabled />
              </div>
            </div>

            <div className="flex justify-between">
              <div className="flex-col">
                <label>Motorista</label>
                <input className="w-full" type="text" name="initialMileage" value={route.driverId} onChange={handleRouteChange}  />              
              </div>
              <div className="flex-col">
                <label>Veículo</label>
                <input className="w-full" type="text" name="initialMileage" value={route.vehicleId} onChange={handleRouteChange}  />
              </div>
              <div className="flex-col">
                <label>Status da rota</label>
                <input className="w-full" type="text" name="initialMileage" value={route.statusId} onChange={handleRouteChange} />          
              </div>
            </div>

            <button type="submit" disabled={!isRouteModified}>Atualizar</button>
          </form>
        </div>
{/* 
        <p className="h-8" />

        {vehicleDoc && <div id="documentos" className={styles.formContainer}>
          <h2 className="text-2xl mb-4">Documentos do Veículo</h2>
          <form className={styles.form} onSubmit={handleVehicleDocSubmit}>
            <input type="hidden" name="id" value={vehicleDoc.id} />
            <div className="flex justify-between">
              <div className="flex-col w-60">
                <label>Número de registro</label>
                <input className="w-full" type="text" name="registrationNumber" value={vehicleDoc.registrationNumber} onChange={handleVehicleDocChange} />
              </div>
              <div className="flex-col w-[22rem]">
                <label>Número do Chassi</label>
                <input className="w-full" type="text" name="chassisNumber" value={vehicleDoc.chassisNumber} onChange={handleVehicleDocChange} />
              </div>
              <div className="flex-col w-40">
                <label>Ano de exercício</label>
                <input className="w-full" type="number" name="exerciseYear" value={vehicleDoc.exerciseYear} onChange={handleVehicleDocChange} />
              </div>
              <div className="flex-col w-40">
                <label>Ano de Fabricação</label>
                <input className="w-full" type="number" name="manufactureYear" value={vehicleDoc.manufactureYear} onChange={handleVehicleDocChange} />
              </div>
            </div>

            <div className="mt-2 flex justify-between">
              <div className="flex-col w-60">
                <label>Marca / Fabricante</label>
                <input className="w-full" type="text" name="make" value={vehicleDoc.make} onChange={handleVehicleDocChange} />
              </div>
              <div className="flex-col w-40">
                <label>Modelo</label>
                <input className="w-full" type="text" name="model" value={vehicleDoc.model} onChange={handleVehicleDocChange} />
              </div>
              <div className="flex-col w-40">
                <label>Ano do modelo</label>
                <input className="w-full" type="number" name="modelYear" value={vehicleDoc.modelYear} onChange={handleVehicleDocChange} />
              </div>
              <div className="flex-col w-40">
                <label>Cor</label>
                <input className="w-full" type="text" name="color" value={vehicleDoc.color} onChange={handleVehicleDocChange} />
              </div>
              <div className="flex-col w-40">
                <label>Placa</label>
                <input className="w-full" type="text" name="plate" value={vehicleDoc.plate} onChange={handleVehicleDocChange} />
              </div>
            </div>
            <button type="submit" disabled={!isVehicleDocModified}>Atualizar</button>
          </form>
        </div>} */}

        <div className="mt-4 flex">
          {/* <p className="text-slate-400">Criado em: {formatDate(route.created_at)}</p>
          <p className="pl-4 text-slate-400">Veículo atualizado em: {formatDate(route.updated_at)}</p> */}
        </div>
      </div>
    </div>
  );
}

export default SingleRoutePage