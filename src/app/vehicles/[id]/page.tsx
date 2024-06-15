import React from 'react'
import styles from "../../../components/collaborator/singleCollaborator/singleCollaborator.module.css";
import Image from "next/image";
import { fetchVehicle } from '@/actions/vehicle/fetchVehicles';
import { formatarData } from './../../../utils/formatarData';
import { fetchVehicleDoc } from '@/actions/vehicle/fetchVehiclesDocuments';
import { format } from 'date-fns';

const SingleVehiclePage = async ({ params }) => {
  
  const { id } = params;
  const vehicle = await fetchVehicle(id);
  const vehicleDoc = await fetchVehicleDoc(id);

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return format(date, 'dd/MM/yyyy HH:mm:ss');
  };

  return (
    <div className={styles.container}>
      <div className="flex-col w-1/3 h-screen ">
        <div className={styles.infoContainer} >
          <div className={styles.imgContainer}>
            <Image src={"/car.png"} alt="" fill />
          </div>
        </div>
      </div>

      <div className="w-full">
        <div id="informacoes" className={styles.formContainer}>
          <form className={styles.form}>
            <input type="hidden" name="id" value={vehicle.id} />
            <label>Nome</label>
            <input type="text" name="name" placeholder={vehicle.name} />
            <label>KM atual</label>
            <input type="text" name="actualMileage" placeholder={vehicle.actualMileage?.toString()} />
            <label>KM inicial</label>
            <input type="text" name="initialMileage" placeholder={vehicle.initialMileage?.toString()} />
            <button disabled>Atualizar</button>
          </form>
        </div>

        <p className="h-8" />

        <div id="documentos" className={styles.formContainer}>
          <h2 className='text-2xl mb-4'>Documentos do Veículo</h2>
          <form className={styles.form}>
            <input type="hidden" name="id" value={vehicleDoc.id} />
            
            <div className="flex justify-between">
              <div className="flex-col w-60">
                <label>Número de registro</label>
                <input className="w-full" type="text" name="name" placeholder={vehicleDoc.registrationNumber?.toString()} />
              </div>
              <div className="flex-col w-[22rem]">
                <label>Número do Chassi</label>
                <input className="w-full" type="text" name="actualMileage" placeholder={vehicleDoc.chassisNumber?.toString()} />  
              </div>
              <div className="flex-col w-40">
                <label>Ano de exercício</label>
                <input className="w-full" type="text" name="actualMileage" placeholder={vehicleDoc.exerciseYear?.toString()} />  
              </div>
              <div className="flex-col w-40">
                <label>Ano de Fabricação</label>
                <input className="w-full" type="text" name="actualMileage" placeholder={vehicleDoc.manufactureYear?.toString()} />  
              </div>
            </div>

            <div className="mt-2 flex justify-between">
              <div className="flex-col w-60">
                <label>Marca / Fabricante</label>
                <input className="w-full" type="text" name="name" placeholder={vehicleDoc.make} />
              </div>
              <div className="flex-col w-40">
                <label>Modelo</label>
                <input className="w-full" type="text" name="actualMileage" placeholder={vehicleDoc.model} />  
              </div>
              <div className="flex-col w-40">
                <label>Ano do modelo</label>
                <input className="w-full" type="text" name="actualMileage" placeholder={vehicleDoc.modelYear.toString()} />  
              </div>
              <div className="flex-col w-40">
                <label>Cor</label>
                <input className="w-full" type="text" name="actualMileage" placeholder={vehicleDoc.color} />  
              </div>
              <div className="flex-col w-40">
                <label>Cor</label>
                <input className="w-full" type="text" name="actualMileage" placeholder={vehicleDoc.plate} />  
              </div>
            </div>
            <button disabled>Atualizar</button>
          </form>
        </div>
          
        <div className='mt-4 flex'>
          <p className='text-slate-400'>Criado em: {formatDate(vehicle.createdAt)}</p>
          <p className='pl-4 text-slate-400'>Veículo atualizado em: {formatDate(vehicle.updatedAt)}</p>
          <p className='pl-4 text-slate-400'>Documente atualizado em: {formatDate(vehicle.updatedAt)}</p>
        </div>
      </div>
    </div>
  )
}

export default SingleVehiclePage;