import React from 'react';
import {View, Text, Modal, Dimensions, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import IoniconS from 'react-native-vector-icons/Ionicons';

import Button from './Button';
import {Colors} from '../constants/colors';

export default function ModalComp({
  onRequestClose,
  iconName,
  title,
  subTitle,
  onPress,
  visible,
  btnTxt,
}) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onRequestClose}>
      <View style={styles.Container}>
        <View style={styles.modalView}>
          <IoniconS style={styles.checkMark} name={iconName} />
          <Text style={styles.modalTitleTxt}>{title}</Text>
          <Text style={styles.modalSubtTitleTxt}>{subTitle}</Text>
          <Button
            btnWrapper={styles.btnWrapper}
            title={btnTxt}
            onPress={onPress}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: Colors.black,
    width: Dimensions.get('window').width,
    height: hp(45),
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  checkMark: {
    color: Colors.green,
    fontSize: hp(10),
  },
  modalTitleTxt: {
    color: Colors.green,
    fontWeight: 'bold',
    fontSize: hp(4),
    textAlign: 'center',
    marginVertical: hp(2),
  },
  modalSubtTitleTxt: {
    color: Colors.grayishBlack,
    fontWeight: 'bold',
    fontSize: hp(3),
    textAlign: 'center',
    marginBottom: hp(3),
  },
  btnWrapper: {
    width: Dimensions.get('window').width - wp(10),
  },
});
