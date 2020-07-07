import {StyleSheet} from 'react-native'
import { graylight,  } from '../../palette/baseColors'

export default  styles = StyleSheet.create({
    cardTask:{
        borderRadius: 5,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        marginBottom: 10,
        elevation: 5,
       
    },
    viewContainer:{
        flex: 1,
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
  });
  
  