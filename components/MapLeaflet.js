import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Icône personnalisée (doigt pour la localisation)
const myPin = new L.Icon({
  iconUrl: "/localisation.webp", 
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -25],
});

export default function MapLeaflet() {
  return (
    <MapContainer
      center={[45.019, -0.627]} // coordonnées de Vaire
      zoom={13}
      style={{ height: "300px", width: "100%", borderRadius: "10px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      <Marker position={[45.019, -0.627]} icon={myPin}>
        <Popup>Antoine Drive Services - Vaire</Popup>
      </Marker>
    </MapContainer>
  );
}
