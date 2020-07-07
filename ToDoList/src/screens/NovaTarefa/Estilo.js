import {StyleSheet} from 'react-native'
import {colorPrimary, gray, white, graydark} from '../../palette/baseColors'

export default styles = StyleSheet.create({
    scrollView: {
      backgroundColor: white,
    },
    safeArea:{
        flex: 1,
    },
    body: {
      padding: 20,
    },
    textInput:{
        width: '100%',
        backgroundColor: gray,
        borderRadius: 5,
        fontSize: 18,
        padding: 10,
    },
    textLabel:{
        fontSize: 18,
    },
    textDate:{
        flex: 2,
        marginRight: 10
    },
    textTime:{
        flex: 1,
    },
    title:{
        color: graydark,
        marginBottom: 10,
        marginTop: 15
    },
    viewRow:{
        flexDirection: 'row', 
        flex: 1,
    },
    viewCheck:{
        flexDirection: 'row', 
        flex: 1,
        marginTop: 15,
        alignItems: 'center'
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: colorPrimary,
      },
  });
  
  