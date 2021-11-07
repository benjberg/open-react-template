import React from "react";
import { Content2Xl } from "../../layouts/Layouts";
import Bets from "./Bets";
import BetSlip from "./BetSlip";
import "react-tabs/style/react-tabs.css";
import Val from "../../assets/images/valorant-logo.png";
import Wz from "../../assets/images/COD2.jpg";
import Fn from "../../assets/images/fn3.jpg";
import Plot from "react-plotly.js";
import CarouselComp from "./CarouselComp";
import Carousel from "react-elastic-carousel";

const gameData = [
  {
    href: "fort",
    src: Fn,
    alt: "Fortnite logo",
  },
  {
    href: "fort",
    src: Wz,
    alt: "WarZone logo",
  },
  {
    href: "fort",
    src: Val,
    alt: "Valorant logo",
  },
  {
    href: "fort",
    src: Fn,
    alt: "Fortnite logo",
  },
  {
    href: "fort",
    src: Wz,
    alt: "WarZone logo",
  },
  {
    href: "fort",
    src: Val,
    alt: "Valorant logo",
  },
];

const TabsRender = () => (
  <Content2Xl>
    <section tw="flex w-full">
      <div tw="mx-10 bg-red-100">Bet On Yourself</div>
      <div
        tw="mx-10"
        onClick={() => {
          console.log("hello");
        }}
      ></div>
      <div tw="mx-10">hello</div>
      <div tw="mx-10">hello</div>
      <div tw="mx-10">hello</div>
    </section>

    <section
      tw="flex flex-col bg-cover"
      // style={{
      //   backgroundImage: `url("https://images.unsplash.com/photo-1597299407241-638aa26e56c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1157&q=80")`,
      // }}
    >
      <section tw="flex w-full">
        <div tw="bg-gray-600 m-2 w-full rounded-lg">
          <Carousel>
            {gameData.map((gameArray) => (
              <div tw="w-1/2 flex justify-center">
                <a href="/boy/valorant">
                  <img
                    tw="hover:border-2 hover:border-cyan hover:border-solid hover:h-32 h-full duration-500"
                    src={gameArray.src}
                    alt={gameArray.alt}
                  />
                </a>
              </div>
            ))}
          </Carousel>
        </div>
        <div tw="bg-gray-800 m-2 rounded-lg">
          <Plot
            data={[
              {
                x: [1, 2, 3],
                y: [2, 6, 3],
                type: "scatter",
                mode: "lines+markers",
                marker: { color: "purple" },
              },
            ]}
            layout={{
              autosize: false,
              height: 200,
              title: "History",
              plot_bgcolor: "transparent",
              paper_bgcolor: "transparent",
              margin: {
                l: 25,

                r: 0,

                b: 25,

                t: 40,

                pad: 4,
              },
              xaxis: {
                showgrid: false,
                color: "#00FF00",
              },
              yaxis: {
                showgrid: false,
                showline: true,
                color: "#00FF00",
              },
            }}
          />
        </div>
      </section>
      <section tw="flex w-full h-96 overflow-hidden">
        <div tw="flex w-1/2 m-2">
          <Bets />
        </div>
        <div tw="flex w-1/2">
          <div tw="bg-gray-600 m-2 flex flex-col w-1/2 rounded-lg">
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
  </Content2Xl>
);
export default TabsRender;
