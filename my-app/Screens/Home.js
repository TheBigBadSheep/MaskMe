import React, { useState, useEffect } from "react";
import {
  TextInput,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import styles from "../Design/stylesheet";
import { Ionicons } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";
import { SearchBar } from "react-native-elements";
import MapView, { Marker, PROVIDER_GOOGLE, Polyline } from "react-native-maps";

import { useFonts, Lobster_400Regular } from "@expo-google-fonts/lobster";
import { element } from "prop-types";
import { Button } from "react-native-elements/dist/buttons/Button";
import {
  requestPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";

import maskData from "../data/mask-markers";
import MaskMarker from "../components/Map/MaskMarker";
import restrictedRegions from "../data/restricted-regions";
import RestrictedRegion from "../components/Map/RestrictedRegion";

export default Home = () => {
  //Das ist die Variable für die Eingabe eines Ortes. Die wird dann hier drin gespeichert
  const [currentText, changeCurrentText] = useState("");

  //Das ist die Funktion um die oben genannte Variable zu ändern (Wird bei tippen auf die Lupe aufgerufen)
  const changingText = (newText) => {
    if (newText != "") {
      changeCurrentText(newText);
    }
  };

  //Um die Custom Schriftart zu laden
  let [fontsLoaded] = useFonts({
    Lobster_400Regular,
  });

  const getLocationHandler = async () => {
    const hasPermission = await verifyPermission();
    if (!hasPermission) {
      return;
    }

    try {
      const location = await getCurrentPositionAsync({
        timeout: 5000,
      });
    } catch (err) {
      Alert.alert("Could not get location!", [{ title: "Ok" }]);
    }
  };

  const verifyPermission = async () => {
    const result = await requestPermissionsAsync();
    if (result.status !== "granted") {
      Alert.alert(
        "No Permissions!",
        "Please give location permissions to use this app.",
        [{ title: "Ok" }]
      );
      return false;
    } else {
      return true;
    }
  };

  useEffect(() => {
    getLocationHandler();
  }, []);

  if (!fontsLoaded) return <AppLoading />;

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View
        style={styles.screen}
        enabled
        true
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        {/* upperContainer ist der mit Logo und Hinweisbalken */}
        <View style={styles.upperContainer}>
          <Image
            style={{
              height: "42%",
              width: "12%",
              alignSelf: "flex-start",
              marginLeft: 20,
              marginBottom: 0,
            }}
            source={require("../Design/pics/logo.png")}
          />

          {/**Die Header haben ihren Style immer direkt definiert, nicht im Stylesheet, wegen der custom Font. */}
          <Text
            style={{
              flex: 1,
              fontFamily: "Lobster_400Regular",
              color: "#B2E0E6",
              fontSize: 50,
              fontWeight: "normal",
              alignSelf: "flex-start",
              marginLeft: "4%",
              paddingBottom: 15,
            }}
          >
            Hinweis
          </Text>
          <View style={styles.textbalken}>
            <Text style={styles.weisserText}>
              In Bussen, Bahnen und an Haltestellen des HVV gilt eine
              Maskenpflicht
            </Text>
          </View>
        </View>

        {/* MittlererContainer ist die Map und Searchbar */}
        <View style={styles.middleContainer}>
          <View style={(styles.placeforMap, StyleSheet.absoluteFillObject)}>
            <MapView
              style={(styles.map, StyleSheet.absoluteFillObject)}
              provider={PROVIDER_GOOGLE}
              loadingEnabled={true}
              showsUserLocation={true}
              showsMyLocationButton={true}
              showsCompass={true}
              initialRegion={{
                latitude: 53.5502,
                longitude: 9.992,
                latitudeDelta: 0.1,
                longitudeDelta: 0.05,
              }}
            >
              {/* All Mask markers */}
              {maskData.map((point) => (
                <MaskMarker
                  key={`${point.coordinate.latitude};${point.coordinate.longitude}`}
                  coordinate={point.coordinate}
                  title={point.title}
                  description={point.description}
                />
              ))}

              {/* All restricted regions */}
              {restrictedRegions.map((region) => (
                <RestrictedRegion
                  key={`${region.coordinates[0].latitude};${region.coordinates[0].longitude}`}
                  coordinates={region.coordinates}
                  width={region.width}
                />
              ))}
            </MapView>

            {/*Das ist die View der Searchbar, also ein Inputfeld und das Such-Icon */}
            <View style={styles.searchContainer}>
              <SearchBar
                containerStyle={styles.searchbar}
                placeholder="Suche einen Ort..."
                autocorrect={false}
                lightTheme={true}
                value={currentText}
                onChangeText={(val) => {
                  changeCurrentText(val);
                }}
                onSubmitEditing={changingText}
              />

              <Button
                type="clear"
                icon={<Ionicons name="pin-outline" size={32} />}
                //onPress={searchHandler}
              />

              {/*
              <Button
                type="clear"
                icon={<Ionicons name="search-outline" size={32} />}
                onPress={changingText}
              />
              
              <TouchableOpacity onPress={() => console.log('dhjksds')}>
                <Ionicons name="search-outline" size={32} color='#CDC9C9' style={{ marginLeft: '3%' }} />
              </TouchableOpacity>
              */}
            </View>

            <View style={{ position: "absolute", top: 100, left: 50 }} />
            {/*</ImageBackground>*/}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );

  // New Branch was created
};
