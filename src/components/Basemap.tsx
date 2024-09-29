import { useRef, useState } from "react";
import {
  MapContainer,
  TileLayer,
  WMSTileLayer,
  FeatureGroup,
} from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import "leaflet-draw/dist/leaflet.draw.css";
import "leaflet/dist/leaflet.css";
import { sampleDatas } from "@/utils/apis/dashboard";
import { memo } from "react";
import L from "leaflet";

interface BasemapProps {
  selectedDatasets: string[];
}

const Basemap = memo(({ selectedDatasets }: BasemapProps) => {
  const [center] = useState({ lat: -7.971, lng: 112.631 });
  const mapRef = useRef(null);
  const zoomLevel = 12;
  const wmsUrl = "http://localhost:8080/geoserver/geovault/wms";

  return (
    <div className="rounded-md z-30 w-full h-full">
      <MapContainer
        zoomControl={false}
        zoom={zoomLevel}
        center={center}
        ref={mapRef}
        id="map"
        className="rounded-md h-full w-full"
      >
        <TileLayer
          url="https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}@2x.png?key=AW8IuG306IIk8kNdxEw6"
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        />
        <FeatureGroup>
          <EditControl
            position="topright"
            draw={{
              circlemarker: false,
              rectangle: false,
              polyline: true,
              polygon: true,
              circle: true,
              marker: true,
            }}
          />
        </FeatureGroup>

        {selectedDatasets.map((datasetName: string) => {
          const dataset = sampleDatas[0].data
            .flatMap((d) => d.datasets)
            .find((ds) => ds.file_name === datasetName);

          return dataset ? (
            <WMSTileLayer
              key={dataset.feature_id}
              url={wmsUrl}
              layers={dataset.store}
              format="image/png"
              transparent={true}
              version="1.1.0"
              crs={L.CRS.EPSG4326}
            />
          ) : null;
        })}
      </MapContainer>
    </div>
  );
});

export default Basemap;
