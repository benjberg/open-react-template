import React from "react";

import tw from "twin.macro";

import { css } from "styled-components/macro"; //eslint-disable-line
import Bets from "../components/sections/Bets.js";
import BetSlip from "../components/sections/BetSlip.js";

import { SectionHeading } from "../components/sections/partials/Headings";

const Container = tw.div`
mt-24 flex justify-center
`;

const BetPage = ({ headingText = "BetPage" }) => {
  return (
    <Container>
      <Bets />
      <BetSlip />
    </Container>
  );
};

export default BetPage;
