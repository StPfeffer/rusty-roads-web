import React from "react";

import PeopleIcon from '@mui/icons-material/People';
import styles from "./card.module.css";

type Card = {
  id: number,
  title: string,
  number: number,
  change: number,
}

const Card = ({ item }:
  { item: Card }
) => {
  return (
    <div className={styles.container}>
      <PeopleIcon />

      <div className={styles.texts}>
        <span className={styles.title}>{item.title}</span>
        <span className={styles.number}>{item.number}</span>

        <span className={styles.detail}>
          <span className={item.change > 0 ? styles.positive : styles.negative}>
            {item.change}%
          </span>{" "}

          {item.change > 0 ? "mais" : "menos"} que o mês anterior
        </span>
      </div>
    </div>
  );
};

export default Card;