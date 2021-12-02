import React, { useState } from "react";
import Bets from "./Bets";
import BetSlip from "./BetSlip";
import BetStats from "./BetStats";
import BetData from "./BetData";
import GamesCarousel from "./GamesCarousel";
import VerifyUsername from "./VerifyUsername";
import BetTabs from "./BetTabs";

const TabsRender = () => {
  const [verified, setVerified] = useState(true);

  return (
    <main tw="flex flex-col w-full mb-5">
      <section className="shadow" tw="w-full bg-gray-900">
        <BetTabs />

        <div className="shadow" tw="m-5 flex justify-center rounded-sm">
          <GamesCarousel />
        </div>
        <div tw="m-5 flex justify-center h-96">
          {verified ? <Bets betData={BetData()} /> : <VerifyUsername />}
        </div>
        <section tw="flex w-full p-5 pt-0">
          <div className="shadow" tw="flex bg-gray-900 rounded-sm w-3/4 mr-5">
            <BetStats />
          </div>

          <div
            className="shadow"
            tw="flex justify-center w-1/4 h-full rounded-sm overflow-hidden"
          >
            <BetSlip />
          </div>
        </section>
      </section>
    </main>
  );
};
export default TabsRender;
