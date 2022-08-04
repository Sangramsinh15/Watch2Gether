import React, { useState } from "react";
import LeaderboardComp from "../../components/Leaderboard";
/**
 * The functiion is responsible for creating the interface for leaderboard
 * @param {*} props The parameters include the time period to filter the leaderboard data
 * @returns It returns the container for with userlist for the specified time period
 */
function Leaderboard(props) {
  const [period, setPeriod] = useState(0);

  const handleClick = (value) => {
    setPeriod(value);
  };
  return (
    <LeaderboardComp
      data={props.userlist}
      period={period}
      handleClick={handleClick}
      displayPoints={props.displayPoints}
    />
  );
}
/**
 * The container is being exported as CreatePostButton
 * so that this container can be imported into other modules.
 */
export default Leaderboard;
