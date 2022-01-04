import { React, useState } from "react";
import { getDateString } from "@Lib/utils";

export default function NewTask(props) {
  let [show, setShow] = useState(false);

  let date = getDateString(null, props);
  date = toTimestamp(date);

  function toTimestamp(strDate) {
    var datum = Date.parse(strDate);
    return datum;
  }

  function handleClick(event) {
    setShow(true);
  }
  return (
    <div class=" md:px-9 px-5 dark:bg-gray-700 bg-gray-50 rounded-b text:left">
      {show ? (
        <form name="AddTask" action="api/times/add" method="POST">
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            name="teacherNotes"
            placeholder="Meeting name"
            aria-label="Meeting name"
          />
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            name="acquired"
            placeholder="Student"
            aria-label="Student"
          />
          <div class="mt-2 p-5 w-40 flex">
            <p>Time</p>
            <div class="bg-gray-200">
              <input
                type="text"
                defaultValue="00"
                class="h-3 w-5 bg-gray-200"
                name="hours"
              ></input>
              <p>:</p>
              <input
                type="text"
                defaultValue="00"
                class="h-3 w-5 bg-gray-200"
                name="minutes"
              ></input>
              <input
                name="timestamp"
                class="hidden"
                defaultValue={date}
              ></input>
            </div>
          </div>
          <input
            value="Submit"
            type="submit"
            class="bg-green-700 py-4 text-center px-17 md:px-12 md:py-4 text-white rounded leading-tight text-xl md:text-base font-sans mt-4 mb-20"
          ></input>
        </form>
      ) : (
        <button
          class="h-10 px-5 m-2 text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800"
          onClick={() => handleClick()}
        >
          Add Meeting+
        </button>
      )}
    </div>
  );
}
