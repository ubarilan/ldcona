import { React, useState, useEffect } from "react";
import Teacher from "@Components/Teacher";

export default function Team() {
  const [teachers, setTeachers] = useState([{}]);

  useEffect(() => {
    fetch("/api/teachers")
      .then((response) => response.json())
      .then((data) => setTeachers(data))
      .catch((err) => console.log(err));
  }, []);

  const [classes, setClasses] = useState(["ז", "ח", "ט", "י", "יא", "יב"]);
  teachers.sort((a, b) => (a.grade > b.grade ? 1 : -1));
  console.log(teachers);
  return (
    <div className="flex items-center justify-center py-8 px-4">
      <div className="max-w-lg w-full shadow-lg right  text-white ">
        {teachers.map((teacher, index) => (
          <div
            className="inliner mx-auto text-white rounded transition duration-500 ease-in-out hover:bg-green-400 transform hover:-translate-y-1 rounded-xl"
            key={index}
          >
            <Teacher teacher={teacher} grade={classes[index]} />
          </div>
        ))}
      </div>
    </div>
  );
}
