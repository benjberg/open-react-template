import React from "react";

import CarouselComp from "../components/sections/CarouselComp.js";
import TabsRender from "../components/sections/TabsRender.js";
import { Content2Xl } from "../layouts/Layouts.js";

const UserProfileView = () => (
  <Content2Xl>
    <CarouselComp />
    <TabsRender />
  </Content2Xl>
);

export default UserProfileView;
