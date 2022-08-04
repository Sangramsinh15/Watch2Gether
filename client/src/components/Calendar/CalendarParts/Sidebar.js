import React from "react";
import CreateEventButton from "./CreateEventButton";
import CreateCloseButton from "./CreateCloseButton";
/**
 * Created calander side bar with Create Event Button and Redirect button
 * @returns The event button and the close button on the side bar.
 */
export default function Sidebar() {
  return (
    <aside className="border-solid p-5 w-64">
      <CreateEventButton />
      <CreateCloseButton />
    </aside>
  );
}
