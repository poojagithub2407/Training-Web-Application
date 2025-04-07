import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const mapStyles = [
  {
    elementType: "geometry",
    stylers: [{ color: "#212121" }], // Dark background
  },
  {
    elementType: "labels.text.stroke",
    stylers: [{ color: "#212121" }],
  },
  {
    elementType: "labels.text.fill",
    stylers: [{ color: "#757575" }],
  },
  {
    featureType: "water",
    stylers: [{ color: "#0e1626" }], // Water color
  },
];

const WorldMap = () => {
  const mapCenter = { lat: 20, lng: 0 }; // World Center

  return (
    <div className="mt-10">
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap
          center={mapCenter}
          zoom={2}
          options={{ styles: mapStyles }}
          mapContainerClassName="w-full h-[350px] rounded-lg shadow-lg"
        />
      </LoadScript>
    </div>
  );
};

export default WorldMap;
