import { React } from "react";

export default function Teacher({ grade, teacher }) {
  return (
    <>
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
        <p className="text-lg"> יועצת שכבה {grade} '</p>
      </div>
    </>
  );
}
