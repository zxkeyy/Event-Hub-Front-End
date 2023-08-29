import { useCallback, useMemo, useRef, useState } from "react";
import {
  TileLayer,
  Marker,
  Popup,
  MapContainer,
  useMapEvents,
} from "react-leaflet";

interface Props {
  position: {
    lat: number;
    lng: number;
  };
  setPosition: (positon:{ lat: number, lng: number }) => void;
}

const SelectLocationMap = ({ position, setPosition }: Props) => {
  const center = {
    lat: 36.7538,
    lng: 3.0588,
  };

  function ClickComponent() {
    const map = useMapEvents({
      click: (e) => {
        setPosition(e.latlng);
      },
    });
    return null;
  }

  function DraggableMarker() {
    const [draggable, setDraggable] = useState(false);
    const markerRef = useRef(null); // fuck typescript
    const eventHandlers = useMemo(
      () => ({
        dragend() {
          const marker = markerRef.current;
          if (marker != null) {
            setPosition(marker.getLatLng());
          }
        },
      }),
      []
    );

    return (
      <Marker
        draggable={true}
        eventHandlers={eventHandlers}
        position={position}
        ref={markerRef}
      >
        <Popup minWidth={90}>
          <span>Drag to select a location</span>
        </Popup>
      </Marker>
    );
  }

  return (
    <MapContainer
      center={center}
      zoom={5}
      scrollWheelZoom={false}
      style={{ height: "300px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ClickComponent />
      <DraggableMarker />
    </MapContainer>
  );
};

export default SelectLocationMap;
