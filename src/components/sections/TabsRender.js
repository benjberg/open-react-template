import React, { useState } from "react";
import Bets from "./Bets";
import BetSlip from "./BetSlip";
import BetStats from "./BetStats";
import "react-tabs/style/react-tabs.css";
import GamesCarousel from "../sections/GamesCarousel";
import VerticalCarousel from "./VerticalCarousel";
import { config } from "react-spring";
import { initial } from "lodash";

let slides = [
  {
    key: 1,
    content: "h",
  },
  {
    key: 2,
    content: "2",
  },
  {
    key: 3,
    content: <Bets />,
  },
  {
    key: 4,
    content: "3",
  },
  {
    key: 5,
    content: "4",
  },
  {
    key: 6,
    content: "5",
  },
  {
    key: 7,
    content: "6",
  },
  {
    key: 8,
    content: "7",
  },
];

let goToSlide = 0;
let offsetRadius = 2;
let showNavigation = false;
let vcconfig = config.gentle;

const initialTabSelection = {
  selection: "tab1",
};

const TabsRender = () => {
  //TabSelectionState
  const tabOnClick = (e) => {
    e.preventDefault();
    let elem = document.getElementsByClassName("selected");
    console.log(elem);
    elem.classList.remove("selected");

    document.getElementById(tabSelection.selection).classList.add("selected");
  };

  const [tabSelection, setTabSelection] = useState(initialTabSelection);

  return (
    <main tw="mb-20">
      <section tw="flex justify-center">
        <ul class="tabrow">
          <li
            class="selected"
            id="tab1"
            // onClick={(e) => {
            //   setTabSelection({ selection: "tab1" });
            //   tabOnClick(e);
            // }}
          >
            <a href="#">Bet On Yourself</a>
          </li>
          <li id="tab2">
            <a href="#">Classified</a>
          </li>
          <li id="tab3">
            <a href="#">Classified</a>
          </li>
          <li id="tab4">
            <a href="#">Classified</a>
          </li>
        </ul>
      </section>

      <section
        tw="rounded-lg bg-gray-800"
        // style={{
        //   backgroundImage: `url("https://images.unsplash.com/photo-1597299407241-638aa26e56c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1157&q=80")`,
        // }}
      >
        <section tw="flex w-full">
          <div tw="flex bg-gray-600 m-2 w-1/2 rounded-lg overflow-hidden">
            <GamesCarousel />
          </div>
          <div tw="flex bg-gray-900 m-2 w-1/2 rounded-lg overflow-hidden">
            <BetStats />
          </div>
        </section>
        <section tw="flex w-full h-96 overflow-hidden p-2">
          <div tw="flex w-1/2 m-2 p-10 flex overflow-hidden">
            <VerticalCarousel
              slides={slides}
              offsetRadius={offsetRadius}
              showNavigation={showNavigation}
              animationConfig={vcconfig}
            />
          </div>
          <div tw="flex w-1/2">
            <div tw="bg-gray-600 flex flex-col w-1/2 rounded-lg">
              <p>Play Match</p>
              <p>
                Lorem Ipsume iasdufgiusdfign isdnf dnf giunsdifn sdufngiusdn
                figunsdiu fngiusdfn gsdfsdf
              </p>
            </div>
            <div tw="flex h-full w-1/2">
              <BetSlip />
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};
export default TabsRender;
