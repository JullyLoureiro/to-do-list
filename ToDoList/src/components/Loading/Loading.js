import React from 'react'
import { Modal, View, ActivityIndicator } from 'react-native'
import styles from './Estilo'
import {colorSecondary} from '../../palette/baseColors'

export default function ModalOptions() {
  return (
    // <View style={styles.centeredView}>
        <Modal
            animationType="fade"
            transparent={true}
            visible={true}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <ActivityIndicator size="large" color={colorSecondary} />
                    </View>
                </View>
        </Modal>
    // </View>
  );
};

