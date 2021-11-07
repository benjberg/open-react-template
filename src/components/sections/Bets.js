import React, { Component } from "react";

const betData = [
  {
    bet: "HeadShots",
    betdescription:
      "Some description of the bet, Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    image:
      "https://www.logolynx.com/images/logolynx/ba/ba4665954a08a496286f49d28b82eaf2.jpeg",
  },
  {
    bet: "KillStreak",
    betdescription:
      "Some description of the bet, Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    image:
      "https://image.freepik.com/free-vector/headshot-skull-logo-template_130779-56.jpg",
  },
  {
    bet: "Team Score",
    betdescription:
      "Some description of the bet, Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    image:
      "https://images-platform.99static.com/flBrkJFYSVZVTvBTcIOgRlIeeRQ=/265x140:1385x1260/500x500/top/smart/99designs-contests-attachments/99/99597/attachment_99597950",
  },
  {
    bet: "HeadShots",
    betdescription:
      "Some description of the bet, Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    image:
      "https://www.logolynx.com/images/logolynx/ba/ba4665954a08a496286f49d28b82eaf2.jpeg",
  },
];

class Bets extends Component {
  render() {
    return (
      <main tw="flex flex-col overflow-hidden h-full overflow-y-scroll scrollbar-hide rounded-lg">
        {betData.map((betArray) => (
          <section tw="flex justify-between bg-gray-600 border-2 border-gray-400 hover:border-cyan hover:border-solid h-40 duration-200 w-full">
            <section tw="flex flex-col w-1/3">
              <img
                tw="h-full w-full"
                src={betArray.image}
                alt="Valorant logo"
              />
            </section>
            <section tw="flex flex-col justify-between w-1/3 p-2 border-r-2 border-gray-500 overflow-hidden">
              <div>{betArray.bet}</div>
              <div>{betArray.betdescription}</div>
            </section>
            <section tw="flex py-2">
              <div tw="flex m-2">min</div>
              <div tw="flex m-2">max</div>
            </section>
            <section tw="flex py-2 bg-gray-700">
              <span
                className="text-gray-300 pointer-events-none top-6 right-6 group-hover:text-gray-400"
                aria-hidden="true"
              >
                <svg
                  className="w-10 h-full"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                </svg>
              </span>
            </section>
          </section>
        ))}
      </main>
    );
  }
}

export default Bets;
