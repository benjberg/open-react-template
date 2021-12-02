import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
const Card = (props) => {
  const history = useHistory();
  const pauth = window.localStorage.getItem("pauthorization");
  function handleClick() {
    axios
      .get(`http://localhost:4000/api/games/boy/verify`, {
        headers: { pauthorization: `${pauth}` },
      })
      .then((res) => {
        console.log(res);
        window.location.reload();
      });
  }
  return (
    <div tw="bg-white rounded-lg shadow-2xl">
      <header tw="bg-gray-100 rounded-t-lg font-bold text-2xl py-5 px-8">
        Build A Card
      </header>

      <div tw="py-5 px-8">
        <p>
          {props.messages.type === "AWAITING_FRIEND_REQUEST" ? (
            <p>
              please add {props.messages.state.displayName} to your Fortnite
              friends list
            </p>
          ) : (
            <div tw="text-center">
              <p>Verification Task has finished processing!</p>
              <button
                onClick={handleClick}
                tw="mt-4 rounded-lg px-4 py-2 bg-blue-500 text-white shadow hover:shadow-xl duration-300"
              >
                finish up!
              </button>
            </div>
          )}
        </p>
        <div>{}</div>
      </div>
    </div>
  );
};

export default Card;
