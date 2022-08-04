import React, { useState, useEffect } from "react";
import WatchListComp from "../../components/Watchlist";
import axios from "axios";
import { BACKEND_URL } from "../../config";
/**
 * The function is responsible for getting the watchgroup data
 * from the backend server and to send it to watch group component.
 * @param {*} props
 * @returns
 */
function WatchList(props) {
  const [watchGroupData, setWatchGroupData] = useState([]);
  useEffect(() => {
    const { email } = props.data.user;
    axios
      .post(`${BACKEND_URL}/wg/fetchWatchGroupByUser`, { email: email })
      .then((res) => {
        setWatchGroupData(res.data);
      });
  }, [props.data]);
  return (
    <React.Fragment>
      <WatchListComp watchGroupData={watchGroupData} />
    </React.Fragment>
  );
}
/**
 * The container is being exported as CreatePostButton
 * so that this container can be imported into other modules.
 */
export default WatchList;
