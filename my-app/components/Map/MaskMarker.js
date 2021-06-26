import React from "react";

import { Marker, Callout } from "react-native-maps";
import { View, Text } from "react-native";
import mask from "../../Design/Icons/mask2.png";
import styles from "../../Design/stylesheet";

export default MaskMarker = ({ coordinate, title, description }) => {
  return (
    <Marker
      coordinate={coordinate}
      image={mask}
     // title={title}
    // description={description}
    >
    <Callout>
          <View style={{height: 120, width: 300}}>
          <Text style={styles.calloutStyle}>{title} </Text>
          <Text style ={{fontSize: 12 }}>{description} </Text>
          </View>
          </Callout>  
    </Marker>
  );
};
