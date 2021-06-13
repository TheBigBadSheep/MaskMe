import React, { useState } from 'react';
import { TextInput, Text, KeyboardAvoidingView, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { SearchBar, Button } from "react-native-elements";
import styles from '../Design/stylesheet';
import { Ionicons } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';

import { useFonts, Lobster_400Regular } from '@expo-google-fonts/lobster';

export default Home = () => {

    const [searchText, setSearchText] = useState("");
    const [data, setData] = useState();
    const [isInitialLoading, setIsInitialLoading] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const searchHandler = async (isLocation, lat, lng) => {
        let locationText = "&q=" + searchText;

        if (isLocation) {
            locationText = "&lat=" + lat + "&lon=" + lng;
        } else if (searchText === "") {
            Alert.alert("Invalid Location", "Please enter a correct city name", [{ title: "Ok" }]);
        }

        setIsInitialLoading(false);
        /*
        setIsLoading(true);
        try {
          let response = await fetch(
            "http://api.openweathermap.org/data/2.5/weather?appid=" +
              apiKey +
              "&units=metric" +
              locationText
          );
          response = await response.json();
    
          if (response.cod >= 400) {
            Alert.alert("Error!", response.message, [{ title: "Ok" }]);
          } else {
            setData(response);
            setWeatherIcon(getWeatherIcon(response.weather[0].id, response.weather[0].icon));
          }
        } catch (err) {
          Alert.alert("Something went wrong!", err.message, [{ title: "Ok" }]);
        }
        setIsLoading(false);
        */
    };

    const getLocationHandler = async () => {
        const hasPermission = await verifyPermission();
        if (!hasPermission) {
            return;
        }

        try {
            setIsLoading(true);
            const location = await Location.getCurrentPositionAsync({ timeout: 5000 });
            searchHandler(true, location.coords.latitude, location.coords.longitude);
            console.log("Moin");
        } catch (err) {
            Alert.alert("Could not get location!", "Please try again later or enter city name.", [{ title: "Ok" }]);
        }
    };

    const verifyPermission = async () => {
        const result = await Location.requestForegroundPermissionsAsync();
        if (result.status !== "granted") {
            Alert.alert("No Permissions!", "Please give location permissions to use this app.", [{ title: "Ok" }]);
            return false;
        } else {
            return true;
        }
    };

    //Um die Custom Schriftart zu laden 
    let [fontsLoaded] = useFonts({
        Lobster_400Regular,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {

        return (
            <View
                style={styles.screen}
                enabled true
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                {/* upperContainer ist der mit Logo und Hinweisbalken */}
                <View style={styles.upperContainer}>
                    <Image style={{ height: '27%', width: '14%', alignSelf: 'flex-start', marginLeft: 20, marginBottom: 20, }} source={require('../Design/pics/apple.png')} />

                    {/**Die Header haben ihren Style immer direkt definiert, nicht im Stylesheet, wegen der custom Font. */}
                    <Text style={{ flex: 1, fontFamily: 'Lobster_400Regular', color: '#B2E0E6', fontSize: 50, fontWeight: 'normal', alignSelf: 'flex-start', marginLeft: '4%', paddingBottom: 10, }} >Hinweis</Text>
                    <View style={styles.textbalken}>
                        <Text style={styles.weisserText}>In Bussen, Bahnen und an Haltestellen des HVV gilt eine FFP2-Maskenpflicht</Text>
                    </View>
                </View>

                {/* MittlererContainer ist die Map und Searchbar */}
                <View style={styles.middleContainer}>
                    <View style={styles.placeforMap}>
                        {/*Die Map hab ich einfach nur als Bild eingesetzt, als Platzhalter. Hier muss dann irgendwie Maps oder so rein */}
                        <ImageBackground source={require('../Design/pics/map.png')} style={styles.map}>

                            {/*Das ist die View der Searchbar, also ein Inputfeld und das Such-Icon */}
                            <View style={styles.searchContainer}>
                                <Button
                                    type="clear"
                                    icon={
                                        <Ionicons
                                            name="ios-pin"
                                            size={32}
                                            color='#CDC9C9'
                                        />
                                    }
                                    onPress={getLocationHandler}
                                />
                                <SearchBar
                                    placeholder="Search for Location..."
                                    autoCorrect={false}
                                    value={searchText}
                                    containerStyle={styles.searchbar}
                                    onChangeText={(val) => {
                                        setSearchText(val);
                                    }}
                                    onSubmitEditing={() => searchHandler(false)}
                                />
                                <Button
                                    type="clear"
                                    icon={
                                        <Ionicons
                                            name="ios-search"
                                            size={32}
                                            color='#CDC9C9'
                                        />
                                    }
                                    onPress={() => searchHandler(false)}
                                />
                            </View>


                        </ImageBackground>

                    </View>
                </View>
            </View >
        );
    }

}