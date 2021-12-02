import React, { useEffect, useState } from "react";
import Bets from "./Bets";
import BetSlip from "./BetSlip";
import BetStats from "./BetStats";
import BetData from "./BetData";
import "react-tabs/style/react-tabs.css";
import GamesCarousel from "./GamesCarousel";
import VerifyUsername from "./VerifyUsername";
import { BetContext } from "../contexts/BetContext";

const TabsRender = () => {
  const [verified, setVerified] = useState(true);
  const [game, setGame] = useState(0);
  

  return (
    <main tw="flex flex-col w-full mb-5">
      <section className="shadow" tw="w-full bg-gray-900">
        <section className="shadow">
          <ul tw="flex w-full bg-gray-800 justify-between shadow-lg h-10">
            <div
              class="tabs"
              tw="border-r-2 border-black border-solid flex flex-grow justify-center items-center hover:bg-purple-900"
              href="#"
            >
              Bet On Yourself
            </div>
            <div
              class="tabs"
              tw="border-r-2 border-black border-solid flex flex-grow justify-center items-center hover:bg-purple-900"
              href="#"
            >
              Classified
            </div>
            <div
              class="tabs"
              tw="border-r-2 border-black border-solid flex flex-grow justify-center items-center hover:bg-purple-900"
              href="#"
            >
              Classified
            </div>
            <div
              class="tabs"
              tw="border-r-2 border-black border-solid flex flex-grow justify-center items-center hover:bg-purple-900"
              href="#"
            >
              Classified
            </div>
            <div
              class="tabs"
              tw="flex flex-grow justify-center items-center hover:bg-purple-900"
              href="#"
            >
              Classified
            </div>
          </ul>
        </section>

        <BetContext.Provider value={{ game, setGame }}>
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
        </BetContext.Provider>
      </section>
    </main>
  );
};
export default TabsRender;
