import React, { useState, useEffect } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { View, StyleSheet } from "react-native";
import styles from "../../Design/stylesheet";

import { getMyStuff } from '../../StorageStuff/StorageFunctions';
import maskData from "../../data/mask-markers";
import MaskMarker from "./MaskMarker";
import restrictedRegions from "../../data/restricted-regions";
import RestrictedRegion from "./RestrictedRegion";


export default MapComp = () => {
    const [isGPS, setGPS] = useState(false);
    useEffect(() => {
    
        getMyStuff('GPS').then((returnedValue) => {
          setGPS(JSON.parse(returnedValue));
        }).catch(() => console.log("Fehler bei der Standortabfrage"));
    
      }, []);

    return (
        <View style={(styles.placeforMap, StyleSheet.absoluteFillObject)}>
            <MapView
                style={(styles.map, StyleSheet.absoluteFillObject)}
                provider={PROVIDER_GOOGLE}
                loadingEnabled={true}
                showsUserLocation={isGPS}
                showsMyLocationButton={true}
                showsCompass={true}
                initialRegion={{
                    latitude: 53.5502,
                    longitude: 9.992,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.05,
                }}
            >
                {/* Alle MaskMarker */}
                {maskData.map((point) => (
                    <MaskMarker
                        key={`${point.coordinate.latitude};${point.coordinate.longitude}`}
                        coordinate={point.coordinate}
                        title={point.title}
                        description={point.description}
                    />
                ))}

                {/* Alle RestrictedRegions */}
                {restrictedRegions.map((region) => (
                    <RestrictedRegion
                        key={`${region.coordinates[0].latitude};${region.coordinates[0].longitude}`}
                        coordinates={region.coordinates}
                        width={region.width}
                    />
                ))}
            </MapView>
        </View>
    );
};