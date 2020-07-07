import {StyleSheet} from 'react-native'
import {colorPrimary, gray, white} from '../../palette/baseColors'

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
    title:{
        color: colorPrimary,
        marginBottom: 10,
        marginTop: 15
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: colorPrimary,
      },
      cadastro:{
        color: '#a3a3a3',
        marginBottom: 10,
        marginTop: 15,
        textAlign: 'center'
      },
  });
  
  