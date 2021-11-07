import React from "react";
import BetSlip from "./BetSlip";

export default function BetSlipModal(props) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="mt-1 button button-primary button-wide-mobile button-sm"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Learn More
      </button>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            {/*body*/}
            <BetSlip />
          </div>
        </>
      ) : null}
    </>
  );
}
