import React from "react";
import tw from "twin.macro";
import { ContentWithVerticalPadding } from "../layouts/Layouts.js";
import UserInfoCard from "../components/sections/UserInfoCard.js";
import { Content2Xl } from "../layouts/Layouts";
const UserInfo = () => (
  <ContentWithVerticalPadding tw="mt-10">
    <UserInfoCard />
  </ContentWithVerticalPadding>
);

export default UserInfo;
