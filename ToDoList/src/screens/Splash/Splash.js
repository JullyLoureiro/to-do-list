import React, {useEffect} from 'react'
import { View, Text, TouchableOpacity, StatusBar} from 'react-native'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import { white, colorPrimary, colorSecondary } from '../../palette/baseColors'
import styles from './Estilo'

export default function SplashScreen(){
    const navigation = useNavigation()

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        });
    
      }, []);

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={colorPrimary} barStyle="light-content"/>
        <View style={styles.header}>
            <Animatable.Image 
                animation="bounceIn"
                duraton="1500"
                style={styles.image}
                source={require('../../assets/logo.png')}
                resizeMode="stretch">
            </Animatable.Image>
        </View>
        <Animatable.View 
            style={[styles.footer, {backgroundColor: colorPrimary}]}
            animation="fadeInUpBig">
            
            <Text style={[styles.title, {color: white}]}>
                Comece a anotar suas tarefas!
            </Text>
            <Text style={styles.text}>Gerencie seus compromissos</Text>
            <View style={styles.button}>
                <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                        <Text  style={[styles.text, {fontWeight: 'bold', color: colorSecondary}]} >Vamos lá!</Text>
                </TouchableOpacity>
            </View>
        </Animatable.View>
      </View>
    );
};
