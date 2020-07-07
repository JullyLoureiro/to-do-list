import { StyleSheet } from "react-native"
import {graydark, colorPrimary} from '../../palette/baseColors'

export default styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: 'rgba(96,96,96,0.5)'
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 5,
      padding: 20,
      minWidth: 300,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'stretch',
    },
    button:{
        // padding: 10,
        marginBottom: 10,
        marginTop: 10,
        color: colorPrimary
    },
    contentButton:{
      backgroundColor: colorPrimary, 
      padding: 10
    },
    back:{
        alignSelf: 'center',
        color: graydark,
        margin: 10,
        fontSize: 15
    },
    textAlert:{
      padding: 10,
      fontSize: 20
    }
  });