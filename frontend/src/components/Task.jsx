import { React } from "react";

export default function Task({ time, acquired, studentNotes, id }) {
  return (
    <div className="border-b pb-4 border-gray-400 border-dashed pt-5">
      <p className="text-xs font-light leading-3 text-gray-500 dark:text-gray-300 inliner">
        {time}
      </p>
      <form method="POST" action="/api/times/remove" className="inliner right">
        <input type="hidden" name="id" value={id} />
        <button name="submit" type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#ff0000"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </form>
      <p
        tabIndex="0"
        className="focus:outline-none text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 mt-2"
      >
        {acquired}
      </p>
      <p className="text-sm pt-2 leading-4 leading-none text-gray-600 dark:text-gray-300">
        {studentNotes}
      </p>
    </div>
  );
}
