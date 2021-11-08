import React, { Component } from "react";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Val from "../../assets/images/valorant-logo.png";
import Wz from "../../assets/images/COD2.jpg";
import Fn from "../../assets/images/fn3.jpg";

export default class GamesCarousel extends Component {
  render() {
    return (
      <Carousel
        tw="bg-gray-900"
        plugins={[
          "clickToChange",
          "centered",
          "rtl",
          "arrows",
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 2,
            },
          },
        ]}
      >
        <img src={Wz} />
        <img src={Val} />
        <img src={Fn} />
      </Carousel>
    );
  }
}
