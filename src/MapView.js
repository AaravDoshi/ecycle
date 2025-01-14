import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Custom icons for e-bin and user location
const eBinIcon = new L.Icon({
  iconUrl: "pin.png", // E-bin icon
  iconSize: [40, 40],
  iconAnchor: [15, 40],
});

const userIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/61/61168.png", // User location icon
  iconSize: [20, 20],
  iconAnchor: [10, 10],
});

// Updated locations
const locations = [
  {
    id: 1,
    name: "Bin @ Mizuho Bank, Lower Parel",
    description: "Eco-friendly bin in the heart of the city.",
    googleLink: "https://maps.app.goo.gl/4y3J2cmdh5gxgaWYA",
    position: { lat: 18.999340642299124, lng: 72.82882928415198 },
  },
  {
    id: 2,
    name: "Bin @ Oberoi Esquire A Wing, Goregaon",
    description: "E-bin placed at Wing A of the complex.",
    googleLink: "https://maps.app.goo.gl/wiPmmdK1ikcmkWqX9",
    position: { lat: 19.1701, lng: 72.8637 },
  },
  {
    id: 3,
    name: "Bin @ Oberoi Esquire B Wing, Goregaon",
    description: "E-bin placed at Wing B of the complex.",
    googleLink: "https://maps.app.goo.gl/wiPmmdK1ikcmkWqX9",
    position: { lat: 19.1702, lng: 72.8643 },
  },
  {
    id: 4,
    name: "Bin @ Lakshchandi Heights, Goregaon",
    description: "Convenient e-bin for sustainable disposal.",
    googleLink: "https://maps.app.goo.gl/EnmmSoQhz9gpSA16A",
    position: { lat: 19.172857142813385, lng: 72.86990609417894 },
  },
  {
    id: 5,
    name: "Bin @ Rustomjee, Andheri",
    description: "Accessible e-bin for your e-waste.",
    googleLink: "https://maps.app.goo.gl/e6egrMpJx8JaRmAy9",
    position: { lat: 19.11655081101818, lng: 72.85435203812547 },
  },
  {
    id: 6,
    name: "Bin @ 25 South, Prabhadevi",
    description: "E-bin available near the seashore.",
    googleLink: "https://maps.app.goo.gl/SKH2WMh23hMguSRk7",
    position: { lat: 19.01882456037396, lng: 72.82976778257127 },
  },
  {
    id: 7,
    name: "Bin @ Rajive Plastics, Andheri",
    description: "Eco-friendly bin for efficient waste disposal.",
    googleLink: "https://maps.app.goo.gl/M3zootxMdX36TcLe9",
    position: { lat: 19.12241689770859, lng: 72.86360470928979 },
  },
];

// Component to re-center the map
const RecenterMap = ({ lat, lng }) => {
  const map = useMap();
  useEffect(() => {
    if (lat && lng) {
      map.setView([lat, lng], 16); // Recenter map with appropriate zoom level
    }
  }, [lat, lng, map]);
  return null;
};

const MapView = () => {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userPos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setUserLocation(userPos);
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    }
  }, []);

  return (
    <div className="h-screen w-full relative">
      <MapContainer
        center={[19.076, 72.8777]} // Default center (Mumbai)
        zoom={16}
        scrollWheelZoom={true}
        className="h-full w-full"
        style={{ height: "100vh", width: "100vw" }}
      >
        {/* Tile layer for map background */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Recenter map to user's location */}
        {userLocation && <RecenterMap lat={userLocation.lat} lng={userLocation.lng} />}

        {/* Markers for e-bin locations */}
        {locations.map((location) => (
          <Marker
            key={location.id}
            position={[location.position.lat, location.position.lng]}
            icon={eBinIcon}
          >
            <Popup>
              <div className="text-sm">
                <h3 className="font-bold text-base mb-1">{location.name}</h3>
                <p className="text-gray-700">{location.description}</p>
                <a
                  href={location.googleLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 underline hover:text-green-700"
                >
                  Open in Google Maps
                </a>
              </div>
            </Popup>
          </Marker>
        ))}

        {/* Marker for user location */}
        {userLocation && (
          <Marker
            position={[userLocation.lat, userLocation.lng]}
            icon={userIcon}
          >
            <Popup>
              <div className="text-sm">
                <h3 className="font-bold text-base">Your Location</h3>
              </div>
            </Popup>
          </Marker>
        )}
      </MapContainer>

      {/* Header */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
        <div className="bg-white px-4 py-2 rounded-full shadow-lg">
          <h1 className="text-xl font-bold text-gray-800">Find an E-bin</h1>
        </div>
      </div>

      {/* Footer Note */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="bg-white px-4 py-2 rounded-lg shadow-lg">
          <p className="text-sm text-gray-600">
            Use the map to find the nearest e-waste bins in Mumbai.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MapView;
