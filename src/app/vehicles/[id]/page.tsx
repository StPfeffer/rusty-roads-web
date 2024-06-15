"use client";

import React, { useState, useEffect } from 'react';
import styles from "../../../components/collaborator/singleCollaborator/singleCollaborator.module.css";
import Image from "next/image";
import { fetchVehicle } from '@/actions/vehicle/fetchVehicles';
import { fetchVehicleDoc } from '@/actions/vehicle/fetchVehiclesDocuments';
import { format } from 'date-fns';
import { updateVehicle } from '@/actions/vehicle/updateVehicle';
import { updateVehicleDocument } from '@/actions/vehicle/updateVehicleDocument';

const SingleVehiclePage = ({ params }) => {
  const { id } = params;

  const [vehicle, setVehicle] = useState(null);
  const [vehicleDoc, setVehicleDoc] = useState(null);
  const [isVehicleModified, setIsVehicleModified] = useState(false);
  const [isVehicleDocModified, setIsVehicleDocModified] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const initialVehicle = await fetchVehicle(id);
        const initialVehicleDoc = await fetchVehicleDoc(id);
        setVehicle(initialVehicle);
        setVehicleDoc(initialVehicleDoc);
      } catch (err) {
        console.error('Error fetching vehicle data:', err);
      }
    };
    fetchData();
  }, [id]);

  const handleVehicleChange = (e) => {
    const { name, value } = e.target;
    setVehicle((prevVehicle) => ({
      ...prevVehicle,
      [name]: value,
    }));
    setIsVehicleModified(true);
  };

  const handleVehicleDocChange = (e) => {
    const { name, value } = e.target;
    setVehicleDoc((prevVehicleDoc) => ({
      ...prevVehicleDoc,
      [name]: value,
    }));
    setIsVehicleDocModified(true);
  };

  const handleVehicleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateVehicle(id, vehicle);
      setIsVehicleModified(false);
      alert('Vehicle updated successfully!');
    } catch (err) {
      console.error('Error updating vehicle:', err);
      alert('Failed to update vehicle');
    }
  };

  const handleVehicleDocSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateVehicleDocument(id, vehicleDoc);
      setIsVehicleDocModified(false);
      alert('Vehicle document updated successfully!');
    } catch (err) {
      console.error('Error updating vehicle document:', err);
      alert('Failed to update vehicle document');
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, 'dd/MM/yyyy HH:mm:ss');
  };

  if (!vehicle || !vehicleDoc) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div className="flex-col w-1/3 h-screen">
        <div className={styles.infoContainer}>
          <div className={styles.imgContainer}>
            <Image src="/car.png" alt="" fill />
          </div>
        </div>
      </div>

      <div className="w-full">
        <div id="informacoes" className={styles.formContainer}>
          <form className={styles.form} onSubmit={handleVehicleSubmit}>
            <input type="hidden" name="id" value={vehicle.id} />
            <label>Nome</label>
            <input type="text" name="name" value={vehicle.name} onChange={handleVehicleChange} />
            <label>KM atual</label>
            <input type="text" name="actualMileage" value={vehicle.actualMileage} onChange={handleVehicleChange} disabled />
            <label>KM inicial</label>
            <input type="text" name="initialMileage" value={vehicle.initialMileage} onChange={handleVehicleChange} disabled  />
            <button type="submit" disabled={!isVehicleModified}>Atualizar</button>
          </form>
        </div>

        <p className="h-8" />

        <div id="documentos" className={styles.formContainer}>
          <h2 className="text-2xl mb-4">Documentos do Veículo</h2>
          <form className={styles.form} onSubmit={handleVehicleDocSubmit}>
            <input type="hidden" name="id" value={vehicleDoc.id} />
            <div className="flex justify-between">
              <div className="flex-col w-60">
                <label>Número de registro</label>
                <input className="w-full" type="text" name="registrationNumber" value={vehicleDoc.registrationNumber} onChange={handleVehicleDocChange} />
              </div>
              <div className="flex-col w-[22rem]">
                <label>Número do Chassi</label>
                <input className="w-full" type="text" name="chassisNumber" value={vehicleDoc.chassisNumber} onChange={handleVehicleDocChange} />
              </div>
              <div className="flex-col w-40">
                <label>Ano de exercício</label>
                <input className="w-full" type="text" name="exerciseYear" value={vehicleDoc.exerciseYear} onChange={handleVehicleDocChange} />
              </div>
              <div className="flex-col w-40">
                <label>Ano de Fabricação</label>
                <input className="w-full" type="text" name="manufactureYear" value={vehicleDoc.manufactureYear} onChange={handleVehicleDocChange} />
              </div>
            </div>

            <div className="mt-2 flex justify-between">
              <div className="flex-col w-60">
                <label>Marca / Fabricante</label>
                <input className="w-full" type="text" name="make" value={vehicleDoc.make} onChange={handleVehicleDocChange} />
              </div>
              <div className="flex-col w-40">
                <label>Modelo</label>
                <input className="w-full" type="text" name="model" value={vehicleDoc.model} onChange={handleVehicleDocChange} />
              </div>
              <div className="flex-col w-40">
                <label>Ano do modelo</label>
                <input className="w-full" type="text" name="modelYear" value={vehicleDoc.modelYear} onChange={handleVehicleDocChange} />
              </div>
              <div className="flex-col w-40">
                <label>Cor</label>
                <input className="w-full" type="text" name="color" value={vehicleDoc.color} onChange={handleVehicleDocChange} />
              </div>
              <div className="flex-col w-40">
                <label>Placa</label>
                <input className="w-full" type="text" name="plate" value={vehicleDoc.plate} onChange={handleVehicleDocChange} />
              </div>
            </div>
            <button type="submit" disabled={!isVehicleDocModified}>Atualizar</button>
          </form>
        </div>

        <div className="mt-4 flex">
          <p className="text-slate-400">Criado em: {formatDate(vehicle.createdAt)}</p>
          <p className="pl-4 text-slate-400">Veículo atualizado em: {formatDate(vehicle.updatedAt)}</p>
          <p className="pl-4 text-slate-400">Documento atualizado em: {formatDate(vehicleDoc.updatedAt)}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleVehiclePage;
