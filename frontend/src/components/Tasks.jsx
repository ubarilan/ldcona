import { React } from "react";
import Task from "@Components/Task";
import { getDateString } from "@Lib/utils";

export default function Tasks(props) {
  return (
    <div className="md:py-8 py-5 md:px-16 px-5 dark:bg-gray-700 bg-gray-50 rounded-b">
      <div className="px-4">
        {props.times
          .filter(
            (time) =>
              time.acquired &&
              getDateString(new Date(time.timestamp)) ===
                getDateString(null, props)
          )
          .map((time, i) => {
            return (
              <Task
                time={new Date(time?.timestamp).toLocaleString().slice(0, -6)}
                acquired={time?.acquired || "Empty hour"}
                studentNotes={time?.studentNotes}
                key={i}
                id={time.id}
              />
            );
          })}
      </div>
    </div>
  );
}
