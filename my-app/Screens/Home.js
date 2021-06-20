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
                  strokeWidth = {5}
                  lineJoin = 'bevel'
                  tappable = {true}
                  lineCap = 'round'
                />
                {/*Heidi Kabel Platz*/}
                <Polyline
                  coordinates={[
                    {latitude: 53.55445977589822, longitude: 10.008051194837028},
                    {latitude: 53.55437877507065, longitude: 10.006982075282732},
                    {latitude: 53.55464939086548, longitude: 10.006390185906296},
                  ]}

                  strokeColor = 'blue'
                  strokeWidth = {5}
                  lineJoin = 'bevel'
                  tappable = {true}
                  lineCap = 'round'
                />
                {/*Hbhf*/}
                <Polyline
                  coordinates={[
                    {latitude: 53.55250564834807, longitude: 10.008648781370013},
                    {latitude: 53.55235447100425, longitude: 10.008622364151924},
                    {latitude: 53.55221387678931, longitude: 10.008412004030395},
                    {latitude: 53.55212795787248, longitude: 10.008078933837977},
                    {latitude: 53.551898839908006, longitude: 10.00626896029233},
                    {latitude: 53.55197174121449, longitude: 10.005953420104392},
                    {latitude: 53.55253672208164, longitude: 10.00570799995214},
                    {latitude: 53.55399209886635, longitude: 10.004051413991956},
                    {latitude: 53.55475751844839, longitude: 10.006247047751273},
                    {latitude: 53.55465338054462, longitude: 10.006369757822164}
                  ]}

                  strokeColor = 'blue'
                  strokeWidth = {3}
                  lineJoin = 'bevel'
                  tappable = {true}
                  lineCap = 'round'
                />
                {/*Mönckeberg*/}
                <Polyline
                  coordinates={[
                    {latitude: 53.55174896103052, longitude: 10.005527752804813},
                    {latitude: 53.551333391789, longitude: 10.00219330248168},
                    {latitude: 53.55083689640066, longitude: 9.99926515600658},
                    {latitude: 53.550681503517474, longitude: 9.997255643733572},
                    {latitude: 53.55063820403269, longitude: 9.995806083739213},
                    {latitude: 53.55044869954976, longitude: 9.994437701573629},
                  ]}

                  strokeColor = 'blue'
                  strokeWidth = {5}
                  lineJoin = 'bevel'
                  tappable = {true}
                  lineCap = 'round'
                />
                {/*Spital*/}
                <Polyline
                  coordinates={[
                    {latitude: 53.55100038399616, longitude: 10.000221037852201},
                    {latitude: 53.5511123675454, longitude: 10.00027564228698},
                    {latitude: 53.55126149409933, longitude: 10.000394949833908},
                    {latitude: 53.55158736141031, longitude: 10.001134036857563},
                    {latitude: 53.55160116929398, longitude: 10.001256443312679},
                    {latitude: 53.552757919212986, longitude: 10.005242887111732},
                  ]}

                  strokeColor = 'blue'
                  strokeWidth = {3}
                  lineJoin = 'bevel'
                  tappable = {true}
                  lineCap = 'round'
                />
                {/*Barkhof*/}
                <Polyline
                  coordinates={[
                    {latitude: 53.551585315193746, longitude: 10.00123395814627},
                    {latitude: 53.55121763181538, longitude: 10.001435911652754},
                  ]}

                  strokeColor = 'blue'
                  strokeWidth = {3}
                  lineJoin = 'bevel'
                  tappable = {true}
                  lineCap = 'round'
                />
                {/*Gerhart Hauptmann*/}
                <Polyline
                  coordinates={[
                    {latitude: 53.5517311887346, longitude: 9.998501093470187},
                    {latitude: 53.55154977857238, longitude: 9.998702133936218},
                    {latitude: 53.55122864688146, longitude: 9.999001798020075},
                    {latitude: 53.55085877141988, longitude: 9.999307229231512},
                  ]}

                  strokeColor = 'blue'
                  strokeWidth = {5}
                  lineJoin = 'bevel'
                  tappable = {true}
                  lineCap = 'round'
                />
                {/*Ida- Ehre*/}
                <Polyline
                  coordinates={[
                    {latitude: 53.55003098822024, longitude: 9.999257939454134},
                    {latitude: 53.55037363914539, longitude: 9.999337171915151},
                    {latitude: 53.550660456640955, longitude: 9.999348227608367},
                    {latitude: 53.550843274409026, longitude: 9.999296634377936},
                  ]}

                  strokeColor = 'blue'
                  strokeWidth = {5}
                  lineJoin = 'bevel'
                  tappable = {true}
                  lineCap = 'round'
                />
                {/*Lange Mühren*/}
                <Polyline
                  coordinates={[
                    {latitude: 53.55241547862794, longitude: 10.004251461674913},
                    {latitude: 53.55228252185258, longitude: 10.004351981909188},
                    {latitude: 53.55165378840961, longitude: 10.004697164587926},
                  ]}

                  strokeColor = 'blue'
                  strokeWidth = {3}
                  lineJoin = 'bevel'
                  tappable = {true}
                  lineCap = 'round'
                />
                {/*Bergstraße*/}
                <Polyline
                  coordinates={[
                    {latitude: 53.550641938097215, longitude: 9.995830170023543},
                    {latitude: 53.55092399243936, longitude: 9.995468071820257},
                    {latitude: 53.55159645340708, longitude: 9.99460440053372},
                    {latitude: 53.551980484379925, longitude: 9.994599036112026},
                  ]}

                  strokeColor = 'blue'
                  strokeWidth = {5}
                  lineJoin = 'bevel'
                  tappable = {true}
                  lineCap = 'round'
                />
                {/*Neumühlen / Große Elbstraße */}
                <Polyline
                  coordinates={[
                    {latitude: 53.544451648354745, longitude: 9.942577923660632},
                    {latitude: 53.54481930469194, longitude: 9.936072023105794},
                    {latitude: 53.54467071455547, longitude: 9.928069792214886},
                    {latitude: 53.54491555032277, longitude: 9.927255675090906},
                    {latitude: 53.54436154828007, longitude: 9.923092226910391},
                    {latitude: 53.544208718854314, longitude: 9.918542976581877},
                    {latitude: 53.54445845425422, longitude: 9.914589922942726},
                    {latitude: 53.5450936239327, longitude: 9.903314694499525},
                    {latitude: 53.54561259996048, longitude: 9.89252425954931},
                    {latitude: 53.54576545355824, longitude: 9.882950831847564},
                    {latitude: 53.54793154377634, longitude: 9.867315250052236},
                  ]}

                  strokeColor = 'blue'
                  strokeWidth = {8}
                  lineJoin = 'bevel'
                  tappable = {true}
                  lineCap = 'round'
                />
                {/*An der Alster*/}
                <Polyline
                  coordinates={[
                    {latitude: 53.56753970790602, longitude: 10.016388326838417},
                    {latitude: 53.56571340264784, longitude: 10.016767793186396},
                    {latitude: 53.56520864331895, longitude: 10.016906256152952},
                    {latitude: 53.564354795207976, longitude: 10.016927713830356},
                    {latitude: 53.56402344652965, longitude: 10.016916984994703},
                    {latitude: 53.56243676013966, longitude: 10.015071625230666},
                    {latitude: 53.560525010727574, longitude: 10.012443060456654},
                    {latitude: 53.55947988450903, longitude: 10.0094926305602},
                    {latitude: 53.557478778149395, longitude: 10.004310602825145},
                    {latitude: 53.55583975854121, longitude: 10.001136947288044},
                    
                  ]}

                  strokeColor = 'blue'
                  strokeWidth = {5}
                  lineJoin = 'bevel'
                  tappable = {true}
                  lineCap = 'round'
                />
                {/*Edward Rhein Ufer*/}
                <Polyline
                  coordinates={[
                    {latitude: 53.56754060188977, longitude: 10.016382305478759},
                    {latitude: 53.56798790015924, longitude: 10.01579002384025},
                    {latitude: 53.568336235318974, longitude: 10.01514575246664},
                    {latitude: 53.56915851931115, longitude: 10.012861353952081},
                    {latitude: 53.56984105443597, longitude: 10.010479214126283},
                    {latitude: 53.57005279577809, longitude: 10.009921611296628},
                    {latitude: 53.57399544001119, longitude: 10.007799533370484},
                    {latitude: 53.57474924308066, longitude: 10.007461424966586},
                    {latitude: 53.57494621454301, longitude: 10.00756987483465},
                    {latitude: 53.57512045775465, longitude: 10.007754877546216},
                    {latitude: 53.5753553061646, longitude: 10.008341782700153},
                    {latitude: 53.575404548419705, longitude: 10.008660752917418},
                    {latitude: 53.57564888137439, longitude: 10.011253245660438},
                  ]}

                  strokeColor = 'blue'
                  strokeWidth = {5}
                  lineJoin = 'bevel'
                  tappable = {true}
                  lineCap = 'round'
                />
                 {/*Krugkoppelbrücke*/}
                 <Polyline
                  coordinates={[
                    {latitude: 53.575670358257526, longitude: 10.011269016037344},
                    {latitude: 53.57966684750712, longitude: 10.008348550282223},
                    {latitude: 53.580390971814474, longitude: 10.0054406304098},
                    {latitude: 53.58081057254366, longitude: 10.002536264976749},
                    {latitude: 53.58081057254404, longitude: 10.000747264164223},
                    {latitude: 53.58037785922915, longitude: 9.9997202451673},
                    {latitude: 53.579538645029295, longitude: 9.998582794078107},
                    {latitude: 53.57837814166081, longitude: 9.99724656502614},
                    
                  ]}

                  strokeColor = 'blue'
                  strokeWidth = {3}
                  lineJoin = 'bevel'
                  tappable = {true}
                  lineCap = 'round'
                />
                 {/*Bellevue*/}
                 <Polyline
                  coordinates={[
                    {latitude: 53.57827685494789, longitude: 10.00940107360657},
                    {latitude: 53.577071074441236, longitude: 10.005847217679072},
                    {latitude: 53.577072021365055, longitude: 10.005032248805442},
                    {latitude: 53.57734852353317, longitude: 10.0043097813006},
                    {latitude: 53.57775191043593, longitude: 10.003920637657528},
                    {latitude: 53.578318160681086, longitude: 10.0037771010587560},
                    {latitude: 53.58071605491682, longitude: 10.003231722129508},
                    
                  ]}

                  strokeColor = 'blue'
                  strokeWidth = {3}
                  lineJoin = 'bevel'
                  tappable = {true}
                  lineCap = 'round'
                />
                 {/*Mühlenkamp*/}
                 <Polyline
                  coordinates={[
                    {latitude: 53.5796321529775, longitude: 10.013059422475214},
                    {latitude: 53.58104601038832, longitude: 10.01193071207474},
                    {latitude: 53.58169159386566, longitude: 10.01395809202547},
                    {latitude: 53.582185838126655, longitude: 10.015453967927044},
                  ]}

                  strokeColor = 'blue'
                  strokeWidth = {5}
                  lineJoin = 'bevel'
                  tappable = {true}
                  lineCap = 'round'
                />
                {/*Goldbekufer*/}
                <Polyline
                  coordinates={[
                    {latitude: 53.58744196736017, longitude: 10.016971011688451},
                    {latitude: 53.58525940585286, longitude: 10.012037129366883},
                    {latitude: 53.58479399212026, longitude: 10.011036835393007},
                    {latitude: 53.584581344482515, longitude: 10.010469100966965},
                    {latitude: 53.58443690396653, longitude: 10.010306891119942},
                    {latitude: 53.58443447987334, longitude: 10.010034354164148},
                    {latitude: 53.584549237316935, longitude: 10.009999107561084},
                    {latitude: 53.58546156635131, longitude: 10.0086851103388}
                  ]}

                  strokeColor = 'blue'
                  strokeWidth = {5}
                  lineJoin = 'bevel'
                  tappable = {true}
                  lineCap = 'round'
                />
                {/*Geibel*/}
                <Polyline
                  coordinates={[
                    {latitude: 53.58548579477884, longitude: 10.014851020298174},
                    {latitude: 53.586125862498264, longitude: 10.014148281554261},

                  ]}

                  strokeColor = 'blue'
                  strokeWidth = {5}
                  lineJoin = 'bevel'
                  tappable = {true}
                  lineCap = 'round'
                />
                 {/*Forsmann*/}
                 <Polyline
                  coordinates={[
                    {latitude: 53.58553781845881, longitude: 10.012727829305986},
                    {latitude: 53.58491525649883, longitude: 10.013342055151389},
                  ]}

                  strokeColor = 'blue'
                  strokeWidth = {5}
                  lineJoin = 'bevel'
                  tappable = {true}
                  lineCap = 'round'
                />
                {/*Goldbekplatz*/}
                <Polyline
                  coordinates={[
                    {latitude: 53.58443000328747, longitude: 10.010281941905882},
                    {latitude: 53.58430078084127, longitude: 10.011522169616471},
                    {latitude: 53.5842244617692, longitude: 10.011588705682344},
                    {latitude: 53.58354988775865, longitude: 10.009741964455845},
                    {latitude: 53.583646716882896, longitude: 10.009688859428735},
                    {latitude: 53.58442922318671, longitude: 10.010054904799066},
                    {latitude: 53.58442922318671, longitude: 10.010300246894068},
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