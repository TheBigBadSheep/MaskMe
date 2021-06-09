import React, {useState} from 'react';
import { TextInput, Text,ScrollView, KeyboardAvoidingView, View , Keyboard, Image, ImageBackground, TouchableOpacity} from 'react-native';
import styles from '../Design/stylesheet';
import { Ionicons } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';

import { useFonts,Lobster_400Regular} from '@expo-google-fonts/lobster';

export default Home=()=> {
  
 //Das ist die Variable für die Eingabe eines Ortes. Die wird dann hier drin gespeichert
  const[currentText, changeCurrentText]=useState('');
  
  //Das ist die Funktion um die oben genannte Variable zu ändern (Wird bei tippen auf die Lupe aufgerufen)
  const changingText=newText=>{
     if(newText!=''){ changeCurrentText(newText);}
  };

  //Um die Custom Schriftart zu laden 
  let [fontsLoaded]=useFonts({
    Lobster_400Regular,
  });

  if(!fontsLoaded){
    return <AppLoading/>;
  }else{
 
   return (
    <KeyboardAvoidingView
    style={styles.screen}
    enabled true
      behavior={Platform.OS === "ios" ? "padding" : "heigh"}
      
    >
        {/* upperContainer ist der mit Logo und Hinweisbalken */}
        <View style={styles.upperContainer}>
          <Image style={{height:'27%', width:'14%',alignSelf:'flex-start', marginLeft: 20, marginBottom: 20,}} source={require('../Design/pics/apple.png')} />
          
          {/**Die Header haben ihren Style immer direkt definiert, nicht im Stylesheet, wegen der custom Font. */}
          <Text style={{flex:1,fontFamily:'Lobster_400Regular', color:'#B2E0E6',fontSize:50,fontWeight:'normal', alignSelf:'flex-start', marginLeft: '4%', paddingBottom:0,}} >Hinweis</Text>
          <View style={styles.textbalken}>
              <Text style={styles.weisserText }>In Bussen, Bahnen und  an Haltestellen gilt eine FFP-2 Maskenpflicht</Text>
          </View>
        </View>

        {/* MittlererContainer ist die Map und Searchbar */}
        <View style={styles.middleContainer}>
            <View style={styles.placeforMap}>
              {/*Die Map hab ich einfach nur als Bild eingesetzt, als Platzhalter. Hier muss dann irgendwie Maps oder so rein */}
              <ImageBackground source={require('../Design/pics/map.png')}style={styles.map}>

                {/*Das ist die View der Searchbar, also ein Inputfeld und das Such-Icon */}
                <View style={styles.searchContainer}>
                <TextInput style={styles.placeinput} placeholder="suche einen Ort" onChangeText={()=>changingText} value={currentText}>
                </TextInput>
                <TouchableOpacity onPress={()=>console.log('dhjksds')}>
                  <Ionicons name="search-outline" size={32} color='#CDC9C9' style={{marginLeft:'5%'}}/>
                </TouchableOpacity>
                
                </View>
              </ImageBackground>
              
            </View>
        </View>

        
        
        
  
    

    </KeyboardAvoidingView>
  );
}

// New Branch was created
}