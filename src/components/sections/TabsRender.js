import React, { useEffect, useState } from "react";
import Bets from "./Bets";
import BetSlip from "./BetSlip";
import BetStats from "./BetStats";
import "react-tabs/style/react-tabs.css";
import GamesCarousel from "../sections/GamesCarousel";
import GCar from "./GCar";
import VerifyUsername from "./VerifyUsername";

const betData = [
  {
    bet: "HeadShots",
    betdescription:
      "1Some description of the bet, Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    image:
      "https://www.logolynx.com/images/logolynx/ba/ba4665954a08a496286f49d28b82eaf2.jpeg",
  },
  {
    bet: "KillStreak",
    betdescription:
      "2Some description of the bet, Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    image:
      "https://image.freepik.com/free-vector/headshot-skull-logo-template_130779-56.jpg",
  },
  {
    bet: "Team Score",
    betdescription:
      "3Some description of the bet, Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    image:
      "https://images-platform.99static.com/flBrkJFYSVZVTvBTcIOgRlIeeRQ=/265x140:1385x1260/500x500/top/smart/99designs-contests-attachments/99/99597/attachment_99597950",
  },
  {
    bet: "HeadShots",
    betdescription:
      "4Some description of the bet, Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    image:
      "https://www.logolynx.com/images/logolynx/ba/ba4665954a08a496286f49d28b82eaf2.jpeg",
  },
  {
    bet: "HeadShots",
    betdescription:
      "1Some description of the bet, Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    image:
      "https://www.logolynx.com/images/logolynx/ba/ba4665954a08a496286f49d28b82eaf2.jpeg",
  },
  {
    bet: "KillStreak",
    betdescription:
      "2Some description of the bet, Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    image:
      "https://image.freepik.com/free-vector/headshot-skull-logo-template_130779-56.jpg",
  },
];

const TabsRender = () => {
  const [verified, setVerified] = useState(false);
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
        <div className="shadow" tw="m-5 flex justify-center rounded-sm">
          <GCar />
        </div>

        <div tw="m-5 flex justify-center h-96">
          {verified ? <Bets betData={betData} /> : <VerifyUsername />}
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
