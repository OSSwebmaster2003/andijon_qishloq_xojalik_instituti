import { Placemark, YMaps, Map } from "@pbe/react-yandex-maps";
import React from "react";
import "./andijanMap.scss";

function AndijanMap(props) {
  const defaultState = {
    center: [40.8154, 72.2837],
    zoom: 5,
  };
  return (
    <div className="andijan_map">
      <YMaps className="map">
        <Map defaultState={defaultState}>
          <Placemark geometry={[55.684758, 37.738521]} />
        </Map>
      </YMaps>
    </div>
  );
}

export default AndijanMap;
