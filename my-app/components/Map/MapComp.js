import React, { useState, useEffect } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { View, StyleSheet } from "react-native";
import styles from "../../Design/stylesheet";

import { getMyStuff } from "../../StorageStuff/StorageFunctions";
import maskData from "../../data/mask-markers";
import MaskMarker from "./MaskMarker";
import restrictedRegions from "../../data/restricted-regions";
import RestrictedRegion from "./RestrictedRegion";

export default MapComp = ({ coords }) => {
    const [isReady, setReady] = useState(false);
    const [hasGPS, setGPS] = useState(false);

    useEffect(() => {
        getMyStuff("GPS")
            .then((returnedValue) => {
                setGPS(JSON.parse(returnedValue));
            })
            .catch(() => console.log("Fehler bei der Standortabfrage"));
    }, []);

    return (
        <View style={(styles.placeforMap, StyleSheet.absoluteFillObject)}>
            <MapView
                style={{
                    ...styles.map,
                    ...StyleSheet.absoluteFillObject,
                    marginBottom: isReady ? 0 : 1, // render bugfix for denied location requests
                }}
                provider={PROVIDER_GOOGLE}
                loadingEnabled={true}
                showsUserLocation={hasGPS}
                showsMyLocationButton={hasGPS}
                showsCompass={true}
                onMapReady={() => setReady(true)}
                initialRegion={{
                    latitude: 53.5502,
                    longitude: 9.992,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.05,
                }}
                region={coords && {
                    latitude: coords[0],
                    longitude: coords[1],
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.005,
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
