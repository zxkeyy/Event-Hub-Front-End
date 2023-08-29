import { Input, Text } from "@chakra-ui/react";
import { useCallback, useMemo, useRef, useState } from "react";
import {
  TileLayer,
  Marker,
  Popup,
  MapContainer,
  useMapEvents,
} from "react-leaflet";
import useMapReverseLookup from "../hookers/useMapReverseLookup";

interface Props {
  position: { lat: number; lng: number };
  locationName: string;
  setPosition: (positon: { lat: number; lng: number }) => void;
  setLocationName: (name: string) => void;
}

const SelectLocationMap = ({
  position,
  locationName,
  setPosition,
  setLocationName,
}: Props) => {
  const center = { lat: 36.7538, lng: 3.0588 };

  const { data: lookupData, error } = useMapReverseLookup(
    position.lat,
    position.lng
  );

  function ClickComponent() {
    const map = useMapEvents({
      click: (e) => {
        setPosition(e.latlng);
        lookupData ? setLocationName(lookupData?.name) : "";
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
            lookupData ? setLocationName(lookupData?.name) : "";
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
    <>
      <Text fontSize="xs" textColor="gray.400">
        location:{" "}
        {position.lat.toString().substring(0, 7) +
          ", " +
          position.lng.toString().substring(0, 7)}
      </Text>
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
      <Text paddingTop={2} fontSize="sm">
        {"Location name (editable)"}
      </Text>
      <Input
        value={locationName}
        onChange={(e) => setLocationName(e.currentTarget.value)}
      ></Input>
    </>
  );
};

export default SelectLocationMap;
