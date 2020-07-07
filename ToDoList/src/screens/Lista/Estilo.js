import {StyleSheet} from 'react-native'
import { graylight, colorPrimary } from '../../palette/baseColors'

export default  styles = StyleSheet.create({
    safeArea:{
      flex: 1,
      backgroundColor: graylight,
    },
    loading:{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: graylight,
    },
    body:{
    },
    sectionContainer: {
      margin: 20
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: '#000',
    },
    fab: {
      position: 'absolute',
      backgroundColor: colorPrimary,
      margin: 16,
      right: 0,
      bottom: 0,
    },
  });
  
  