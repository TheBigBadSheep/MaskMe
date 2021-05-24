import React, {useState} from 'react';
import { TextInput, Text, View , Image, ImageBackground, TouchableOpacity} from 'react-native';
import styles from '../Design/stylesheet';
import { Ionicons } from '@expo/vector-icons';

export default List=()=>{
    return(
        
    <View style={styles.screen}>
    {/* upperContainer ist der mit Logo und Hinweisbalken */}
    <View style={styles.upperContainer}>
      <Image style={{height:'27%', width:'14%',alignSelf:'flex-start', marginLeft: 20, marginBottom: 20,}} source={require('../Design/pics/apple.png')} />
      <Text style={styles.fetteSchrift}>Liste</Text>
      <View style={styles.textbalken}>
          <Text style={styles.weisserText}>Maskenpflichtige Orte, Straßen und Ausnahmen, weitergehend als Beförderungsmittel</Text>
      </View>
    </View>

    {/* MittlererContainer ist die Map und Searchbar */}
    <View style={styles.middleContainerList}>
        <View >
         
          
        </View>
    </View>

    
    
    




      
</View>
    );
};