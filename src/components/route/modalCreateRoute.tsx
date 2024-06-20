import { fetchDrivers } from "@/actions/collaborator/fetchDrivers";
import { fetchVehicles } from "@/actions/vehicle/fetchVehicles";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (routeData: any) => void;
}

const ModalCreateRoute: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [allDrivers, setAllDrivers] = useState<Driver[] | null>([]);
  const [allVehicles, setAllVehicles] = useState<Vehicle[] | null>([]);

  const [routeData, setRouteData] = useState<CreateRouteData>({
    route: {
      driver_id: '',
      vehicle_id: '',
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const [section, field] = name.split('.');
    setRouteData((prevState) => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        [field]: value,
      },
    }));
  };

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

                {/* <select id="mySelect" className="w-full px-3 py-2 border rounded bg-gray-200 text-black">
                  <option value="1">Opção 1</option>
                  <option value="2">Opção 2</option>
                  <option value="3">Opção 3</option>
                </select>    */}

                <input
                  type="select"
                  name="route.vehicle_id"
                  value={routeData.route.vehicle_id}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded bg-gray-200 text-black"
                  placeholder="Nome do veículo"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-200">Motorista</label>

                <select className="w-full" name="driverId" value=''>
                  {allDrivers && allDrivers.map((thisDriver) => (
                      <option key={thisDriver.id} value={thisDriver.id}>
                        {thisDriver.name}
                      </option>
                    ))}
                </select>

                <input
                  type="number"
                  name="collaborator.cpf"
                  value={routeData.route.driver_id}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded bg-gray-200 text-black"
                  placeholder="Nome do Motorista"
                />
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