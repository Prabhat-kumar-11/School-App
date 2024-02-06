"use client";

import SchoolCard from "@/components/SchoolCard";
import { useEffect, useState } from "react";

const ShowSchoolsPage = () => {
  const [schools, setSchools] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/school")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((res) => {
        setSchools(res);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <div className="flex flex-wrap gap-3 mx-11 ">
          {schools?.map((school) => (
            <SchoolCard key={school.id} school={school} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ShowSchoolsPage;
