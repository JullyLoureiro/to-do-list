
import React, {useState, useEffect} from 'react'
import {SafeAreaView, TextInput, ScrollView, View, Text, Alert, TouchableOpacity} from 'react-native'
import { FAB} from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { register } from '../../services/service'
import styles from './Estilo'
import { colorPrimary } from '../../palette/baseColors'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function App(props) {
  const navigation = useNavigation()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    navigation.setOptions({
        headerLeft: () => (
          <TouchableOpacity  onPress={() => navigation.goBack()}>
              <Ionicons style={{margin:10}} color='#fff' size={36} name={Platform.OS === 'ios' ? 'ios-arrow-back-outline' : 'md-arrow-back'}/>
          </TouchableOpacity>
        ),
        gestureEnabled: false ,
        headerStyle: {backgroundColor: colorPrimary},
        headerTintColor: '#fff',
    });
  }, []);

  return (
    <>
      <SafeAreaView style={styles.safeArea}>
          <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
              <View style={styles.body}>
                  <Text  style={styles.title}>E-mail</Text>
                  <TextInput 
                      style={styles.textInput}
                      onChangeText={text => setEmail(text)}
                      value={email}
                  />
                  <Text  style={styles.title}>Senha</Text>
                  <TextInput 
                      style={styles.textInput}
                      secureTextEntry={true}
                      onChangeText={text => setPassword(text)}
                      value={password}
                  />
                </View>
          </ScrollView>
          <FAB
            style={styles.fab}
            large
            icon="arrow-right"
            onPress={()=>{
              if(password.length < 6) Alert.alert('Atenção', 'A senha deve conter no mínimo 6 digitos!')
              else if(email.length === 0 ) Alert.alert('Atenção', 'Informe o e-mail!')
              else register(email, password, navigation)
            }}
          />
      </SafeAreaView>
    </>
  );
};
