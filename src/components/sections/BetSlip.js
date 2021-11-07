import React from "react";

function BetSlip() {
  return (
    <main tw="flex flex-col bg-gray-900 rounded-md w-full mx-2">
      <div tw="ml-5 py-2">BET SLIP</div>

      <div tw="flex justify-center border-t-2 border-b-2 border-white py-2">
        <button tw="flex justify-center w-1/2">single</button>
        <button tw="flex justify-center w-1/2">parlay</button>
      </div>
      <section tw="border-2 border-white m-2 rounded-md flex">
        <div tw="flex flex-col w-1/2">
          <button>hello</button>
          <a href="www.google.com">BET MAX</a>
        </div>
        <div>
          <div>
            0.00<br></br>Potential return
          </div>
          <div>
            0.00<br></br>WGR<br></br>($0.00 USD)
          </div>
        </div>
      </section>
      <section tw="flex flex-col">
        <div tw="flex justify-between">
          <div tw="px-2">Total Matches</div>
          <div tw="px-2">0</div>
        </div>
        <div tw="flex justify-between">
          <div tw="px-2">Total Stake</div>
          <div tw="flex flex-col">
            <div>25.00 WGR</div>
            <div>($0.00 USD)</div>
          </div>
        </div>
        <div tw="flex justify-between">
          <div tw="px-2">Total Potential</div>
          <div tw="px-2">0.00 WGR</div>
        </div>
        <div tw="flex justify-between">
          <div tw="px-2">Return</div>
          <div>($0.00 USD)</div>
        </div>
      </section>
      <div tw="flex justify-center">
        <button tw="bg-purple-900 p-2 rounded-md my-2">
          Login To Place Bet
        </button>
      </div>
    </main>
  );
}

export default BetSlip;
