import React, {useState} from 'react';
import { TextInput, Text, View , Image, ImageBackground, TouchableOpacity} from 'react-native';
import styles from '../Design/stylesheet';
import { Ionicons } from '@expo/vector-icons';


export default Home=()=> {
  
  //Das ist die Variable für die Eingabe eines Ortes. Die wird dann hier drin gespeichert
  const[currentText, changeCurrentText]=useState('');
  
  //Das ist die Funktion um die oben genannte Variable zu ändern (Wird bei tippen auf die Lupe aufgerufen)
  const changingText=newText=>{
     if(newText!=''){ changeCurrentText(newText);}
  };
 
   return (
    
    <View style={styles.screen}>
        {/* upperContainer ist der mit Logo und Hinweisbalken */}
        <View style={styles.upperContainer}>
          <Image style={{height:'27%', width:'14%',alignSelf:'flex-start', marginLeft: 20, marginBottom: 20,}} source={require('../Design/pics/apple.png')} />
          <Text style={styles.fetteSchrift}>Hinweis</Text>
          <View style={styles.textbalken}>
              <Text style={styles.weisserText}>In Bussen, Bahnen und Haltestellen gilt FFP-2 Maskenpflicht, lel</Text>
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

        
        
        
  
    

    
          
    </View>
  );
}