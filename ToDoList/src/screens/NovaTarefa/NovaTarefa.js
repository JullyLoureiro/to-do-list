
import React, {useState, useEffect} from 'react'
import {SafeAreaView, TextInput, TouchableOpacity, ScrollView, View, Text, Platform} from 'react-native'
import styles from './Estilo'
import { colorSecondary} from '../../palette/baseColors'
import { FAB, Checkbox} from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { addTask } from '../../services/service'
import ModalDate from '../../components/Modal/ModalDate'
import moment from 'moment'

export default function NovaTarefa(props) {
  const navigation = useNavigation()

  const [key, setKey] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [showDate, setShowDate] = useState(false);
  const [hour, setHour] = useState(new Date());
  const [completed, setCompleted] = useState('');

  useEffect(() => {
    navigation.setOptions({
        headerLeft: () => (
            <TouchableOpacity  onPress={() => navigation.goBack()}>
                <Ionicons style={{margin:10}} color='#fff' size={36} name={Platform.OS === 'ios' ? 'ios-arrow-back-outline' : 'md-arrow-back'}/>
            </TouchableOpacity>
        ),
    });

    if(props.route.params){
        var item = props.route.params.item
        setTitle(item.title)
        setDescription(item.description)
        setCompleted(item.completed)
        setDate(new Date(item.date))
        setHour(new Date(item.date))
        setKey(item.key)
    }
  
  }, []);


  function insertTask(){
      var item = {key:  key, title: title, description: description, date: `${date.toLocaleDateString()} ${hour.toLocaleTimeString()}`, completed: completed, created_at: new Date().toLocaleDateString()}
      addTask(item, navigation)
  }

  return (
    <>
    
      <SafeAreaView style={styles.safeArea}>
          <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
              <View style={styles.body}>
                  <ModalDate  
                      mode={mode}
                      visible={showDate}
                      close={()=>setShowDate(false)}
                      setDateTime={(d)=>
                        {
                          if(mode==='date')setDate(d)
                          else setHour(d)
                          setShowDate(false)
                        }
                      }
                    />

                  <Text  style={styles.title}>Título</Text>
                  <TextInput 
                      style={styles.textInput}
                      onChangeText={text => setTitle(text)}
                      value={title}
                  />
                  
                  <Text  style={styles.title}>Descrição</Text>
                  <TextInput 
                      style={styles.textInput}
                      multiline={true}
                      numberOfLines={4}
                      onChangeText={text => setDescription(text)}
                      value={description}
                  />
                  
                  <Text  style={styles.title}>Data e hora de conclusão </Text>
                  <View style={styles.viewRow}>
                      <TouchableOpacity style={styles.textDate} onPress={()=>{setMode('date'); setShowDate(true)}}>
                        <TextInput 
                            editable={false}
                            style={styles.textInput}
                            value={moment(date).format( 'dddd D MMMM YYYY')}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.textTime} onPress={()=>{setMode('time'); setShowDate(true)}}>
                        <TextInput 
                            editable={false}
                            style={styles.textInput}
                            value={moment(hour).format('hh:mm A')}
                        />
                      </TouchableOpacity>
                  </View>
              
                  <View style={styles.viewCheck}>
                       <Checkbox
                          color={colorSecondary}
                          status={completed ? 'checked' : 'unchecked'}
                          onPress={() => {setCompleted(!completed)}}
                        />
                    <Text style={styles.textLabel}>Completada?</Text>
                  </View>
              </View>
          </ScrollView>
          <FAB
            style={styles.fab}
            large
            icon="check"
            onPress={()=>insertTask()}
          />
      </SafeAreaView>
    </>
  );
};
