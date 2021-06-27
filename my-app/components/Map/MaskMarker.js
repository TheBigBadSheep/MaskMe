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
    >
      <Callout>
        <View style={{ maxHeight: 150, maxWidth: 300 }}>
          <Text style={styles.calloutTitle}>{title}</Text>
          <Text style={styles.calloutText}>{description}</Text>
        </View>
      </Callout>
    </Marker>
  );
};
