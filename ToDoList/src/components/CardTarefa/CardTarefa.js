
import React,{useState} from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Card, Title, Paragraph, Checkbox} from 'react-native-paper'
import styles from './Estilo'
import {colorSecondary } from '../../palette/baseColors'
import ModalOptions from '../Modal/ModalOptions'
import ModalRemove from '../Modal/ModalRemove'
import moment from 'moment'

export default function CardTarefa({dados, remove, update, updateCompleted}) {
  const [showModal, setshowModal] = useState(false)
  const [showModalRemove, setShowModalRemove] = useState(false)

  return (
      <TouchableOpacity onPress={()=>setshowModal(true)}>
          <ModalOptions 
            visible={showModal} 
            close={()=>setshowModal(false)}
            remove={()=>{setshowModal(false);setShowModalRemove(true)}}
            update={()=>{setshowModal(false);update()}}
          />
          <ModalRemove 
              visible={showModalRemove} 
              close={()=>setShowModalRemove(false)}
              remove={()=>{setShowModalRemove(false);remove(dados)}}
            />
          <Card style={styles.cardTask}>
              <View style={styles.viewContainer}>
                  <Checkbox
                    color={colorSecondary}
                    status={dados.completed ? 'checked' : 'unchecked'}
                    onPress={() => {dados.completed = !dados.completed; updateCompleted(dados)}}
                  />
                  <Card.Content>
                    <Title>{dados.title}</Title>
                    <Paragraph>{dados.description}</Paragraph>
                    <Paragraph>{moment(dados.date).format( 'dddd D MMMM YYYY')}</Paragraph>
                  </Card.Content>
              </View>
          </Card>
      </TouchableOpacity>
  );
};

