
import React from 'react'
import {SafeAreaView, ScrollView, View, Image} from 'react-native'
import styles from './Estilo'

export default function Configuracoess() {
  return (
    <>
      <SafeAreaView style={styles.safeArea}>
          <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
                <View style={styles.sectionContainer}>
                    <Image style={styles.image} source={require('../../assets/towing.png')}/>
                </View>
          </ScrollView>
      </SafeAreaView>
    </>
  );
};
