import React from "react";
import WatchGroupComp from "../../components/WatchGroup";
// import AuthContext from "../../context/AuthContext";
/**
 * The function is responsible for sending the watchgroup data
 * using props.
 * @param {*} props
 * @returns It returns the watch group data that received through props
 */
function WatchGroup(props) {
  const { watchGroupData, user, type, displayPoints } = props;

  // const [watchGroupData, setWatchGroupData] = useState([]);
  // const { user } = useContext(AuthContext);

  // useEffect(() => {
  //   axios
  //     .post(`${BACKEND_URL}/wg/watchGroup`, { movie_show_id: "12345" })
  //     .then((res) => {
  //       console.log("res.....", res);
  //       // console.log("user.....", user);
  //       setWatchGroupData(res.data);
  //     });
  //   // return request;
  // }, []);

  return (
    <WatchGroupComp
      watchGroupData={watchGroupData}
      user={user}
      type={type}
      watchgroup_id={props.watchgroup_id}
      displayPoints={displayPoints}
    />
  );
}
/**
 * The container is being exported as CreatePostButton
 * so that this container can be imported into other modules.
 */
export default WatchGroup;
