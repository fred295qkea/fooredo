"use client";

import { useState } from "react";

export default function Biosection({ bio }) {
  const [showFullBio, setShowFullBio] = useState(false);

  // Function to toggle between showing full and truncated bio
  const toggleBio = () => {
    setShowFullBio(!showFullBio);
  };

  // Truncate the bio text to a certain length
  const truncatedBio = bio.slice(0, 200) + "..."; // Adjust the length as needed

  return (
    <div>
      <p className="font-bold">Beskrivelse:</p>

      {showFullBio ? (
        <div>
          <p className="text-sm">{bio}</p>
          <button className="bg-blue-500 p-1 rounded mt-2" onClick={toggleBio}>
            Read Less
          </button>
        </div>
      ) : (
        <div>
          <p className="text-sm">{truncatedBio}</p>
          <button className="bg-blue-500 p-1 rounded mt-2" onClick={toggleBio}>
            Read More
          </button>
        </div>
      )}
    </div>
  );
}
