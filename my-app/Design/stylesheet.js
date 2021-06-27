import { StyleSheet, Dimensions } from 'react-native';


let maincolor = "#B2E0E6";
let accentgrey = "#CDC9C9";
const screen = Dimensions.get("screen");
export default StyleSheet.create({


  logo:{
    height: "42%",
    width: "14%",
    alignSelf: "flex-start",
    marginLeft: 20,
    marginBottom: 0
  },
  textbalken: {
    backgroundColor: maincolor,

    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  fetteSchrift: {
    fontWeight: 'bold',
    color: maincolor,
    fontSize: 38,
    alignSelf: 'flex-start',
    marginLeft: '8%',
  },

  weisserText: {
    fontSize: 0.018 * screen.height,
    color: 'white',
    marginLeft: '4%',
  },

  upperContainer: {
    flex: 1,
    width: '100%',
    height: '70%',
  },

  middleContainer: {
    flex: 3.5,
    width: '100%',
    height: '70%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  placeforMap: {
    marginTop: '10%',
    height: '80%',
    width: '80%',
    borderColor: accentgrey,
    borderWidth: 1,

  },
  map: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },

  searchContainer: {
    flexDirection: 'row',
    height: '7%',
    width: '97%',
    marginTop: '4%',
    
    //Schatten IOS
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    
    alignItems: 'center',
  },

  searchbar: {
    flex: 1,  

    // Schatten für Android
   borderRadius: 90,
    borderWidth: 0, 
     elevation: 40,
    //flexDirection: 'row',
    backgroundColor: "transparent",
    borderBottomWidth: 0,
    borderTopWidth: 0,
  },

  placeinput: {
    height: '100%',
    textAlign: 'center',
    fontSize: 18,
    width: '75%',
  },

  bottomContainer: {
    flex: 0.3,
    width: '100%',
    height: '70%',
    backgroundColor: maincolor,
  },

  screen: {
    paddingTop: '10%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  middleContainerSettings: {
    flex: 3.5,
    width: '100%',
    height: '70%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  placeforMapSettings: {
    backgroundColor: 'white',
    height: '30%',
    width: '80%',
    borderColor: maincolor,
    borderWidth: 1,
    justifyContent: 'center',
    marginTop: '10%',
  },

  settingText: {
    color: maincolor,
    fontSize: 20,
    margin: '4%',
  },

  settingbox: {
    marginLeft: '6%',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },

  impressum: {
    height: '20%',
    width: '100%',
    backgroundColor: maincolor,
  },

  impressumHeading: {
    color: maincolor,
    fontSize: 0.03 * screen.height,
    alignSelf: 'flex-start',
    marginLeft: '4%',
    marginTop: '35%',
  },

  impressumText: {
    fontSize: 0.03 * screen.width,
    color: 'white',
    marginLeft: '4%',
  },

  impressumBigText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: '4%',
    marginTop: '2%',
  },
  calloutTitle: {
    flex: 0,
    color: "black",
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: "flex-start",
    paddingBottom: 0,
  },
  calloutText: {
    fontSize: 12,
    color: "dimgray",
  },


  //Ab hier Styles für den List Screen
  scrollView: {
    marginBottom: '8%',
    marginTop: '8%',
    height: '80%',
    width: '90%',
  },

  middleContainerList: {
    flex: 3.5,
    width: '100%',
    height: '70%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  listText: {
    fontSize: 18,
    color: accentgrey,
    marginLeft: '5%',
    marginRight: '5.5%',
  },

  listTextBeginning: {
    fontSize: 20,
    color: 'grey',
    marginLeft: '5%',
  },

  listHinweis: {
    fontSize: 22,
    color: maincolor,
  },

  listIcons: {
    marginTop: '1%',
    color: '#B2E0E6',
  },

  listPointBox: {
    margin: '1%',
    flex: 1,
    flexDirection: 'row',
  },

  listPointBoxHinweis: {
    marginTop: '7%',
    margin: '1%',
    flex: 1,
    flexDirection: 'row',
  },

});