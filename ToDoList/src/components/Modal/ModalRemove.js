import React from 'react'
import { Modal, View, Text, TouchableOpacity} from 'react-native'
import { Button } from 'react-native-paper'
import styles from './Estilo'
import { colorPrimary } from '../../palette/baseColors';

export default function ModalOptions({visible, close, remove}) {
  return (
    <View style={styles.centeredView}>
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.textAlert}>Tem certeza que deseja remover esta tarefa?</Text>
                        <Button contentStyle={styles.contentButton} style={styles.button} mode="contained" onPress={()=>remove()}>
                            Confirmar
                        </Button>
                        <TouchableOpacity onPress={()=>close()}>
                            <Text style={styles.back}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
        </Modal>
    </View>
  );
};

