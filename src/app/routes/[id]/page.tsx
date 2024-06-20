"use client";

import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import styles from "../../../components/collaborator/singleCollaborator/singleCollaborator.module.css";
import toast from 'react-hot-toast';
import { format } from 'date-fns';
import { fetchRoute } from '@/actions/route/fetchRoutes';
import { updateRoute } from '@/actions/route/updateRoute';
import { fetchDriver, fetchDrivers } from '@/actions/collaborator/fetchDrivers';
import { fetchVehicle, fetchVehicles } from '@/actions/vehicle/fetchVehicles';
import { fetchRoutesStatuses, fetchRouteStatus } from '@/actions/route/fetchRouteStatus';
import { fetchAddress } from '@/actions/location/fetchAddresses';

interface Props {
  params: {
    id: string;
  };
}

const SingleRoutePage: React.FC<Props> = ({ params }) => {
  const { id } = params;

  const [route, setRoute] = useState<Route | null>(null);
  const [isRouteModified, setIsRouteModified] = useState<boolean>(false);

  const [allDrivers, setAllDrivers] = useState<Driver[] | null>([]);
  const [allVehicles, setAllVehicles] = useState<Vehicle[] | null>([]);
  const [allStatus, setAllStatus] = useState<RouteStatus[] | null>([]);

  const [selectedDriver, setSelectedDriver] = useState<Driver | null>(null);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<RouteStatus | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const initialRoute = await fetchRoute(id);

      if (initialRoute.error) {
        toast.error(initialRoute.error.message, { id: 'fetch-route-error' });
      } else {
        const data = initialRoute.success?.data as Route;

        const routeDriver = await fetchDriver(data.driverId);
        const routeVehicle = await fetchVehicle(data.vehicleId);
        const routeStatus = await fetchRouteStatus(data.statusId);
        const initialAddress = await fetchAddress(data.initialAddressId);
        const finalAddress = await fetchAddress(data.finalAddressId);

        setSelectedDriver(routeDriver.success?.data);
        setSelectedVehicle(routeVehicle.success?.data);
        setSelectedStatus(routeStatus.success?.data);

        data.initialAddress = initialAddress.success?.data;
        data.finalAddress = finalAddress.success?.data;

        setRoute(data);

        fetchData2();
        fetchData3();
        fetchData4();
      }
    };
    fetchData();

    const fetchData2 = async () => {
      const drivers = await fetchDrivers();

      if (drivers.error) {
        toast.error(drivers.error.message, { id: 'fetch-route-error' });
      } else {
        setAllDrivers(drivers.success?.data);
      }
    };

    const fetchData3 = async () => {
      const vehicles = await fetchVehicles();

      if (vehicles.error) {
        toast.error(vehicles.error.message, { id: 'fetch-route-error' });
      } else {
        setAllVehicles(vehicles.success?.data);
      }
    };

    const fetchData4 = async () => {
      const status = await fetchRoutesStatuses();

      if (status.error) {
        toast.error(status.error.message, { id: 'fetch-route-error' });
      } else {
        setAllStatus(status.success?.data);
      }
    };
  }, [id]);

  const handleRouteChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    switch (name) {
      case 'driverId':
        const selectedDriver = allDrivers?.find(driver => driver.id === value);
        setSelectedDriver(selectedDriver ? selectedDriver : null);
        break;
      case 'vehicleId':
        const selectedVehicle = allVehicles?.find(vehicle => vehicle.id === value);
        setSelectedVehicle(selectedVehicle ? selectedVehicle : null);
        break;
      case 'statusId':
        const selectedStatus = allStatus?.find(status => status.id === value);
        setSelectedStatus(selectedStatus ? selectedStatus : null);
        break;
      default:
        break;
    }

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
      window.location.reload();
    }
  };

  const formatDate = (dateString: string) => {
    if (dateString) {
      const date = new Date(dateString);
      return format(date, 'dd/MM/yyyy HH:mm:ss');
    }

    return '';
  };

  const formatarEndereco = (address: Address) => {
    if (!address) {
      return '';
    }

    return address.address + ', ' + address.neighbourhood + ' - ' + address.city.name + ', ' + address.city.state.code;
  }

  if (!route) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div className="w-full">
        <div id="informacoes" className={styles.formContainer}>
          <form className={styles.form} onSubmit={handleRouteSubmit}>
            <input type="hidden" name="id" value={route.id} />
            <div className="flex gap-4 justify-normal">
              <div className="flex-col  w-full">
                <label>Motorista</label>
                <select className="w-full" name="driverId" value={selectedDriver?.id || ''} onChange={handleRouteChange}>
                  {selectedDriver && (
                    <option value={selectedDriver.id}>
                      {selectedDriver.name}
                    </option>
                  )}
                  {allDrivers && allDrivers
                    .filter(driver => driver.id !== selectedDriver?.id)
                    .map(driver => (
                      <option key={driver.id} value={driver.id}>
                        {driver.name}
                      </option>
                    ))}
                </select>
              </div>
              <div className="flex-col w-full">
                <label>Veículo</label>
                <select className="w-full" name="vehicleId" value={selectedVehicle?.id || ''} onChange={handleRouteChange}>
                  {selectedVehicle && (
                    <option value={selectedVehicle.id}>
                      {selectedVehicle.name}
                    </option>
                  )}
                  {allVehicles && allVehicles
                    .filter(vehicle => vehicle.id !== selectedVehicle?.id)
                    .map(vehicle => (
                      <option key={vehicle.id} value={vehicle.id}>
                        {vehicle.name}
                      </option>
                    ))}
                </select>
              </div>
              <div className="flex-col w-full">
                <label>Status da rota</label>
                <select className="w-full" name="statusId" value={selectedStatus?.id || ''} onChange={handleRouteChange}>
                  {selectedStatus && (
                    <option value={selectedStatus.id}>
                      {selectedStatus.description}
                    </option>
                  )}
                  {allStatus && allStatus
                    .filter(status => status.id !== selectedStatus?.id)
                    .map(status => (
                      <option key={status.id} value={status.id}>
                        {status.description}
                      </option>
                    ))}
                </select>
              </div>
            </div>

            <button type="submit" disabled={!isRouteModified}>Atualizar</button>
          </form>
        </div>

        <p className="h-8" />

        <div id="informaces_endereco" className={styles.formContainer}>
          <h2 className="text-2xl mb-4">Informações da Rota</h2>
          <form className={styles.form} onSubmit={handleRouteSubmit}>
            <input type="hidden" name="id" value={route.id} />
            <div className="flex gap-4 justify-normal">
              <div className="flex-col w-full">
                <label>Início</label>
                <input className="w-full" type="text" name="startedAt" value={formatDate(route.startedAt)} onChange={handleRouteChange} disabled />
              </div>
              <div className="flex-col w-full">
                <label>Fim</label>
                <input className="w-full" type="text" name="endedAt" value={formatDate(route.endedAt)} onChange={handleRouteChange} disabled />
              </div>
              <div className="flex-col w-full">
                <label>Distância percorrida</label>
                <input className="w-full" type="text" name="distance" value={(route.totalDistance / 1000).toFixed(2) + ' Km'} onChange={handleRouteChange} disabled />
              </div>
            </div>

            <div className="flex gap-4 justify-normal">
              <div className="flex-col w-full">
                <label>Latitude Inicial</label>
                <input className="w-full" type="text" name="intialLat" value={route.initialLat} onChange={handleRouteChange} disabled />
              </div>
              <div className="flex-col w-full">
                <label>Longitude Inicial</label>
                <input className="w-full" type="text" name="initialLong" value={route.initialLong} onChange={handleRouteChange} disabled />
              </div>
              <div className="flex-col w-full">
                <label>Endereço inicial</label>
                <input className="w-full" type="text" name="distance" value={formatarEndereco(route.initialAddress)} onChange={handleRouteChange} disabled />
              </div>
            </div>

            <div className="flex gap-4 justify-normal">
              <div className="flex-col w-full">
                <label>Latitude Final</label>
                <input className="w-full" type="text" name="finalLat" value={route.finalLat} onChange={handleRouteChange} disabled />
              </div>
              <div className="flex-col w-full">
                <label>Longitude Final</label>
                <input className="w-full" type="text" name="finalLong" value={route.finalLong} onChange={handleRouteChange} disabled />
              </div>
              <div className="flex-col w-full">
                <label>Endereço Final</label>
                <input className="w-full" type="text" name="finalAddressId" value={formatarEndereco(route.finalAddress)} onChange={handleRouteChange} disabled />
              </div>
            </div>
          </form>
        </div>

        <div className="mt-4 flex">
          <p className="text-slate-400">Criada em: {formatDate(route.createdAt)}</p>
          <p className="pl-4 text-slate-400">Atualizada em: {formatDate(route.updatedAt)}</p>
        </div>
      </div>
    </div>
  );
}

export default SingleRoutePage