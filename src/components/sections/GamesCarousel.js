import React, { useContext, useState } from "react";
import { BetContext } from "../contexts/BetContext";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import Val from "../../assets/images/valorant-logo.png";
import Wz from "../../assets/images/COD2.jpg";
import Fn from "../../assets/images/fn3.jpg";
import { useSelector, useDispatch } from "react-redux";
import { nextgame, prevgame } from "../../utils/actions/GamesActions";

const GamesCarousel = () => {
  const currentgame = useSelector((state) => state.currentgame);
  const dispatch = useDispatch();

  const games = [
    {
      key: 1,
      content: <img src={Wz} />,
      name: "Warzone",
    },
    {
      key: 2,
      content: <img src={Val} />,
      name: "Warzone",
    },
    {
      key: 3,
      content: <img src={Fn} />,
      name: "Warzone",
    },
    {
      key: 4,
      content: <img src={Wz} />,
      name: "Warzone",
    },
    {
      key: 5,
      content: <img src={Val} />,
      name: "Warzone",
    },
    {
      key: 6,
      content: <img src={Fn} />,
      name: "Warzone",
    },
  ];

  return (
    <main tw="flex h-48 w-full">
      <button
        tw="bg-purple-900 focus:outline-none px-2"
        onClick={() => {
          dispatch(prevgame());
        }}
      >
        Select
      </button>
      <div>counter{currentgame}</div>

      <div style={{ width: "90%", height: "200px", margin: "10px auto" }}>
        <Carousel
          slides={games}
          goToSlide={currentgame}
          offsetRadius={3}
          animationConfig={config.slow}
        />
      </div>
      <button
        tw="bg-purple-900 focus:outline-none px-2"
        onClick={() => {
          dispatch(nextgame());
        }}
      >
        select
      </button>
    </main>
  );
};

export default GamesCarousel;
