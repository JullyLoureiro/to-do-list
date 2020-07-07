import firebase from 'firebase'
import { Alert } from 'react-native'
import 'firebase/firestore';

export function addTask (item, navigation) {
    let Message = "Tarefa atualizada com sucesso!"
    
    if(item.key === null) {
        item.key = firebase.database().ref('tarefas').push().key
        Message = "Tarefa cadastrada com sucesso!"
    }
      
    firebase.database().ref('/tarefas').child(item.key).set(
        {
          title: item.title,
          description: item.description,
          date: item.date,
          completed: item.completed,
          created_at: item.created_at
        }
    ).then(()=>{
        Alert.alert(
            item.title,
            Message,
          [
            { text: "OK", onPress: () =>navigation.navigate('ListaTarefas')}
          ],
          { cancelable: false }
        )
    }).catch((error)=> Alert.alert("Ocorreu um erro ao adicionar tarefa! Tente Novamente..."))
}

export function removeTask(item){
  firebase.database().ref().child('tarefas').child(item.key).remove()
  .then(()=> Alert.alert(item.title, "Tarefa removida com sucesso!"))
  .catch(error=> Alert.alert(item.title, "Ocorreu um erro ao remover esta tarefa, tente novamente!"))
}

export function listTasks(){
  return firebase.database().ref().child('tarefas')
}

export function login(email, password, navigation){
  firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
          navigation.navigate('ListaTarefas')
      })
      .catch(error => Alert.alert('Erro', 'Ocorreu um erro ao tentar logar, verifique se seu login e senha estão corretos!'));
}

export function register(email, password, navigation) {
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(userCredentials => {
      Alert.alert(
          email,
          'Conta cadastrada com sucesso!',
        [
          { text: "OK", onPress: () =>navigation.navigate('Login')}
        ],
        { cancelable: false }
      )
  })
  .catch(error =>  Alert.alert('Erro', 'Não foi possivel cadastrar esta conta, tente novamente!'));
}

export function logout(navigation){
  firebase.auth().signOut()
  navigation.navigate('Login')
}