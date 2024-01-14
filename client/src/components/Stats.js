import React, { useContext } from "react";
import "./Stats.css";
import Dog from "./Dog";
import Cat from "./Cat";
import Board from "./Board";
import { Context } from "../Store";
import Dino from "./Dino";
import Duck from "./Duck";

function Stats() {
  const [state, setState] = useContext(Context);
  return (
    <>
      <section className="stats">
        <div className="stats-wrap">
          <div className="stats-one">
            {state.character == "Shiba" ? <Dog /> : null}
            {state.character == "Dino" ? <Cat /> : null}
            {state.character == "Chicken" ? <Dino /> : null}
            {state.character == "Avo" ? <Duck /> : null}
          </div>
          <div className="stats-two">
            <div className="stats-container">
              <h1>Profile</h1>
              <h2>User: {state.username}</h2>
              <h2>Items recycled today: {state.today}</h2>
              <h2>Items recycled total: {state.total}</h2>
              <h2>Trash capacity: {state.capacity}%</h2>
              <h2>Coins: {state.coins}</h2>
            </div>
          </div>
        </div>
        <div className="leaderboard">
          <Board />
        </div>
      </section>
    </>
  );
}

export default Stats;
