import React, { useContext, useState } from "react";
import { BetContext } from "../contexts/BetContext";
import { useSelector, useDispatch } from "react-redux";

const BOYBets = [
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

const BOYyBets = [
  {
    bet: "HeaddfgShots1",
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

const BOYyyBets = [
  {
    bet: "HeadShots22",
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

const BetData = (props) => {
  const { game } = useContext(BetContext);
  const currentgame = useSelector((state) => state.currentgame);

  const BetSelector = () => {
    if (currentgame / 1 === 0) {
      return BOYBets;
    }
    if (currentgame / 1 === 1) {
      return BOYyBets;
    }
    if (currentgame / 1 > 1) {
      return BOYyyBets;
    }
  };

  return BetSelector(currentgame);
};
export default BetData;
