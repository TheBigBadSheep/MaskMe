import React, { useState, useEffect } from "react";
import {
  Text,
  TextInput,
  View,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";

import styles from "../Design/stylesheet";
import { Ionicons } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";
import { SearchBar } from "react-native-elements";

import { useFonts, Lobster_400Regular } from "@expo-google-fonts/lobster";
import { Button } from "react-native-elements/dist/buttons/Button";
import * as Location from "expo-location";

import MapComp from "../components/Map/MapComp";
import debounce from 'lodash/debounce';

export default Home = () => {
  //Das ist die Variable für die Eingabe eines Ortes. Die wird dann hier drin gespeichert
  const [currentText, changeCurrentText] = useState("");
  const [zwischenText, changeZwischenText] = useState("");

  const [coords, setCoords] = useState(null);

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
      await Location.getCurrentPositionAsync({ timeout: 5000 });
    } catch {
      Alert.alert("Could not get location!", [{ title: "Ok" }]);
    }
  };

  const verifyPermission = async () => {
    const result = await Location.requestPermissionsAsync();
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

  useEffect(() => {
    const debounceFn = async () => {
      const locations = await Location.geocodeAsync("Hamburg, " + zwischenText);
      if (locations.length > 0) {
        const location = locations[0];
        setCoords([location.latitude, location.longitude]);
      } else {
        setCoords(null);
      }
    };
    debounce(debounceFn, 0)();
  }, [zwischenText]);

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
            style={styles.logo}
            source={require("../Design/pics/logo2.png")}
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
          <MapComp coords={coords}/>

          {/*Das ist die View der Searchbar */}
          <View style={styles.searchContainer}>
            <SearchBar
              inputContainerStyle={{backgroundColor: 'white'}}
              containerStyle={styles.searchbar}
              placeholder="Suche einen Ort in Hamburg..."
              placeholderTextColor='#BEBEBE'
              autocorrect={false}
              lightTheme={true}
              value={currentText}
              round={true}
              searchIcon={false}
              onChangeText={(val) => {
                changeCurrentText(val);
              }}
            />

            <Button
              type="clear"
              icon={<Ionicons name="search" paddingRight={2} size={24} color={'black'} />}
              onPress={()=>changeZwischenText(currentText)}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
