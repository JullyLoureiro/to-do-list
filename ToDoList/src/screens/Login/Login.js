
import React, {useState, useEffect} from 'react'
import {SafeAreaView, TextInput, ScrollView, View, Text, TouchableOpacity} from 'react-native'
import styles from './Estilo'
import { FAB} from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import {login} from '../../services/service'
import { colorPrimary } from '../../palette/baseColors'

export default function Login(props) {
  const navigation = useNavigation()

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  useEffect(() => {
    navigation.setOptions({
        headerLeft: null,
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
                  <TouchableOpacity onPress={()=>navigation.navigate('Cadastro')}>
                      <Text  style={styles.cadastro}>Não possui conta? Cadastre-se aqui</Text>
                  </TouchableOpacity>
                </View>
          </ScrollView>
          <FAB
            style={styles.fab}
            large
            icon="arrow-right"
            onPress={()=>login(email, password, navigation)}
          />
      </SafeAreaView>
    </>
  );
};
