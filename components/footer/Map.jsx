import React, { useState } from "react";

import {
  LoadScript,
  GoogleMap,
  Marker
} from "@react-google-maps/api";

function Map() {
  return (
    <LoadScript id="script-loader" googleMapsApiKey="" version={"weekly"} loadingElement={<div>Cargando...</div>}>
      <GoogleMap mapContainerStyle={{height: "8em", width: "8em"}} zoom={15} center={{ lat: 40.400954, lng: -3.701046 }}>
        <Marker position={{ lat: 40.400954, lng: -3.701046 }}/>
      </GoogleMap>
    </LoadScript>
  );
}

export default Map