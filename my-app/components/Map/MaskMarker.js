import React from "react";

import { Marker } from "react-native-maps";

import mask from "../../Design/Icons/mask2.png";

export default MaskMarker = ({ coordinate, title, description }) => {
  return (
    <Marker
      coordinate={coordinate}
      image={mask}
      title={title}
      description={description}
    />
  );
};
