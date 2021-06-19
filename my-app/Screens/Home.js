import React, { useState } from 'react';
import { TextInput, Text, KeyboardAvoidingView, View, Image, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import styles from '../Design/stylesheet';
import { Ionicons } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import MapView from 'react-native-maps';

import { useFonts, Lobster_400Regular } from '@expo-google-fonts/lobster';

export default Home = () => {

  //Das ist die Variable für die Eingabe eines Ortes. Die wird dann hier drin gespeichert
  const [currentText, changeCurrentText] = useState('');
  
  //Das ist die Funktion um die oben genannte Variable zu ändern (Wird bei tippen auf die Lupe aufgerufen)
  const changingText = newText => {
    if (newText != '') { changeCurrentText(newText); }
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
          <View style={styles.placeforMap, StyleSheet.absoluteFillObject}>
            
            {/*Die Map hab ich einfach nur als Bild eingesetzt, als Platzhalter. Hier muss dann irgendwie Maps oder so rein 
            <ImageBackground source={require('../Design/pics/map.png')} style={styles.map}>*/}
            <MapView
              style={styles.map, StyleSheet.absoluteFillObject}
              initialRegion={{
                latitude: 53.5502,
                longitude: 9.9920,
                latitudeDelta: 0.1,
                longitudeDelta: 0.05,
              }}>
             
            </MapView>

             {/*Das ist die View der Searchbar, also ein Inputfeld und das Such-Icon */}
             <View style={styles.searchContainer}>
                
                <TextInput
                 style={styles.placeinput}
                 placeholder="Suche einen Ort" 
                 onChangeText={() => changingText } 
                 //value={currentText}
                 >
                </TextInput>

                <TouchableOpacity onPress={() => console.log('dhjksds')}>
                  <Ionicons name="search-outline" size={30} color='#CDC9C9' style={{ marginLeft: '3%' }} />
                </TouchableOpacity>

              </View>
              
            {/*kp wieso*/}
            <View style={{ position: 'absolute', top: 100, left: 50 }} />
            {/*</ImageBackground>*/}

          </View>
        </View>







      </View>
    );
  }

  // New Branch was created
}