import React from 'react';
import styles from "../collaborator/collaborators.module.css";
import VisibilityIcon from '@mui/icons-material/Visibility';

interface Props {
  onClick?: () => void;
}

const SeeMoreButton: React.FC<Props> = ({ onClick }) => (
  <button className={`${styles.button} ${styles.delete}`} onClick={onClick}>
    <VisibilityIcon />
  </button>
);

export default SeeMoreButton;
