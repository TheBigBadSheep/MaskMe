import React, {useState} from 'react';
import { Text, View , Image, ScrollView} from 'react-native';
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

    {/* MittlererContainer ist hier für die Aufzählung von Orten */}
    <View style={styles.middleContainerList}>
    <ScrollView style={styles.scrollView}>
      
        <View style={styles.listPointBox}>
                <Ionicons name="arrow-forward-outline" size={22} color='#B2E0E6' />
                <Text style={styles.listText}><Text style={styles.listTextBeginning}>Steindamm: </Text> im räumlichen Bereich von der Hausnummer 33 bis zum Steintorplatz, täglich von 8 Uhr bis 22 Uhr </Text>
        </View>

        <View style={styles.listPointBox}>
                <Ionicons name="arrow-forward-outline" size={22} color='#B2E0E6' />
                <Text style={styles.listText}><Text style={styles.listTextBeginning}>Stralsunder Straße:</Text> täglich von 8 Uhr bis 22 Uhr </Text>
        </View>
        <View style={styles.listPointBox}>
                <Ionicons name="arrow-forward-outline" size={22} color='#B2E0E6' />
                <Text style={styles.listText}><Text style={styles.listTextBeginning}>Steintorplatz:</Text> einschließlich der angrenzenden öffentlichen Wege, Straßen und Plätze, abgegrenzt durch die Bahnüberführung der Straße Steintordamm, dem Gebäude des Museums für Kunst und Gewerbe, dem Gebäude des Zentralen Omnibusbahnhofs, dem Gebäude mit der Hausnummer Steindamm 2, dem Gebäude mit der Hausnummer Steindamm 1, den Gebäuden mit den Hausnummern Steintorplatz 3 und Kirchenallee 57 sowie dem Gebäude des Hauptbahnhofs, täglich von 8 Uhr bis 22 Uhr</Text>
        </View>
        <View style={styles.listPointBox}>
                <Ionicons name="arrow-forward-outline" size={22} color='#B2E0E6' />
                <Text style={styles.listText}><Text style={styles.listTextBeginning}>Ballindamm :</Text>im räumlichen Bereich vor dem Gebäude mit der Hausnummer 40, abgegrenzt durch die Straßen Ballindamm und Bergstraße, täglich von 10 Uhr bis 20 Uhr</Text>
        </View>

        <View style={styles.listPointBox}>
                <Ionicons name="arrow-forward-outline" size={22} color='#B2E0E6' />
                <Text style={styles.listText}><Text style={styles.listTextBeginning}>Straße Große Freiheit: </Text>im räumlichen Bereich von der Hausnummer 1 bis zur Hausnummer 47, freitags, sonnabends sowie an Feiertagen und tags zuvor, jeweils von 18 Uhr bis 4 Uhr am Folgetag</Text>
        </View>
        <View style={styles.listPointBox}>
                <Ionicons name="arrow-forward-outline" size={22} color='#B2E0E6' />
                <Text style={styles.listText}><Text style={styles.listTextBeginning}>Straße Hamburger Berg :</Text>im räumlichen Bereich der Hausnummern 1 bis 39, freitags, sonnabends sowie an Feiertagen und tags zuvor, jeweils von 18 Uhr bis 4 Uhr am Folgetag</Text>
        </View>
        <View style={styles.listPointBox}>
                <Ionicons name="arrow-forward-outline" size={22} color='#B2E0E6' />
                <Text style={styles.listText}><Text style={styles.listTextBeginning}></Text></Text>
        </View>
        <View style={styles.listPointBox}>
                <Ionicons name="arrow-forward-outline" size={22} color='#B2E0E6' />
                <Text style={styles.listText}><Text style={styles.listTextBeginning}></Text></Text>
        </View>
        <View style={styles.listPointBox}>
                <Ionicons name="arrow-forward-outline" size={22} color='#B2E0E6' />
                <Text style={styles.listText}><Text style={styles.listTextBeginning}></Text></Text>
        </View>
        <View style={styles.listPointBox}>
                <Ionicons name="arrow-forward-outline" size={22} color='#B2E0E6' />
                <Text style={styles.listText}><Text style={styles.listTextBeginning}></Text></Text>
        </View>

        <View style={styles.listPointBox}>
                <Ionicons name="arrow-forward-outline" size={22} color='#B2E0E6' />
                <Text style={styles.listText}><Text style={styles.listTextBeginning}></Text></Text>
        </View>
        
    
       
    </ScrollView>
    <View >
         
          
        </View>
    </View>

    
    
    




      
</View>
    );
};