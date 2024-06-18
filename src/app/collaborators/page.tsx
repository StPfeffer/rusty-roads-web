"use client"

import { useState, useEffect } from "react";
import toast from 'react-hot-toast';
import Link from "next/link";
import SeeMoreButton from "@/components/button/SeeMoreButton";
import TrashButton from "@/components/button/TrashButton";
import { fetchCollaborators } from "@/actions/collaborator/fetchCollaborators";
import { createCollaborator } from "@/actions/collaborator/createCollaborator";
import { deleteCollaborator } from "@/actions/collaborator/deleteCollaborator";
import ModalCreateCollaborator from "@/components/collaborator/ModalCreateCollaborator";

const CollaboratorsPage = () => {
  const [collaborators, setCollaborators] = useState<Collaborator[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCollaborators, setSelectedCollaborators] = useState<Set<string>>(new Set());

  useEffect(() => {
    const fetchData = async () => {
      const fetchedCollaborators = await fetchCollaborators();

      if (fetchedCollaborators.error) {
        toast.error(fetchedCollaborators.error.message, { id: 'fetch-error' });
      } else {
        setCollaborators(fetchedCollaborators?.success?.data);
      }
    };

    fetchData();
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleCreate = async (collaboratorData: CreateCollaboratorData) => {
    const createCollaboratorResponse = await createCollaborator(collaboratorData);

    if (createCollaboratorResponse.error) {
      toast.error(createCollaboratorResponse.error.message, { id: 'create-error' });
    } else {
      toast.success("Collaborator created successfully");
    }

    closeModal();
    const fetchCollaboratorsResponse = await fetchCollaborators();

    if (fetchCollaboratorsResponse.error) {
      toast.error(fetchCollaboratorsResponse.error.message, { id: 'fetch-error' });
      setCollaborators(fetchCollaboratorsResponse.error.data);
    } else {
      setCollaborators(fetchCollaboratorsResponse?.success?.data);
    }
  };

  const handleDelete = async (collaboratorId: string) => {
    if (confirm("Are you sure you want to delete this collaborator?")) {
      const response = await deleteCollaborator(collaboratorId);

      if (response.error) {
        toast.error(response.error.message);
      } else {
        toast.success('Collaborator deleted successfully!');

        const fetchedCollaborators = await fetchCollaborators();

        if (fetchedCollaborators.error) {
          toast.error(fetchedCollaborators.error.message, { id: 'fetch-error' });
        } else {
          setCollaborators(fetchedCollaborators?.success?.data);
        }
      }
    }
  };

  const handleDeleteSelected = async () => {
    if (confirm("Are you sure you want to delete the selected collaborators?")) {
      const deletePromises = Array.from(selectedCollaborators).map(id => deleteCollaborator(id));
      const responses = await Promise.all(deletePromises);

      const errors = responses.filter(response => response.error);
      if (errors.length > 0) {
        errors.forEach(error => toast.error(error.error.message));
      } else {
        toast.success('Selected collaborators deleted successfully!');
      }

      const fetchedCollaborators = await fetchCollaborators();
      if (fetchedCollaborators.error) {
        toast.error(fetchedCollaborators.error.message, { id: 'fetch-error' });
      } else {
        setCollaborators(fetchedCollaborators?.success?.data);
      }
      setSelectedCollaborators(new Set());
    }
  };

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    const allSelected = e.target.checked;
    if (allSelected) {
      setSelectedCollaborators(new Set(collaborators.map((vehicle) => vehicle.id)));
    } else {
      setSelectedCollaborators(new Set());
    }
  };

  const handleSelect = (id: string) => {
    setSelectedCollaborators((prev) => {
      const newSelectedCollaborators = new Set(prev);
      if (newSelectedCollaborators.has(id)) {
        newSelectedCollaborators.delete(id);
      } else {
        newSelectedCollaborators.add(id);
      }
      return newSelectedCollaborators;
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
        {selectedCollaborators.size > 0 && (
          <button
            className="p-2.5 bg-red-500 border-none pointer rounded text-[color:var(--text)]"
            onClick={handleDeleteSelected}
          >
            Excluir {selectedCollaborators.size}
          </button>
        )}
      </div>
      {isModalOpen && <ModalCreateCollaborator isOpen={isModalOpen} onClose={closeModal} onSubmit={handleCreate} />}
      <table className="w-full">
        <thead className="w-full">
          <tr className="w-full">
            <th className="font-semibold p-2 text-left">
              <input type="checkbox" onChange={handleSelectAll} checked={selectedCollaborators.size === collaborators.length} />
            </th>
            <th className="font-semibold p-2 text-left">Nome</th>
            <th className="font-semibold p-2 text-left">CPF</th>
            <th className="font-semibold p-2 text-left">Email</th>
            <th className="font-semibold p-2 text-right">Ações</th>
          </tr>
        </thead>
        <tbody className="w-full">
          {collaborators.map((collaborator) => (
            <tr key={collaborator.id} className="w-full">
              <td className="p-2 text-left">
                <input
                  type="checkbox"
                  checked={selectedCollaborators.has(collaborator.id)}
                  onChange={() => handleSelect(collaborator.id)}
                />
              </td>
              <td className="p-2 text-left">{collaborator.name}</td>
              <td className="p-2 text-left">{collaborator.cpf}</td>
              <td className="p-2 text-left">{collaborator.email}</td>
              <td className="p-2 text-right">
                <div className="justify-center gap-1">
                  <Link href={`/collaborators/${collaborator.id}`}>
                    <SeeMoreButton />
                  </Link>
                  <TrashButton onClick={() => handleDelete(collaborator.id)} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CollaboratorsPage;
