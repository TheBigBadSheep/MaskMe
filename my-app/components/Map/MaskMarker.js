import React from "react";

import { Marker, Callout } from "react-native-maps";
import { View, Text } from "react-native";
import mask from "../../Design/Icons/mask2.png";

export default MaskMarker = ({ coordinate, title, description }) => {
  return (
    <Marker
      coordinate={coordinate}
      image={mask}
     // title={title}
    // description={description}
    >
    <Callout>
          <View style={{height: 120, width: 200}}>
          <Text style={{
          flex: 0,
          color: "black",
          fontSize: 20,
          fontWeight: 'bold',
          alignSelf: "flex-start",
          paddingBottom: 0,
          }}>{title} </Text>
          <Text style ={{fontSize: 12 }}>{description} </Text>
          </View>
          </Callout>  
    </Marker>
  );
};
