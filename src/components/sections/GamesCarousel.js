import React, { useContext, useState } from "react";
import { BetContext } from "../contexts/BetContext";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import uuidv4 from "uuid";
import Val from "../../assets/images/valorant-logo.png";
import Wz from "../../assets/images/COD2.jpg";
import Fn from "../../assets/images/fn3.jpg";

const GamesCarousel = () => {
  const { setGame } = useContext(BetContext);
  const { game } = useContext(BetContext);

  const games = [
    {
      key: uuidv4(),
      content: <img src={Wz} />,
    },
    {
      key: uuidv4(),
      content: <img src={Val} />,
    },
    {
      key: uuidv4(),
      content: <img src={Fn} />,
    },
    {
      key: uuidv4(),
      content: <img src={Wz} />,
    },
    {
      key: uuidv4(),
      content: <img src={Val} />,
    },
    {
      key: uuidv4(),
      content: <img src={Fn} />,
    },
  ];

  return (
    <main tw="flex h-48 w-full">
      <button
        tw="bg-purple-900 focus:outline-none px-2"
        onClick={() => {
          setGame(game - 1);
        }}
      >
        Select
      </button>

      <div style={{ width: "90%", height: "200px", margin: "10px auto" }}>
        <Carousel
          slides={games}
          goToSlide={game}
          offsetRadius={3}
          animationConfig={config.slow}
        />
      </div>
      <button
        tw="bg-purple-900 focus:outline-none px-2"
        onClick={() => {
          setGame(game + 1);
          console.log(game);
        }}
      >
        select
      </button>
    </main>
  );
};

export default GamesCarousel;
