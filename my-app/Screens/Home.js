import React, { useState } from 'react';
import { TextInput, Text, KeyboardAvoidingView, View, Image, ImageBackground, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import styles from '../Design/stylesheet';
import { Ionicons } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import { SearchBar } from 'react-native-elements';
import MapView, { Marker, PROVIDER_GOOGLE, Polyline, Polygon } from 'react-native-maps';

import { useFonts, Lobster_400Regular } from '@expo-google-fonts/lobster';
import { element } from 'prop-types';
import { Button } from 'react-native-elements/dist/buttons/Button';

export default Home = () => {

  //Das ist die Variable für die Eingabe eines Ortes. Die wird dann hier drin gespeichert
  const [currentText, changeCurrentText] = useState('');

  //Das ist die Funktion um die oben genannte Variable zu ändern (Wird bei tippen auf die Lupe aufgerufen)
  const changingText = (newText) => {
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
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
                provider={PROVIDER_GOOGLE}
                loadingEnabled
                showsUserLocation={true}
                initialRegion={{
                  latitude: 53.5502,
                  longitude: 9.9920,
                  latitudeDelta: 0.1,
                  longitudeDelta: 0.05,
                }}>

                <Marker
                  draggable
                  coordinate={{
                    latitude: 53.5,
                    longitude: 10,
                  }}
                  /*onDragEnd={
                    (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
                  }*/
                  title={'Meep'}
                  description={'Moin Servus Moin'}
                />
                {/*Steindamm*/}
                <Polyline
                  coordinates={[
                    {latitude:53.55421330963017, longitude: 10.01366087307381 },
                    {latitude: 53.55269094703095, longitude: 10.010221067025498},
                    {latitude: 53.552611359112966, longitude: 10.010099858346232},
                    {latitude: 53.55236311964756, longitude: 10.00993718354813},
                    ]}

                  strokeColor = 'blue'
                  strokeWidth = {5}
                  lineJoin = 'bevel'
                  tappable = {true}
                  lineCap = 'round'
                  
                />
                {/*Stralsunder*/}
                <Polyline
                  coordinates={[
                    {latitude: 53.55406914929962, longitude: 10.013328578022536},
                    {latitude:53.554091683422754, longitude:10.013294966037519 },
                    {latitude: 53.554437580720325, longitude: 10.012818917400187},
                    ]}

                  strokeColor = 'blue'
                  strokeWidth = {5}
                  lineJoin = 'bevel'
                  tappable = {true}
                  lineCap = 'round'
                  
                />
                  {/*Ballindam, Jungfernstieg, Lombarsbrücke*/}
                  <Polygon
                  coordinates={[
                    {latitude: 53.55199270657042, longitude: 9.99471128043142 },
                    {latitude: 53.552069107308114, longitude: 9.995048857348774 },
                    {latitude: 53.55545390427445, longitude: 10.000513201614362},
                    {latitude: 53.55560908042299, longitude: 10.000597595837725},
                    {latitude: 53.55590749449631, longitude: 10.000408713531497},
                    {latitude: 53.55627275046821, longitude: 9.999596921457341},
                    {latitude: 53.55697460601956, longitude: 9.997177620343157},
                    {latitude: 53.557616769772665, longitude: 9.993962602179044},
                    {latitude: 53.557537991846296, longitude: 9.993343711158996},
                    {latitude: 53.55736849944434, longitude: 9.992957908995056},
                    {latitude: 53.55609847840613, longitude: 9.99224256744652},
                    {latitude: 53.555007471249, longitude: 9.991290118310278},
                    {latitude: 53.55456819565169, longitude: 9.991040954409078},
                    {latitude: 53.55418621316441, longitude: 9.991065067049348},
                    {latitude: 53.553848003179105, longitude: 9.991639828739862},
                    {latitude: 53.55204379268658, longitude: 9.994536467638058},
                    ]}

                  strokeColor = 'blue'
                  strokeWidth = {5}
                  fillColor = 'lightblue'
                  lineJoin = 'bevel'
                  tappable = {true}
                  lineCap = 'round'
                  
                />
                 {/*Große Freiheit*/}
                 <Polyline
                  coordinates={[
                    {latitude: 53.550115171491385, longitude: 9.9573875081496},
                    {latitude: 53.55145097257658, longitude: 9.95783293337773}
                    ]}

                  strokeColor = 'blue'
                  strokeWidth = {5}
                  lineJoin = 'bevel'
                  tappable = {true}
                  lineCap = 'round'
                  
                />
                {/*Hamburger Berg*/}
                <Polyline
                  coordinates={[
                    {latitude: 53.54965353808731, longitude: 9.961293940914421},
                    {latitude: 53.54990539493763, longitude: 9.961286750175182}
                    ]}

                  strokeColor = 'blue'
                  strokeWidth = {5}
                  lineJoin = 'bevel'
                  tappable = {true}
                  lineCap = 'round'
                />
                {/*Talstraße*/}
                <Polyline
                  coordinates={[
                    {latitude: 53.54976329164392, longitude: 9.960099368422284},
                    {latitude: 53.55119951608849, longitude: 9.96014543019871}
                    ]}

                  strokeColor = 'blue'
                  strokeWidth = {5}
                  lineJoin = 'bevel'
                  tappable = {true}
                  lineCap = 'round'
                />
                {/*Hans-Albers-Platz*/}
                <Polyline
                  coordinates={[
                    {latitude: 53.54924365289789, longitude: 9.960896938129562},
                    {latitude: 53.548620248246586, longitude: 9.961018174635164}
                    ]}

                  strokeColor = 'blue'
                  strokeWidth = {5}
                  lineJoin = 'bevel'
                  tappable = {true}
                  lineCap = 'round'
                />
                {/*Reeperbahn*/}
                <Polyline
                  coordinates={[
                    {latitude: 53.54998432660257, longitude: 9.968189184248049},
                    {latitude: 53.549993097274665, longitude: 9.967301112283495},
                    {latitude: 53.54984210379161, longitude: 9.965742100400627}
                    ]}

                  strokeColor = 'blue'
                  strokeWidth = {5}
                  lineJoin = 'bevel'
                  tappable = {true}
                  lineCap = 'round'
                />
                {/*Schulterblatt*/}
                <Polyline
                  coordinates={[
                    {latitude: 53.56179182048877,longitude: 9.962044686009706},
                    {latitude: 53.56272856043343, longitude: 9.961060315330919},
                    ]}

                  strokeColor = 'blue'
                  strokeWidth = {5}
                  lineJoin = 'bevel'
                  tappable = {true}
                  lineCap = 'round'
                />
                {/*Alma Wartenberg*/}
                <Polyline
                  coordinates={[
                    {latitude: 53.55367608464345, longitude: 9.928860436872931},
                    {latitude: 53.55432794089626, longitude: 9.92860444217286},
                    {latitude: 53.55416219370066, longitude: 9.928250383256536},
                  ]}

                  strokeColor = 'blue'
                  strokeWidth = {5}
                  lineJoin = 'bevel'
                  tappable = {true}
                  lineCap = 'round'
                />
                {/*Hohenesch*/}
                <Polyline
                  coordinates={[
                    {latitude: 53.55465218243033, longitude: 9.928883047088906},
                    {latitude: 53.55469028313308, longitude: 9.928588611507738},
                  ]}

                  strokeColor = 'blue'
                  strokeWidth = {5}
                  lineJoin = 'bevel'
                  tappable = {true}
                  lineCap = 'round'
                />
                {/*Ottenser Hauptstraße*/}
                <Polyline
                  coordinates={[
                    {latitude: 53.55223936923548, longitude: 9.932821749017172},
                    {latitude: 53.552147332539754, longitude: 9.932044360856846},
                    {latitude: 53.55208033507465, longitude: 9.931489517719456},
                  ]}

                  strokeColor = 'blue'
                  strokeWidth = {5}
                  lineJoin = 'bevel'
                  tappable = {true}
                  lineCap = 'round'
                />
                 {/*Ottenser Hauptstraße Klein*/}
                 <Polyline
                  coordinates={[
                    {latitude: 53.552081675025725, longitude: 9.931485006785888},
                    {latitude: 53.55210311422539, longitude: 9.931216607062533},
                    {latitude: 53.55209366204509, longitude: 9.930465599412424},
                  ]}

                  strokeColor = 'blue'
                  strokeWidth = {3}
                  lineJoin = 'bevel'
                  tappable = {true}
                  lineCap = 'round'
                />
                {/*Bahnhof Altona*/}
                <Polyline
                  coordinates={[
                    {latitude: 53.551508702616324, longitude: 9.936308527871184},
                    {latitude: 53.5519308203195, longitude: 9.93663368105499},
                    {latitude: 53.55243163247197, longitude: 9.937013026436098},
                    {latitude: 53.55247098175304, longitude: 9.93616401535714},
                    {latitude: 53.552553938110016, longitude: 9.93388741003505},
                    {latitude: 53.5521340454889, longitude: 9.933717100389721},
                    {latitude: 53.551567436782264, longitude: 9.93371710039908},
                    {latitude: 53.551508702616324, longitude: 9.936308527871184},
                  ]}

                  strokeColor = 'blue'
                  strokeWidth = {5}
                  lineJoin = 'bevel'
                  tappable = {true}
                  lineCap = 'round'
                />
                {/*Kirchenalle*/}
                <Polyline
                  coordinates={[
                    {latitude: 53.55245865384305, longitude: 10.008649972244692},
                    {latitude: 53.55445065704137, longitude: 10.00810113259947},
                    {latitude: 53.554973637881005, longitude: 10.00790337108021},
                  ]}

                  strokeColor = 'blue'
                  strokeWidth = {3}
                  lineJoin = 'bevel'
                  tappable = {true}
                  lineCap = 'round'
                />

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
                  icon={<Ionicons name="search-outline" size={32} />}
                  onPress={changingText}
                />
                {/*
                <TouchableOpacity onPress={() => console.log('dhjksds')}>
                  <Ionicons name="search-outline" size={32} color='#CDC9C9' style={{ marginLeft: '3%' }} />
                </TouchableOpacity>
                */}
              </View>

              <View style={{ position: 'absolute', top: 100, left: 50 }} />
              {/*</ImageBackground>*/}

            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  // New Branch was created
}