import { React, useState, useEffect } from "react";

export default function Team() {
  const [teachers, setTeachers] = useState([{}]);

  useEffect(() => {
    fetch("/api/teachers")
      .then((response) => response.json())
      .then((data) => setTeachers(data))
      .catch((err) => console.log(err));
  }, []);

  const [classes, setClasses] = useState(["ז", "ח", "ט", "י", "יא", "יב"]);
  return (
    <div className="flex items-center justify-center py-8 px-4">
      <div className="max-w-lg w-full shadow-lg right">
        {teachers.map((teacher, index) => (
          <div className="inliner" id={index}>
            <img
              className="rounded-full px-4 py-4"
              src={`https://ui-avatars.com/api/?name=${teacher.firstName}+${teacher.lastName}&size=200&background=fff&color=5f72e4`}
              alt=""
            />
            <div className="text-center">
              <p className="text-2xl">
                {teacher.firstName} {teacher.lastName}
              </p>
            </div>
            <div className="text-center">
              <p className="text-lg"> יועצת שכבה {classes[index]}'</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
