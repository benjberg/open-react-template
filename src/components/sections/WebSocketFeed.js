import React, { useState, useEffect, useRef } from "react";
import Card from "./Card.js";
import { GetData } from "../../utils/hooks/getData.js";
const WebSocketFeed = (props) => {
  const { messages, loading } = GetData();

  console.log("props", messages);
  return (
    <div>
      {!loading ? <Card messages={messages} id={props.id} /> : <p>loading</p>}
    </div>
  );
};
export default WebSocketFeed;
