import React, {useState} from 'react'
import { Modal, View, TouchableOpacity, Text} from 'react-native'
import { Button } from 'react-native-paper'
import styles from './Estilo'
import DatePicker from 'react-native-date-picker'

export default function ModalOptions({visible, setDateTime, close, mode}) {
    const [date, setDate] = useState(new Date());
    
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={visible}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <DatePicker
                                date={date}
                                mode={mode}
                                locale={'pt-BR'}
                                onDateChange={setDate}
                            />
                            <Button contentStyle={styles.contentButton} style={styles.button} mode="contained" onPress={()=>setDateTime(date)}>
                                Ok
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

