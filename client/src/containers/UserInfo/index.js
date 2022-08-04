import React from "react";
import UserInfoComp from "../../components/UserInfo";
import UserTotalPointComp from "../../components/UserTotalPoints";

function UserInfo(props) {
  const { user } = props;
  return (
    <React.Fragment>
      <UserInfoComp data={user.user} />
      <UserTotalPointComp data={user.user} />
    </React.Fragment>
  );
}
/**
 * The container is being exported as CreatePostButton
 * so that this container can be imported into other modules.
 */
export default UserInfo;
