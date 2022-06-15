import React from "react";

const MatchRow = (props) => {
  return (
    <tr>
      <td>{props.timeStamp}</td>
      <td>{props.placed}</td>
      <td>{props.playersEliminated}</td>
      <td>{props.totalDamage}</td>
    </tr>
  );
};

export default MatchRow;
