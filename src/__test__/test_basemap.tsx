import React from "react";
import { MapContainer, TileLayer, WMSTileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const Basemap: React.FC = () => {
  const wmsUrl = "http://localhost:8080/geoserver/geovault/wms";
  const wmsLayer = "geovault:malang_pemanfaatan";

  return (
    <div className="h-screen w-full">
      <MapContainer
        center={[-7.9839, 112.6214]}
        zoom={12}
        className="h-full w-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <WMSTileLayer
          url={wmsUrl}
          layers={wmsLayer}
          format="image/png"
          transparent={true}
          version="1.1.0"
          crs={L.CRS.EPSG4326}
        />
      </MapContainer>
    </div>
  );
};

export default Basemap;
