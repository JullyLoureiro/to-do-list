
import React, {useEffect, useState} from 'react'
import {SafeAreaView, View, FlatList} from 'react-native'
import styles from './Estilo'
import { FAB } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import {colorPrimary} from '../../palette/baseColors'
import CardTarefa from '../../components/CardTarefa/CardTarefa'
import { removeTask, listTasks, addTask} from '../../services/service'
import Loading from '../../components/Loading/Loading'

export default function Lista() {
  const navigation = useNavigation();
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    var ref = listTasks()

    ref.on('value', (snap)=>{
      let items = []
      snap.forEach((child)=>{
          items.push({
            key: child.key,
            title: child.val().title,
            description: child.val().description,
            date: child.val().date,
            completed: child.val().completed,
            created_at: child.val().created_at,
          })
      })
      setList(items)
      setLoading(false)
    })
  }, []);

  function updateTask(item){
      navigation.navigate('NovaTarefa', {item: item})
  }

  
  function updateCompleted(item){
      addTask(item, navigation)
  }

  return (
    <>

          <SafeAreaView style={styles.safeArea}>
            <View style={styles.body}>
                <View style={styles.sectionContainer}>
                    <FlatList
                      data={list}
                      renderItem={({item}) => <CardTarefa dados={item} remove={()=>removeTask(item)} update={()=>updateTask(item)} updateCompleted={(item)=>updateCompleted(item)} />}
                      keyExtractor={(item, index) => String(index)}
                    /> 
                </View>
            </View>

            {loading && <Loading />}

            <FAB
              style={styles.fab}
              large
              icon="plus"
              onPress={()=>navigation.navigate('NovaTarefa')}
            />
            
          </SafeAreaView>
    </>
  );
};
