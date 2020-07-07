import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import ListaScreen from '../screens/Lista/Lista'
import ConfigScreen from '../screens/Configuracoes/Configuracoes'
import NovaTarefaScreen from '../screens/NovaTarefa/NovaTarefa'
import { createStackNavigator } from '@react-navigation/stack'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { colorPrimary } from '../palette/baseColors'
import {Platform, TouchableOpacity} from 'react-native'
import LoginScreen from '../screens/Login/Login'
import CadastroScreen from '../screens/Cadastro/Cadastro'
import DrawerContent from '../components/DrawerContent/DrawerContent'
import SplashScreen from '../screens/Splash/Splash'

const Header = { 
     headerStyle: {backgroundColor: colorPrimary},
     headerTintColor: '#fff',
}

const Menu = ({navigation}) => (
  <TouchableOpacity  onPress={() => navigation.openDrawer()}>
      <Ionicons style={{margin:10}} color='#fff' size={36} name={Platform.OS === 'ios' ? 'ios-menu' : 'md-menu'}/>
  </TouchableOpacity>
)

function disabledGesture(props){
  let parent = props.navigation.dangerouslyGetParent();
  parent.setOptions({
      gestureEnabled: false
  })
}

const AccountStack = createStackNavigator()

const  AccountStackScreen = ({navigation}) => {
  return (
    <AccountStack.Navigator screenOptions={{headerLeft: () => (<Menu navigation={navigation}/>)}}>
      <AccountStack.Screen name="Splash" component={SplashScreen} options={props => {disabledGesture(props)}}/>
      <AccountStack.Screen name="Login" component={LoginScreen} options={props => {disabledGesture(props)}}/>
      <AccountStack.Screen name="Cadastro" component={CadastroScreen} options={{ title: 'Cadastro' }} />
    </AccountStack.Navigator>
  );
}

const ConfigStack = createStackNavigator()

const ConfigStackScreen = ({navigation}) => {
  return (
    <ConfigStack.Navigator screenOptions={{headerLeft: () => (<Menu navigation={navigation} />)}}>
      <ConfigStack.Screen name="Configuracoes" component={ConfigScreen} options={{ title: 'Configurações', ...Header}}/>
    </ConfigStack.Navigator>
  );
}


const ListaStack = createStackNavigator()

const ListaStackScreen = ({navigation}) => {
  return (
    <ListaStack.Navigator screenOptions={{headerLeft: () => (<Menu navigation={navigation} />)}}>
      <ListaStack.Screen name="ListaTarefas" component={ListaScreen} options={{ title: 'Lista de Tarefas',  ...Header}} />
      <ListaStack.Screen name="NovaTarefa" component={NovaTarefaScreen} options={{ title: 'Nova Tarefa',  ...Header }}/>
    </ListaStack.Navigator>
  );
}


const Drawer = createDrawerNavigator()

export default function Routes() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator 
        drawerType="front"
        drawerContent={(props) => <DrawerContent {...props} />}
        initialRouteName="Splash" 
      >
        <Drawer.Screen name="Account" component={AccountStackScreen} /> 
        <Drawer.Screen name="ListaTarefas" component={ListaStackScreen} /> 
        <Drawer.Screen name="Configuracoes" component={ConfigStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


