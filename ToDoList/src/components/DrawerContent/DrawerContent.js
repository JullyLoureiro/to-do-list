import React from 'react'
import { View } from 'react-native'
import { Avatar, Title, Caption,Drawer } from 'react-native-paper'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { logout } from '../../services/service'
import firebase from 'firebase'
import styles from './Estilo'

export  default function DrawerContent(props) {

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                                source={{
                                    uri: 'https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331257__340.png'
                                }}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Caption style={styles.caption}>Olá,</Caption>
                                <Title style={styles.title}>{firebase.auth().currentUser ? firebase.auth().currentUser.email : ''}</Title>
                            </View>
                        </View>

                   
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            label="Lista de Tarefas"
                            onPress={() => {props.navigation.navigate('ListaTarefas')}}
                        />
                        <DrawerItem 
                            label="Configurações"
                            onPress={() => {props.navigation.navigate('Configuracoes')}}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    label="Sair"
                    onPress={() => {logout(props.navigation)}}
                />
            </Drawer.Section>
        </View>
    );
}