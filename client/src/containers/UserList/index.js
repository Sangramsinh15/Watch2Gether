import React from "react";
import UserListComp from "../../components/UserList";
/**
 * The function is responsible for fetching the user list to disply in the leader board
 * @param {*} props 
 * @returns The list of users
 */
function UserList(props) {
  const { userlist } = props;
  return <UserListComp data={userlist} />;
}
/**
 * The container is being exported as CreatePostButton 
 * so that this container can be imported into other modules.
 */
export default UserList;
