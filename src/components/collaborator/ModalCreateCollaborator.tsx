import { fetchCnhTypes } from "@/actions/collaborator/fetchCnhType";
import { ChangeEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (vehicleData: any) => void;
}

const ModalCreateCollaborator: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [allCnhTypes, setAllCnhTypes] = useState<CnhType[] | null>([]);
  const [selectedCnhType, setSelectedCnhType] = useState<CnhType | null>(null);

  const [collaboratorData, setCollaboratorData] = useState<CreateCollaboratorData>({
    collaborator: {
      name: '',
      cpf: '',
      rg: '',
      email: '',
    },
    driver: {
      cnhNumber: '',
      cnhExpirationDate: '',
      idCnhType: '',
      collaboratorId: ''
    }
  });

  useEffect(() => {
    const fetchCnhTypes2 = async () => {
      const cnhTypes = await fetchCnhTypes();

      if (cnhTypes.error) {
        toast.error(cnhTypes.error.message, { id: 'fetch-route-error' });
      } else {
        setAllCnhTypes(cnhTypes.success?.data);
      }
    };
    fetchCnhTypes2();
  }, []);

  if (!isOpen) return null;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    console.log(name);
    console.log(value);

    switch (name) {
      case 'driver.idCnhType':
        console.log("aqui");
        const selectedCnhType = allCnhTypes?.find(cnhType => cnhType.id === value);
        setSelectedCnhType(selectedCnhType ? selectedCnhType : null);
        break;
      default:
        break;
    }
    const [section, field] = name.split('.');
    setCollaboratorData((prevState) => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        [field]: value,
      },
    }));
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(collaboratorData);
  };

  return (
    <div>
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
        <div className="bg-padrao3 p-4 rounded-lg w-2/5">
          <h2 className="text-3xl mb-4">Cadastro Colaborador</h2>
          <form onSubmit={handleSubmit}>
            <div className='bg-padrao4 p-2 px-4 rounded-md mb-4'>
              <h3 className='text-xl mb-4'>Informações do Colaborador</h3>
              <div className="mb-4">
                <label className="block text-gray-200">Nome</label>
                <input
                  type="text"
                  name="collaborator.name"
                  value={collaboratorData.collaborator.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded bg-gray-200 text-black"
                  placeholder="Nome"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-200">CPF</label>
                <input
                  type="number"
                  name="collaborator.cpf"
                  value={collaboratorData.collaborator.cpf}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded bg-gray-200 text-black"
                  placeholder="O CPF do colaborador"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-200">RG</label>
                <input
                  type="number"
                  name="collaborator.rg"
                  value={collaboratorData.collaborator.rg}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded bg-gray-200 text-black"
                  placeholder="O RG do colaborador"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-200">Email</label>
                <input
                  type="email"
                  name="collaborator.email"
                  value={collaboratorData.collaborator.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded bg-gray-200 text-black"
                  placeholder="O email do colaborador"
                />
              </div>
            </div>

            <div className='bg-padrao4 p-2 px-4 rounded-md mb-4'>
              <h3 className='text-xl mb-4'>Informações de Motorista</h3>
              <div className='flex gap-4'>
                <div className="mb-4 w-full">
                  <label className="block text-gray-200">Número da CNH</label>
                  <input
                    type="text"
                    name="driver.cnhNumber"
                    value={collaboratorData.driver.cnhNumber}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded bg-gray-200 text-black"
                    placeholder="Número da CNH"
                  />
                </div>
                <div className="mb-4 w-full">
                  <label className="block text-gray-200 ">Expiração CNH</label>
                  <input
                    type="text"
                    name="driver.cnhExpirationDate"
                    value={collaboratorData.driver.cnhExpirationDate}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded bg-gray-200 text-black"
                    placeholder="Data de expiração da CNH"
                  />
                </div>
                <div className="mb-4 w-72">
                  <label className="block text-gray-200 ">Tipo CNH</label>
                  <select className="w-full px-3 py-2 border rounded bg-gray-200 text-black" name="driver.idCnhType" value={selectedCnhType?.id || ''} onChange={handleChange}>
                    {selectedCnhType && (
                      <option value={selectedCnhType.id}>
                        {selectedCnhType.description}
                      </option>
                    )}
                    {allCnhTypes && allCnhTypes
                      .filter(cnhType => cnhType.id !== selectedCnhType?.id)
                      .map((cnhType) => (
                        <option key={cnhType.id} value={cnhType.id}>
                          {cnhType.description}
                        </option>
                      ))}
                  </select>
                </div>
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
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalCreateCollaborator;