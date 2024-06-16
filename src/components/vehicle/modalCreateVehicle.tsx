import { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (vehicleData: any) => void;
}

const ModalCreateVehicle: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [vehicleData, setVehicleData] = useState<CreateVehicleData>({
    vehicle: {
      name: '',
      initialMileage: '',
    },
    document: {
      chassisNumber: '',
      exerciseYear: '',
      modelYear: '',
      manufactureYear: '',
      registrationNumber: '',
      color: '',
      make: '',
      model: '',
      plate: '',
    }
  });

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const [section, field] = name.split('.');
    setVehicleData((prevState) => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        [field]: value,
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(vehicleData);
  };

  return (
    <div>
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
        <div className="bg-padrao3 p-4 rounded-lg w-2/5">
          <h2 className="text-3xl mb-4">Cadastro Veículo</h2>
          <form onSubmit={handleSubmit}>
            <div className='bg-padrao4 p-2 px-4 rounded-md mb-4'>
              <h3 className='text-xl mb-4'>Informações do Veículo</h3>
              <div className="mb-4">
                <label className="block text-gray-200">Nome</label>
                <input
                  type="text"
                  name="vehicle.name"
                  value={vehicleData.vehicle.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded bg-gray-200 text-black"
                  placeholder="Nome"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-200">KM Inicial</label>
                <input
                  type="vehicle.number"
                  name="vehicle.initialMileage"
                  value={vehicleData.vehicle.initialMileage}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded bg-gray-200 text-black"
                  placeholder="A partir deste KM será contabilizado"
                />
              </div>
            </div>

            <div className='bg-padrao4 p-2 px-4 rounded-md mb-4'>
              <h3 className='text-xl mb-4'>Documentos do Veículo</h3>
              <div className='flex gap-4'>
                <div className="mb-4 w-full">
                  <label className="block text-gray-200">Marca / Fabricante</label>
                  <input
                    type="text"
                    name="document.make"
                    value={vehicleData.document.make}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded bg-gray-200 text-black"
                    placeholder="Marca"
                  />
                </div>
                <div className="mb-4 w-full">
                  <label className="block text-gray-200 ">Modelo</label>
                  <input
                    type="text"
                    name="document.model"
                    value={vehicleData.document.model}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded bg-gray-200 text-black"
                    placeholder="Modelo"
                  />
                </div>
                <div className="mb-4 w-72">
                  <label className="block text-gray-200 ">Ano modelo</label>
                  <input
                    type="text"
                    name="document.modelYear"
                    value={vehicleData.document.modelYear}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded bg-gray-200 text-black"
                    placeholder="Ano"
                  />
                </div>
              </div>

              <div className='flex gap-4'>
                <div className="mb-4 w-full">
                  <label className="block text-gray-200">Número de Registro</label>
                  <input
                    type="text"
                    name="document.registrationNumber"
                    value={vehicleData.document.registrationNumber}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded bg-gray-200 text-black"
                    placeholder="Número"
                  />
                </div>
                <div className="mb-4 w-full">
                  <label className="block text-gray-200 ">Número do Registro</label>
                  <input
                    type="text"
                    name="document.chassisNumber"
                    value={vehicleData.document.chassisNumber}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded bg-gray-200 text-black"
                    placeholder="Chassi"
                  />
                </div>
              </div>

              <div className='flex gap-4'>
                <div className="mb-4 w-60">
                  <label className="block text-gray-200 ">Ano de Exercício</label>
                  <input
                    type="text"
                    name="document.exerciseYear"
                    value={vehicleData.document.exerciseYear}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded bg-gray-200 text-black"
                    placeholder="Ano"
                  />
                </div>
                <div className="mb-4 w-60">
                  <label className="block text-gray-200 ">Ano de Fabricação</label>
                  <input
                    type="text"
                    name="document.manufactureYear"
                    value={vehicleData.document.manufactureYear}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded bg-gray-200 text-black"
                    placeholder="Ano"
                  />
                </div>
                <div className="mb-4 w-60">
                  <label className="block text-gray-200 ">Placa</label>
                  <input
                    type="text"
                    name="document.plate"
                    value={vehicleData.document.plate}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded bg-gray-200 text-black"
                    placeholder="Placa"
                  />
                </div>
                <div className="mb-4 w-60">
                  <label className="block text-gray-200 ">Cor</label>
                  <input
                    type="text"
                    name="document.color"
                    value={vehicleData.document.color}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded bg-gray-200 text-black"
                    placeholder="Cor"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                onClick={onClose} // Close modal on click
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalCreateVehicle;