import React from "react";
import { Polyline } from "react-native-maps";

export default RestrictedRegion = ({ coordinates, width }) => {
  return (
    <Polyline
      coordinates={coordinates}
      strokeWidth={width}
      strokeColor="blue"
      lineJoin="bevel"
      lineCap="round"
    />
  );
};
