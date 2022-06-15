// import './App.css';
import { useEffect, useState } from "react";
import axios from "axios";
import qs from "qs";
import MatchTable from "./components/MatchTable";
import WinReport from "./components/WinReport";

const App = () => {
  const [todaysLosses, setTodaysLosses] = useState(0);
  const [todaysMatchCount, setTodaysMatchCount] = useState(0);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/aaron")
      .then((response) => {
        const matches = response.data;
        console.log(matches);
        setTodaysMatchCount(matches.length);
        axios
          .get("http://127.0.0.1:5000/aaron/matches", {
            params: {
              // match: ["NA1_4342093304", "NA1_4342017734", "NA1_4340985492"],
              match: matches,
            },
            paramsSerializer: (params) => {
              return qs.stringify(params, { arrayFormat: "repeat" });
            },
          })
          .then((response) => {
            console.log("made it to second axios call");
            const matchData = response.data;
            console.log(response.data);
            let lossCount = 0;
            for (const match in matchData) {
              console.log(match);
              if (!matchData[match]["win"]) {
                lossCount++;
              }
            }
            setTodaysLosses(lossCount);
          })
          .catch((error) => {
            console.log("an error occurred with the matches call");
            console.log(error.response.data);
          });
      })
      .catch((error) => {
        console.log("an error occurred");
        console.log(error.response.data);
      });
  }, []);
  // console.log(`todays matches are ${todaysMatches}`);

  return (
    <div className="App">
      <header className="App-header">Can he TFT?</header>
      <main>
        <WinReport matches={todaysMatchCount} losses={todaysLosses}></WinReport>
        <MatchTable></MatchTable>
      </main>
    </div>
  );
};

export default App;
