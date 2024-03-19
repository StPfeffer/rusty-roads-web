import React from "react";

import Card from "@/components/dashboard/card/card";
import styles from "../../components/dashboard/dashboard.module.css";
import Transactions from "@/components/dashboard/transactions/transactions";
import { cards } from "../../db/dummy/cards/data";

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          {cards.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>

        <Transactions />

        {/* Não está funcionando */}
        {/* <Chart /> */}
      </div>

      <div className={styles.side}>
        {/* <Rightbar /> */}
      </div>
    </div>
  );
};

export default Dashboard;