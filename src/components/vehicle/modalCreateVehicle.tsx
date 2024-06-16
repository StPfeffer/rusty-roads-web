import React, { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return(
    <div>
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
            <div className="bg-padrao3 p-4 rounded-lg w-2/5">
            <h2 className="text-3xl mb-4">Cadastro Veículo</h2>
            <form>
                <div className='bg-padrao4 p-2 px-4 rounded-md mb-4'>
                <h3 className='text-xl mb-4'>Informações do Veículo</h3>
                <div className="mb-4">
                    <label className="block text-gray-200">Nome</label>
                    <input
                    type="text"
                    className="w-full px-3 py-2 border rounded bg-gray-200 text-black"
                    placeholder="Nome"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-200">KM Inicial</label>
                    <input
                    type="email"
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
                        className="w-full px-3 py-2 border rounded bg-gray-200 text-black"
                        placeholder="Marca"
                    />
                    </div>
                    <div className="mb-4 w-full">
                    <label className="block text-gray-200 ">Modelo</label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border rounded bg-gray-200 text-black"
                        placeholder="Modelo"
                    />
                    </div>
                    <div className="mb-4 w-72">
                    <label className="block text-gray-200 ">Ano modelo</label>
                    <input
                        type="email"
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
                        className="w-full px-3 py-2 border rounded bg-gray-200 text-black"
                        placeholder="Número"
                    />
                    </div>
                    <div className="mb-4 w-full">
                    <label className="block text-gray-200 ">Número do Registro</label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border rounded bg-gray-200 text-black"
                        placeholder="Chassi"
                    />
                    </div>
                </div>

                <div className='flex gap-4'>

                    <div className="mb-4 w-60">
                    <label className="block text-gray-200 ">Ano de Exercício</label>
                    <input
                        type="email"
                        className="w-full px-3 py-2 border rounded bg-gray-200 text-black"
                        placeholder="Ano"
                    />
                    </div>
                    <div className="mb-4 w-60">
                    <label className="block text-gray-200 ">Ano de Fabricação</label>
                    <input
                        type="email"
                        className="w-full px-3 py-2 border rounded bg-gray-200 text-black"
                        placeholder="Ano"
                    />
                    </div>
                    <div className="mb-4 w-60">
                    <label className="block text-gray-200 ">Placa</label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border rounded bg-gray-200 text-black"
                        placeholder="Placa"
                    />
                    </div>
                    <div className="mb-4 w-60">
                    <label className="block text-gray-200 ">Cor</label>
                    <input
                        type="text"
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
  )
}

export default Modal;