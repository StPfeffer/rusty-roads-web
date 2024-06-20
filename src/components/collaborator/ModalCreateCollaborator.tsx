import { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (vehicleData: any) => void;
}

const ModalCreateCollaborator: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [collaboratorData, setCollaboratorData] = useState<CreateCollaboratorData>({
    collaborator: {
      name: '',
      cpf: '',
      rg: '',
      email: '',
    },
    driver: {
      cnh_number: '',
      cnh_expiration_date: '',
      id_cnh_type: '',
    }
  });

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const [section, field] = name.split('.');
    setCollaboratorData((prevState) => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        [field]: value,
      },
    }));
  };

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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
                    name="driver.cnh_number"
                    value={collaboratorData.driver.cnh_number}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded bg-gray-200 text-black"
                    placeholder="Número da CNH"
                  />
                </div>
                <div className="mb-4 w-full">
                  <label className="block text-gray-200 ">Expiração CNH</label>
                  <input
                    type="text"
                    name="driver.cnh_expiration_date"
                    value={collaboratorData.driver.cnh_expiration_date}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded bg-gray-200 text-black"
                    placeholder="Data de expiração da CNH"
                  />
                </div>
                <div className="mb-4 w-72">
                  <label className="block text-gray-200 ">Tipo CNH</label>
                  <input
                    type="text"
                    name="driver.id_cnh_type"
                    value={collaboratorData.driver.id_cnh_type}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded bg-gray-200 text-black"
                    placeholder="Tipo da CNH"
                  />
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