"use client";

import Link from 'next/link';
import styles from "../../components/collaborator/collaborators.module.css";
import { deleteVehicle } from "@/actions/vehicle/deleteVehicle";
import toast from 'react-hot-toast';

interface Props {
  vehicle: Vehicle;
}

const VehicleRow: React.FC<Props> = ({ vehicle }) => {
  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this vehicle?")) {
      try {
        await deleteVehicle(vehicle.id);
        toast.success('Vehicle deleted successfully!');
        // Ideally, you should refetch the vehicles or remove the deleted vehicle from the state
        // For simplicity, we reload the page here
        window.location.reload();
      } catch (error) {
        toast.error('Failed to delete the vehicle. Please try again.');
      }
    }
  };

  return (
    <tr key={vehicle.id}>
      <td className="p-2">
        <div className="flex items-center gap-2.5">
          {vehicle.name}
        </div>
      </td>
      <td className="p-2">{vehicle.initialMileage}</td>
      <td className="p-2">{vehicle.actualMileage}</td>
      <td className="p-2">
        <div className="flex gap-2.5">
          <Link href={`/vehicles/${vehicle.id}`}>
            <button className={`${styles.button} ${styles.view}`}>
              Ver mais
            </button>
          </Link>
          <button
            className={`${styles.button} ${styles.delete}`}
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default VehicleRow;