"use client";
import Image from "next/image";

const SchoolCard = ({ school }) => {
  return (
    <div className="w-64 h-80 bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
      <Image
        src={`/schoolImages/${school.image}.jpg`}
        width={100}
        height={100}
        alt={school.name}
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <div className="flex flex-col justify-between flex-1">
        <div>
          <h2 className="text-lg font-semibold mb-1">{school.name}</h2>
          <p className="text-gray-700 mb-1">{school.city}</p>
          <p className="text-gray-700">{school.address}</p>
        </div>
      </div>
    </div>
  );
};

export default SchoolCard;
