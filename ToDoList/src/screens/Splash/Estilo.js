import { StyleSheet} from 'react-native'
import { colorPrimary, white } from '../../palette/baseColors'


export default styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: white
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: colorPrimary,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: white,
      marginTop:5,
      fontSize: 17
  },
  image:{
    width: 280,
    height: 210,
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
});