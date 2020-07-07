import React from 'react'
import { Modal, View, Text, TouchableOpacity} from 'react-native'
import { Button } from 'react-native-paper'
import styles from './Estilo'

export default function ModalOptions({visible, close, remove, update}) {
  return (
    <View style={styles.centeredView}>
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Button contentStyle={styles.contentButton} style={styles.button} mode="contained" onPress={()=>update()}>
                            Editar
                        </Button>
                        <Button contentStyle={styles.contentButton} style={styles.button} mode="contained" onPress={()=>remove()}>
                            Remover
                        </Button>
                        <TouchableOpacity onPress={()=>close()}>
                            <Text style={styles.back}>Voltar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
        </Modal>
    </View>
  );
};

