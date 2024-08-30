import React, { useState, useRef, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  Autocomplete,
  Marker,
} from "@react-google-maps/api";

const containerStyle: React.CSSProperties = {
  width: "100%",
  height: "250px",
  padding: "10px",
};

const defaultCenter: google.maps.LatLngLiteral = {
  lat: -3.745,
  lng: -38.523,
};

const Map = ({setAddressFormData,addressFormData}:any) => {
  const [mapCenter, setMapCenter] =
    useState<google.maps.LatLngLiteral>(defaultCenter);
  const [markerPosition, setMarkerPosition] =
    useState<google.maps.LatLngLiteral | null>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  const onPlaceChanged = () => {
    const place = autocompleteRef.current?.getPlace();
    if (place) {
      place.address_components?.forEach((component) => {
        if (component.types.includes("locality")) {
          setAddressFormData((prev:any)=>({
            ...prev,
            city:component.long_name
          }))
        }
        if (component.types.includes("administrative_area_level_1")) {
          setAddressFormData((prev:any)=>({
            ...prev,
            state:component.short_name
          }))
        }
        if (component.types.includes("country")) {
          setAddressFormData((prev:any)=>({
            ...prev,
            country:component.long_name
          }))
        }
        if(component.types.includes("postal_code")){
          setAddressFormData((prev:any)=>({
            ...prev,
            zipcode:component.long_name
          }))
          // zipcode = component.long_name
        }
      });
    }
    if (place?.geometry?.location) {
      const location: google.maps.LatLngLiteral = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      };

      setAddressFormData((prev:any)=>({
        ...prev,
        loc:[location?.lat,location?.lng]
      }))
      setMapCenter(location);
      setMarkerPosition(location);
    }
  };

  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
      libraries={["places"]}
    >
      <Autocomplete
        onLoad={(ref) => (autocompleteRef.current = ref)}
        onPlaceChanged={onPlaceChanged}
      >
        <input
          type="text"
          placeholder="Enter a location"
          style={{
            width: "300px",
            height: "40px",
            padding: "10px",
            margin: "10px 0px",
            position: "relative",
            border: "none",
            zIndex: 1000,
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
            }
          }}
        />
      </Autocomplete>
        {!addressFormData.hasOwnProperty('zipcode') && <p className="text-[#ff0000] text-xs">Enter Complete Address*</p>}

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={mapCenter}
        zoom={10}
      >
        {markerPosition && <Marker position={markerPosition} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
