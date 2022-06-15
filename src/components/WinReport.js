import React from "react";

const WinReport = (props) => {
  console.log(props.matches);
  return (
    <section>
      <h2>Hello</h2>
      <p>Aaron played {props.matches} TFT games today.</p>
      <p>Aaron took {props.losses} L's today.</p>
    </section>
  );
};

export default WinReport;
