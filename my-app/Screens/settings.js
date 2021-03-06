import React, {useState, useEffect} from 'react';
import { Text, View , Image, TouchableOpacity, ScrollView} from 'react-native';
import styles from '../Design/stylesheet';
import RoundCheckbox from 'react-native-round-checkbox';
import {storeMyStuff, getMyStuff} from '../StorageStuff/StorageFunctions';
import { useDimensions } from '@react-native-community/hooks';


export default Settings=()=>{
    const [areNotifications, setNotifications] = useState(false)
    const [isGPS, setGPS] = useState(false)
    const [isDarkMode, setDarkMode] = useState(false)
    const {height} = useDimensions().window;
    
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
    const changeDarkMode=()=>{
        if(isDarkMode===true){
            setDarkMode(false);
            storeMyStuff('darkmode',false);
        }else{
          setDarkMode(true);
          storeMyStuff('darkmode',true);
        }
    }

    return(
    <View style={Platform.select({ios: styles.wrapperIOS, android:{height: height} }) } >  
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>   
    <View style={styles.screen}>
    {/* upperContainer ist der mit Logo und Hinweisbalken */}
    <View style={styles.upperContainer}>
    <Image style={styles.logoStyle} source={require('../Design/pics/apple.png')} />
      <Text style={{flex:1,fontFamily:'Lobster_400Regular', color:'#B2E0E6',fontSize:50,fontWeight:'normal', alignSelf:'flex-start', marginLeft: '4%', marginTop: '5%',paddingBottom:0,}}>Einstellungen</Text>
      <View style={styles.textbalken}>
          <Text style={styles.weisserText}>Aktiviere f??r Benachrichtigungen bei Betreten einer Maskenzone "Push-Benachrichtigungen" und "GPS".</Text>
      </View>
    </View>

    <View style={styles.middleContainerSettings}>
        <View style={styles.placeforMapSettings}>

            {/* Eine Einstellung ist mit ihrem P??nktchen immer in ner eigenen TouchableOpacity, damit man auch die W??rter antippen kann und es sich ??ndert. Au??erdem kann man die so nebeneinander ordnen */}
            <TouchableOpacity style={styles.settingbox} onPress={changeNotification}>
                <RoundCheckbox
                    size={20}
                    borderColor={'#B2E0E6'}
                    backgroundColor={"#B2E0E6"}
                    iconColor={'white'}
                    checked={areNotifications}
                    onValueChange={changeNotification}
                    style={styles.checkbox}
                />
                <Text style={styles.settingText}>Push-Benachrichtigungen</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.settingbox} onPress={changeGPS}>
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
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingbox}onPress={changeDarkMode}>
                <RoundCheckbox
                    size={20}
                    borderColor={'#B2E0E6'}
                    backgroundColor={"#B2E0E6"}
                    iconColor={'white'}
                    checked={isDarkMode}
                    onValueChange={changeDarkMode}
                    style={styles.checkbox}
                />
                <Text style={styles.settingText}>Dark Mode hahaha als wenn </Text>
                
            </TouchableOpacity>
          
          
        </View>
   
        <Text style={styles.impressumHeading}>Impressum</Text>
        <View style={styles.impressum}>
            
          <Text style={styles.impressumBigText}>Studierendenprojekt der HAW Hamburg</Text>
          <Text style={styles.impressumText}>Hochschule f??r Angewandte Wissenschaften Hamburg</Text> 
          <Text style={styles.impressumText}>Studiengang: Media Systems, Studienfach Mobile Systeme 2021</Text>
          <Text style={styles.impressumText}>Berliner Tor 5</Text>
          <Text style={styles.impressumText}>20099 Hamburg</Text>
          <Text style={styles.impressumText}>Zu erreichen unter: Tel. +494042875-0</Text>
          

        </View>
    </View>
        
</View>
</ScrollView>
</View>
    );
};