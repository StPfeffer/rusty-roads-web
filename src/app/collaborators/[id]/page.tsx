"use client";

import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import styles from "../../../components/collaborator/singleCollaborator/singleCollaborator.module.css";
import { format } from 'date-fns';
import toast from 'react-hot-toast';
import { updateCollaborator } from '@/actions/collaborator/updateCollaborator';
import { updateDriver } from '@/actions/collaborator/updateDriver';
import { fetchCollaborator } from '@/actions/collaborator/fetchCollaborators';
import { fetchDriverByCollaboratorId } from '@/actions/collaborator/fetchDrivers';
import Image from 'next/image';

interface Props {
  params: {
    id: string;
  };
}

const SingleCollaboratorPage: React.FC<Props> = ({ params }) => {
  const { id } = params;

  const [collaborator, setCollaborator] = useState<Collaborator | null>(null);
  const [driver, setDriver] = useState<Driver | null>(null);
  const [isCollaboratorModified, setIsCollaboratorModified] = useState<boolean>(false);
  const [isDriverModified, setIsDriverModified] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const initialCollaborator = await fetchCollaborator(id);
      const initialDriver = await fetchDriverByCollaboratorId(id);

      if (initialCollaborator.error) {
        toast.error(initialCollaborator.error.message, { id: 'fetch-collaborator-error' });
      } else {
        setCollaborator(initialCollaborator.success?.data);
      }

      if (initialDriver.error) {
        toast.error(initialDriver.error.message, { id: 'fetch-driver-error' });
      } else {
        setDriver(initialDriver.success?.data);
      }
    };
    fetchData();
  }, [id]);

  const handleCollaboratorChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCollaborator((prevCollaborator) => ({
      ...prevCollaborator!,
      [name]: value,
    }));
    setIsCollaboratorModified(true);
  };

  const handleDriverChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDriver((prevDriver) => ({
      ...prevDriver!,
      [name]: value,
    }));
    setIsDriverModified(true);
  };

  const handleCollaboratorSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await updateCollaborator(id, collaborator!);

    if (response.error) {
      toast.error(response.error.message, { id: 'update-collaborator-error' });
    } else {
      setIsCollaboratorModified(false);
      toast.success('Collaborator updated successfully!');
    }
  };

  const handleVehicleDocSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await updateDriver(id, driver!);

    if (response.error) {
      toast.error(response.error.message, { id: 'update-driver-error' });
    } else {
      setIsDriverModified(false);
      toast.success("Collaborator document updated successfully!");
    }
  };

  const formatDate = (dateString: string) => {
    if (dateString) {
      const date = new Date(dateString);
      return format(date, 'dd/MM/yyyy HH:mm:ss');
    }

    return '';
  };

  if (!collaborator) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div className="flex-col w-1/3 h-screen">
        <div className={styles.infoContainer}>
          <div className={styles.imgContainer}>
            <Image src="/noavatar.png" alt="" fill />
          </div>
        </div>
      </div>

      <div className="w-full">
        <div id="informacoes" className={styles.formContainer}>
          <form className={styles.form} onSubmit={handleCollaboratorSubmit}>
            <input type="hidden" name="id" value={collaborator.id} />
            <label>Nome</label>
            <input type="text" name="name" value={collaborator.name} onChange={handleCollaboratorChange} />
            <label>CPF</label>
            <input type="text" name="cpf" value={collaborator.cpf} onChange={handleCollaboratorChange} disabled />
            <label>RG</label>
            <input type="text" name="rg" value={collaborator.rg} onChange={handleCollaboratorChange} disabled />
            <label>Email</label>
            <input type="email" name="email" value={collaborator.email} onChange={handleCollaboratorChange} disabled />
            <button type="submit" disabled={!isCollaboratorModified}>Atualizar</button>
          </form>
        </div>

        <p className="h-8" />

        {driver && <div id="documentos" className={styles.formContainer}>
          <h2 className="text-2xl mb-4">Documentos do Motorista</h2>
          <form className={styles.form} onSubmit={handleVehicleDocSubmit}>
            <input type="hidden" name="id" value={driver.id} />
            <div className="flex justify-between">
              <div className="flex-col w-60">
                <label>Número da CNH</label>
                <input className="w-full" type="text" name="cnhNumber" value={driver.cnh_number} onChange={handleDriverChange} />
              </div>
              <div className="flex-col w-[22rem]">
                <label>Expiração da CNH</label>
                <input className="w-full" type="text" name="cnhExpirationDate" value={driver.cnh_expiration_date} onChange={handleDriverChange} />
              </div>
              <div className="flex-col w-40">
                <label>Tipo da CNH</label>
                <input className="w-full" type="number" name="cnhType" value={driver.id_cnh_type} onChange={handleDriverChange} />
              </div>
            </div>
            <button type="submit" disabled={!isDriverModified}>Atualizar</button>
          </form>
        </div>}

        <div className="mt-4 flex">
          <p className="text-slate-400">Criado em: {formatDate(collaborator.createdAt)}</p>
          <p className="pl-4 text-slate-400">Atualizado em: {formatDate(collaborator.updatedAt)}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleCollaboratorPage;
