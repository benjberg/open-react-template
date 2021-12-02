import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //
import { Container, ContentWithPaddingXl } from "../../layouts/Layouts.js";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "../sections/partials/Headings.js";
import { SectionDescription } from "../sections/partials/Typography";
import Modal from "./Modal.js";

const HeadingContainer = tw.div``;
const Heading = tw(SectionHeading)``;
const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Description = tw(SectionDescription)`mx-auto text-center`;

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`;
const Card = tw.div`mt-24 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center`;
const CardImage = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`w-64 h-64 bg-center bg-cover rounded`}
`;
const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-6`}
  .position {
    ${tw`text-xs font-bold tracking-widest uppercase text-parlayPink`}
  }
  .name {
    ${tw`mt-1 text-xl font-medium text-white`}
  }
`;

export default ({
  heading = "Meet the team",
  subheading = "Our Team",
  description = "A distributed bunch of badasses making it happen",
  cards = [
    {
      imageSrc: "https://i.ibb.co/92zCjKP/Kyle.jpg",
      position: "Founder",
      name: "Kyle Einheuser",
      description:
        "Kyle comes from a marketing, sales, and operations background. Focusing on the consumer journey and the products that make those convert into repeat customers is his specialty. He was born and raised in Michigan. Favorite Video games: Tiger Woods PGA Tour 2008, Halo 3, and Call of Duty: Modern Warfare 3.",
    },
    {
      imageSrc: "https://i.ibb.co/xSF1sZf/4.jpg",
      position: "CMO",
      name: "Helena Leathers",
      description:
        "Helena is the CMO at Parlay and focuses on branding and marketing strategy. With over 6 years of experience in international business and entrepreneurship, she has targeted her skills towards a specialization in digital marketing and growth strategies across numerous sectors and industries.",
    },
    {
      imageSrc: "https://i.ibb.co/64mdGtB/Ben.jpg",
      position: "CTO",
      name: "Ben Berger",
      description:
        "Ben is a fullstack developer as well as a musician. Lover of tech, caffine and gaming. Favorite games include: Left 4 Dead, Diablo 2 and Streets of Rage ",
    },
    {
      imageSrc: "https://i.ibb.co/xYRHYkQ/Chen-2.jpg",
      position: "Data Scientist",
      name: "Gamemaster Chen",
      description:
        " GM Chen is an Experienced Data scientist utilizing statistics, machine learning and deep learning models to research probability and betting ratios. GM Loves Python & R-studio  and has a huge passion for Neural Networks.",
    },
    {
      imageSrc: "https://i.ibb.co/TRVnDZ2/Joe-1.jpg",
      position: "Discord Manager",
      name: "Joe Cox",
      description:
        "Joe is one of the most fierce gamers. He's been a multiple time top player for many games over the years in the competitive scene. He also codes and has written bots & AI for various applications.",
    },
    {
      imageSrc: "https://i.ibb.co/4Z6989V/seth-bio-pic.png",
      position: "Front-End Tech Lead",
      name: "Seth Blakley",
      description:
        "An FPS/Survival connoisseur, Seth spends his days on the bleeding edge of technology, and nights dabbin' on scrubs in csgo and taming alphas in Ark.",
    },
  ],
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          {heading && <Heading>{heading}</Heading>}
          {description && <Description>{description}</Description>}
        </HeadingContainer>
        <Cards>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <CardContent>
                <span className="position">{card.position}</span>
                <span className="name">{card.name}</span>
                <Modal name={card.name} description={card.description} />
              </CardContent>
            </Card>
          ))}
        </Cards>
      </ContentWithPaddingXl>
    </Container>
  );
};
