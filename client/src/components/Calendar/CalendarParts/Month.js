import React from "react";
import Day from "./Day";
/**
 * The function to render the calender grid
 * @param {*} param0 The parameters include the month.
 * @returns It returns the rendered calender grid.
 */
export default function Month({ month }) {
    return (
        // Calander grid
        <div className="flex-1 grid grid-cols-7 grid-rows-5 ">
            {month.map((row, i) => (
                <React.Fragment key={i}>
                    {row.map((day, idx) => (
                        <Day day={day} key={idx} rowIdx={i} />
                    ))}
                </React.Fragment>
            ))}
        </div>
    );
}
