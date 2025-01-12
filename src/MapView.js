import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import './MapView.css';

// Custom icons for e-bin and user location
const eBinIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/1345/1345874.png', // Updated to a trash bin icon
  iconSize: [30, 40],
  iconAnchor: [15, 40],
  className: 'text-green-600' // Ensure green-colored markers
});

const userIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/61/61168.png',
  iconSize: [20, 20],
  iconAnchor: [10, 10],
});

const locations = [
  {
    id: 1,
    name: "BKC E-Waste Hub",
    address: "G Block BKC, Near MCA Club",
    area: "Bandra Kurla Complex",
    timing: "24/7",
    position: { lat: 19.0568, lng: 72.8639 }
  },
  {
    id: 2,
    name: "Worli Collection Center",
    address: "Prabhadevi Road, Near Century Bazaar",
    area: "Worli",
    timing: "9 AM - 6 PM",
    position: { lat: 19.0176, lng: 72.8156 }
  },
  {
    id: 3,
    name: "Juhu Beach E-Recycling",
    address: "Juhu Tara Road, Near Juhu Beach",
    area: "Juhu",
    timing: "10 AM - 8 PM",
    position: { lat: 19.0883, lng: 72.8264 }
  },
  {
    id: 4,
    name: "Fort Heritage Point",
    address: "D.N. Road, Near CST Station",
    area: "Fort",
    timing: "24/7",
    position: { lat: 18.9442, lng: 72.8337 }
  },
  {
    id: 5,
    name: "Colaba Collection Hub",
    address: "Colaba Causeway, Near Regal Cinema",
    area: "Colaba",
    timing: "8 AM - 8 PM",
    position: { lat: 18.9067, lng: 72.8147 }
  }
];

const MapView = () => {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userPos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
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
        center={[19.076, 72.8777]} 
        zoom={13} 
        scrollWheelZoom={true} 
        className="h-full w-full"
        style={{ height: '100vh', width: '100vw' }}
      >
        {/* Tile layer for map background */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

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
                <p className="text-gray-700">{location.address}</p>
                <p className="text-gray-600">Area: {location.area}</p>
                <p className="text-green-600 font-semibold">Timing: {location.timing}</p>
              </div>
            </Popup>
          </Marker>
        ))}

        {/* Marker for user location */}
        {userLocation && (
          <Marker position={[userLocation.lat, userLocation.lng]} icon={userIcon}>
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
          <h1 className="text-xl font-bold text-gray-800">Mumbai E-Waste Bins</h1>
        </div>
      </div>

      {/* Footer Note */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="bg-white px-4 py-2 rounded-lg shadow-lg">
          <p className="text-sm text-gray-600">Use the map to find the nearest e-waste bins in Mumbai.</p>
        </div>
      </div>
    </div>
  );
};

export default MapView;
