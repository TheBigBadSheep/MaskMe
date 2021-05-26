import {StyleSheet } from 'react-native';

let maincolor= "#B2E0E6";
let accentgrey= "#CDC9C9";

export default StyleSheet.create({
    
    textbalken:{
      backgroundColor: maincolor,
      height:'35%',
      width:'100%',
      marginTop:1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    fetteSchrift:{
      fontWeight:'bold',
      color:maincolor,
      fontSize:38,
      alignSelf:'flex-start',
      marginLeft: '4%',
      marginBottom:1,
    },
    weisserText:{
      fontSize:20,
      color: 'white',
      marginLeft:'4%',
    },
   upperContainer:{
      flex:1,
      width: '100%',
      height: '70%',
      
  
    },middleContainer:{
      flex:3.5,
      width: '100%',
      height: '70%',
      backgroundColor:'white',
      alignItems:'center',
      justifyContent:'flex-start',
    }, 
    
    placeforMap:{
      marginTop:'10%',
      height:'80%',
      width:'80%',
      borderColor:accentgrey,
      borderWidth:1,
      
    },
    map:{
      width: '100%', 
      height: '100%',
      alignItems:'center',
    }, 
    searchContainer:{
      flexDirection: "row",
      height:'7%',
      width:'90%',
      backgroundColor:'white',
      marginTop:'4%',
      borderRadius: 19 ,

      //Schatten IOS
      shadowColor: 'black',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.3,

      // Schatten für Android
      elevation: 10,
      justifyContent:'center',
      alignItems:'center',
     
    },
    placeinput:{
      height:'90%',
      textAlign: 'center',
      fontSize:18,
   
      width:'75%',
      
    
   
    },
   
    bottomContainer:{
      flex:0.3,
      width: '100%',
      height: '70%',
      backgroundColor:maincolor,
    }, 
    screen:{
      paddingTop:'15%',
      flex:1,
      alignItems:'center',
      flexDirection:'column',
      backgroundColor: 'white',
    },
  
    middleContainerSettings:{
      flex:3.5,
      width: '100%',
      height: '70%',
      backgroundColor:'white',
      alignItems:'center',
      justifyContent:'flex-start',

      
    },
    placeforMapSettings:{
     
      backgroundColor:'white',
      height:'40%',
      width:'80%',
      borderColor:maincolor,
      borderWidth:1,
      justifyContent:'center',

      marginTop:'10%',
    
      
    },
    
    settingText:{
      color:maincolor,
      fontSize:20,
      margin:'4%',
    },
    
    settingbox:{
      marginLeft:'6%',
      alignItems:'center',
      flex:1,
      flexDirection:'row',
    },
    impressum:{
      marginTop:'6%',
      height:'20%',
      width:'100%',
      backgroundColor:maincolor,
      
    },
    impressumHeading:{
      color:maincolor,
      fontSize:30,
      alignSelf:'flex-start',
      marginLeft: '4%',
      marginTop:'30%',
    },
    impressumText:{
      fontSize:15,
      color: 'white',
      marginLeft:'4%',
    },
    impressumBigText:{
      fontSize:18,
      fontWeight:'bold',
      color: 'white',
      marginLeft:'4%',
      marginTop:'2%',
    },


//Ab hier Styles für den List Screen
  scrollView:{
      marginBottom:'10%',
      marginTop:'8%',
      height:'80%',
      width:'90%',
     
     
    },
    middleContainerList:{
      flex:3.5,
      width: '100%',
      height: '70%',
      backgroundColor:'white',
      alignItems:'center',
      justifyContent:'flex-start',
      
    },
     listText:{
      fontSize:18,
      color: accentgrey,
      marginLeft:'5%',
      marginRight:'5.5%',
    },
    listTextBeginning:{
      fontSize:20,
      color: 'grey',
      marginLeft:'5%',
      
    },
    listPointBox:{
      
     margin:'1%',
      flex:1,
      flexDirection:'row',
    },






   
  
   
   
   
    taskcontainer:{
    
        marginVertical: 15,
        height: 50,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#79bde9',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset:{width:0, height:2},
        shadowOpacity: 0.26,
        shadowRadius: 100,
    },
  
  });