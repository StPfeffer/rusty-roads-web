import React from "react";

import Card from "@/components/dashboard/card/card";
import Transactions from "@/components/dashboard/transactions/transactions";
import { cards } from "../../db/dummy/cards/data";
import Rightbar from "@/components/dashboard/rightbar/rightbar";

const Dashboard = async () => {
  return (
    <div className="flex gap-5 mt-5">
      <div className="flex flex-[3] flex-col gap-5 mt-5">
        <div className="flex gap-5 justify-between">
          {cards.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>

        <Transactions />
      </div>

      <div className="flex-1">
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;