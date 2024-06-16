import React from 'react';
import styles from "../collaborator/collaborators.module.css";
import DeleteIcon from '@mui/icons-material/Delete';

interface Props {
  onClick: () => void;
}

const TrashButton: React.FC<Props> = ({ onClick }) => (
  <button className={`${styles.button} ${styles.delete}`} onClick={onClick}>
    <DeleteIcon />
  </button>
);

export default TrashButton;
