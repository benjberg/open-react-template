import React from "react";
import { Carousel } from "react-carousel-minimal";
import tw from "twin.macro";

const Container = tw.div`
flex w-full
`;
function CarouselComp() {
  const data = [
    {
      image:
        "https://t4.ftcdn.net/jpg/04/09/70/87/360_F_409708782_HxuxOH8f7xSmj5p4ygbAbuJE74vGGj2N.jpg",
      caption: "Thing one",
    },
    {
      image:
        "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80",
      caption: "Something dank",
    },
    {
      image:
        "https://cdn.vox-cdn.com/thumbor/ADYxDCTUKewcGxhYGZ_XMUh4uzQ=/0x0:2040x1360/1200x675/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/64035800/acastro_190618_1777_cloud_gaming_0003.0.jpg",
      caption: " $₱€₦₯ ₥o₦€¥ ",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div style={{ textAlign: "center" }} className="shadow">
      <div>
        <Carousel
          data={data}
          time={10000}
          width="100%"
          height="500px"
          captionStyle={captionStyle}
          slideNumber={false}
          slideNumberStyle={slideNumberStyle}
          captionPosition="center"
          automatic={false}
          dots={false}
          pauseIconColor="purple"
          pauseIconSize="40px"
          slideBackgroundColor="black"
          slideImageFit="cover"
          thumbnails={false}
          thumbnailWidth="100px"
          style={{
            textAlign: "center",
          }}
        />
      </div>
    </div>
  );
}

export default CarouselComp;
