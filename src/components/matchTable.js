import React from "react";
import MatchRow from "./MatchRow";

const MatchTable = () => {
  // const matchData = axios.get
  const matchData = [
    {
      match_id: "NA1_4342093304",
      match_time: "Mon, 13 Jun 2022 23:43:55 GMT",
      placed: 4,
      players_eliminated: 0,
      total_damage: 51,
      win: true,
    },
  ];

  const matchRows = matchData.map((match) => {
    return (
      <MatchRow
        key={match.match_id}
        timeStamp={match.match_time}
        placed={match.placed}
        playersEliminated={match.total_damage}
        totalDamage={match.players_eliminated}
      ></MatchRow>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Match Date</th>
          <th>Placed</th>
          <th>Total Damage</th>
          <th>Players Eliminated</th>
        </tr>
      </thead>
      <tbody>{matchRows}</tbody>
    </table>
  );
};

export default MatchTable;
