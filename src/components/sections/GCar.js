import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import uuidv4 from "uuid";
import { config } from "react-spring";
import Val from "../../assets/images/valorant-logo.png";
import Wz from "../../assets/images/COD2.jpg";
import Fn from "../../assets/images/fn3.jpg";

export default class GCar extends Component {
  state = {
    goToSlide: 0,
  };

  slides = [
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

  render() {
    return (
      <main tw="flex h-48 w-full">
        <button
          tw="bg-purple-900 focus:outline-none px-2"
          onClick={(e) => {
            e.preventDefault();
            this.setState({ goToSlide: this.state.goToSlide - 1 });
          }}
        >
          Select
        </button>

        <div style={{ width: "90%", height: "200px", margin: "10px auto" }}>
          <Carousel
            slides={this.slides}
            goToSlide={this.state.goToSlide}
            offsetRadius={3}
            animationConfig={config.slow}
          />
        </div>
        <button
          tw="bg-purple-900 focus:outline-none px-2"
          onClick={() => {
            this.setState({ goToSlide: this.state.goToSlide + 1 });
          }}
        >
          select
        </button>
      </main>
    );
  }
}
