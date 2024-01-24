import React from "react";
import { useGetOutfitsQuery } from "../api/janeAustenApi";

export default function Outfits() {
  const { data = {}, error, isLoading } = useGetOutfitsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log(data);

  return (
    <div className="outfits">
      {data.map((outfit) => (
        <div key={outfit.outfitId} className="outfit">
          <img className="outfitimage" src={outfit.image} alt="Outfit" />
          <h2>{outfit.name}</h2>
        </div>
      ))}
    </div>
  );
  }