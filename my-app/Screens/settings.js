import React, {useState, useEffect} from 'react';
import { TextInput, Text, View , Image, CheckBox} from 'react-native';
import styles from '../Design/stylesheet';
import RoundCheckbox from 'react-native-round-checkbox';
import {storeMyStuff, getMyStuff} from '../StorageStuff/StorageFunctions';
import { Ionicons } from '@expo/vector-icons';


export default Settings=()=>{
    const [areNotifications, setNotifications] = useState(false)
    const [isGPS, setGPS] = useState(false)
    const [isDarkMode, setDarkMode] = useState(false)
    
      useEffect(()=>{
        getMyStuff('darkmode').then((returnedValue)=>{
          setDarkMode(JSON.parse(returnedValue));
        }).catch(()=> console.log("Fehler beim Darkmode Laden"));
  
        getMyStuff('GPS').then((returnedValue)=>{
            setGPS(JSON.parse(returnedValue));
          }).catch(()=> console.log("Fehler beim Darkmode Laden"));
  
        getMyStuff('notifications').then((returnedValue)=>{
            setNotifications(JSON.parse(returnedValue));
          }).catch(()=> console.log("Fehler beim Darkmode Laden"));
      },[]);


      const changeNotification=()=>{
          if(areNotifications===true){
              setNotifications(false);
              storeMyStuff('notifications',false);
          }else{
            setNotifications(true);
            storeMyStuff('notifications',true);
          }
      }

      const changeGPS=()=>{
        if(isGPS===true){
            setGPS(false);
            storeMyStuff('GPS',false);
        }else{
          setGPS(true);
          storeMyStuff('GPS',true);
        }
    }
    const changeDarkmode=()=>{
        if(isDarkMode===true){
            setDarkMode(false);
            storeMyStuff('darkmode',false);
        }else{
          setDarkMode(true);
          storeMyStuff('darkmode',true);
        }
    }

    return(
        
    <View style={styles.screen}>
    {/* upperContainer ist der mit Logo und Hinweisbalken */}
    <View style={styles.upperContainer}>
      <Image style={{height:'27%', width:'14%',alignSelf:'flex-start', marginLeft: 20, marginBottom: 20,}} source={require('../Design/pics/apple.png')} />
      <Text style={styles.fetteSchrift}>Einstellungen</Text>
      <View style={styles.textbalken}>
          <Text style={styles.weisserText}>Aktiviere für Benachrichtigungen bei Betreten einer Maskenzone "Push-Benachrichtigungen" und "GPS".</Text>
      </View>
    </View>

    <View style={styles.middleContainerSettings}>
        <View style={styles.placeforMapSettings}>
          
            <View style={styles.settingbox}>
                <RoundCheckbox
                    size={20}
                    borderColor={'#B2E0E6'}
                    backgroundColor={"#B2E0E6"}
                    iconColor={'white'}
                    checked={areNotifications}
                    onValueChange={(changeNotification)}
                    style={styles.checkbox}
                />
                <Text style={styles.settingText}>Push-Benachrichtigungen</Text>
            </View>
            <View style={styles.settingbox}>
                <RoundCheckbox
                    size={20}
                    borderColor={'#B2E0E6'}
                    backgroundColor={"#B2E0E6"}
                    iconColor={'white'}
                    checked={isGPS}
                    onValueChange={changeGPS}
                    style={styles.checkbox}
                />
                <Text style={styles.settingText}>GPS Daten nutzen </Text>
            </View>
            <View style={styles.settingbox}>
                <RoundCheckbox
                    size={20}
                    borderColor={'#B2E0E6'}
                    backgroundColor={"#B2E0E6"}
                    iconColor={'white'}
                    checked={isDarkMode}
                    onValueChange={changeDarkmode}
                    style={styles.checkbox}
                />
                <Text style={styles.settingText}>Dark Mode hahaha als wenn </Text>
                
            </View>
          
          
        </View>
   
        <Text style={styles.impressumHeading}>Impressum</Text>
        <View style={styles.impressum}>
            
          <Text style={styles.impressumBigText}>Studierendenprojekt der HAW Hamburg</Text>
          <Text style={styles.impressumText}>Hochschule für Angewandte Wissenschaften Hamburg</Text> 
          <Text style={styles.impressumText}>Studiengang: Media Systems, Studienfach Mobile Systeme 2021</Text>
          <Text style={styles.impressumText}>Berliner Tor 5</Text>
          <Text style={styles.impressumText}>20099 Hamburg</Text>
          <Text style={styles.impressumText}>Zu erreichen unter: Tel. +494042875-0</Text>
          

        </View>
    </View>
        
</View>
    );
};