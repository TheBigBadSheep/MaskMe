import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();
import Home from '../Screens/Home';
import list from '../Screens/list';
import settings from '../Screens/settings';
export default MainNavigator =()=>{


    //Ich denke selbsterklärend? dunno
    return(
        <NavigationContainer>
            
            <Tab.Navigator initialRouteName="Home" screenOptions={({route})=> ({
                
                tabBarIcon:({ focused, color, size}) =>{
                    let iconName;
                    
                    if(route.name==='Home'){
                        if(iconName=focused){iconName='home'; size=38; }else{ iconName='home-outline';}
                        
                    }else if(route.name==='List'){
                        if(iconName=focused){iconName='list'; size=38; }else{ iconName='list-outline';}

                    }else if(route.name==='Settings'){
                        if(iconName=focused){iconName='build'; size=38; }else{ iconName='build-outline';}
                    }
                    return <Ionicons name={iconName} size={size} color={color}/>;
                    },
                
                })}
                    tabBarOptions={{
                        activeTintColor: 'white',
                        inactiveTintColor: 'white',
                        showLabel: false,

                        style: {
                            backgroundColor: '#B2E0E6',
                            
                        },
                    }}>
                <Tab.Screen name="Settings" component={settings} />
                <Tab.Screen name="Home" component={Home}/>
                
                <Tab.Screen name="List" component={list}/>
                
                
            </Tab.Navigator>

        </NavigationContainer>



    );


};