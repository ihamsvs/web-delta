import React from "react";

interface Members {
  name: string;
  position: string;
  imageUrL: string;
}

const members: Members[] = [
  {
    name: "Jeremy Frank",
    position: "CEO",
    imageUrL: "icon-masculino.png"
  },
  {
    name: "Thiare",
    position: "CEO",
    imageUrL: "icon-masculino.png"
  },
  {
    name: "Leonardo",
    position: "practicante",
    imageUrL: "icon-masculino.png"
  },
];

function Members() {
  return (
    <div className="w-full max-w-sm bg-contraste border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center pb-10">
        {members.map((member) => (
          <>
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg bg-fondo my-4"
              src={member.imageUrL}
              alt="Bonnie image"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {member.name}
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {member.position}
            </span>
          </>
        ))}
      </div>
    </div>
  );
}

export default Members;
