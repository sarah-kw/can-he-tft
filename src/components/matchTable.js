import React from "react";
import matchRow from "./matchRow";

const matchTable = () => {
  // const matchData = axios.get
  const matchData = {
    NA1_4342093304: {
      match_time: "Mon, 13 Jun 2022 23:43:55 GMT",
      placed: 4,
      players_eliminated: 0,
      total_damage: 51,
      win: true,
    },
  };

  const matchRows = matchData.map((match) => {
    return (
      <matchRow
        timeStamp={match.match_time}
        placed={match.placed}
        playersEliminated={match.players_eliminated}
        totalDamage={match.total_damage}
      ></matchRow>
    );
  });

  return (
    <table>
      <tr>
        <th>Match Date</th>
        <th>Placed</th>
        <th>Total Damage</th>
        <th>Players Eliminated</th>
      </tr>
      {matchRows}
    </table>
  );
};
