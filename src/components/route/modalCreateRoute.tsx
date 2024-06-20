import { fetchDrivers } from "@/actions/collaborator/fetchDrivers";
import { fetchVehicles } from "@/actions/vehicle/fetchVehicles";
import { ChangeEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (routeData: any) => void;
}

const ModalCreateRoute: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [allDrivers, setAllDrivers] = useState<Driver[] | null>([]);
  const [allVehicles, setAllVehicles] = useState<Vehicle[] | null>([]);

  const [selectedDriver, setSelectedDriver] = useState<Driver | null>(null);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  const [routeData, setRouteData] = useState<CreateRouteData>({
    route: {
      driverId: '',
      vehicleId: '',
    }
  });

  useEffect(() => {
    const fetchDataDrivers = async () => {
      const drivers = await fetchDrivers();

      if (drivers.error) {
        toast.error(drivers.error.message, { id: 'fetch-route-error' });
      } else {
        setAllDrivers(drivers.success?.data);
      }
    };
    fetchDataDrivers();

    const fetchDataVehicles = async () => {
      const vehicles = await fetchVehicles();

      if (vehicles.error) {
        toast.error(vehicles.error.message, { id: 'fetch-route-error' });
      } else {
        setAllVehicles(vehicles.success?.data);
      }
    };
    fetchDataVehicles();
  },[]);

  if (!isOpen) return null;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
      console.log(name);  
    switch (name) {
      case 'route.driverId':
        const selectedDriver = allDrivers?.find(driver => driver.id === value);
        console.log(selectedDriver);
        setSelectedDriver(selectedDriver ? selectedDriver : null);
        break;
      case 'route.vehicleId':
        const selectedVehicle = allVehicles?.find(vehicle => vehicle.id === value);
        setSelectedVehicle(selectedVehicle ? selectedVehicle : null);
        break;
      default:
        break;
    }

    const [section, field] = name.split('.');
    setRouteData((prevState) => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        [field]: value,
      },
    }));
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(routeData);
  };

  return (
    <div>
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
        <div className="bg-padrao3 p-4 rounded-lg w-2/5">
          <h2 className="text-3xl mb-4">Cadastro Rota</h2>
          <form onSubmit={handleSubmit}>
            <div className='bg-padrao4 p-2 px-4 rounded-md mb-4'>
              <h3 className='text-xl mb-4'>Informações da Rota</h3>
              <div className="mb-4">
                <label className="block text-gray-200">Veículo</label>

                <select className="w-full px-3 py-2 border rounded bg-gray-200 text-black"  name="route.vehicleId" value={selectedVehicle?.id || ''} onChange={handleChange}>
                  {selectedVehicle && (
                    <option value={selectedVehicle.id}>
                      {selectedVehicle.name}
                    </option>
                  )}
                  {allVehicles && allVehicles
                    .filter(vehicle => vehicle.id !== selectedVehicle?.id)
                    .map((vehicle) => (
                      <option key={vehicle.id} value={vehicle.id}>
                        {vehicle.name}
                      </option>
                    ))}
                </select> 
              </div>
              <div className="mb-4">
                <label className="block text-gray-200">Motorista</label>

                <select className="w-full px-3 py-2 border rounded bg-gray-200 text-black"  name="route.driverId" value={selectedDriver?.id || ''} onChange={handleChange}>
                  {selectedDriver && (
                    <option value={selectedDriver.id}>
                      {selectedDriver.name}
                    </option>
                  )}
                  {allDrivers && allDrivers
                    .filter(driver => driver.id !== selectedDriver?.id)
                    .map((driver) => (
                      <option key={driver.id} value={driver.id}>
                        {driver.name}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                onClick={onClose}
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Gerar rota aleatória
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalCreateRoute;