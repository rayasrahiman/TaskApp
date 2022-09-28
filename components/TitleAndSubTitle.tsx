import {View, Text, StyleSheet, Platform} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {Colors} from '../constants/colors';

export type Props = {
  title: string;
  subTitle: string;
  titleContProp: any;
  titleTxtProp: any;
  subTitleContProp: any;
  emailSubTitleContProp: any;
  subTitleTxtProp: any;
  viewPager: boolean;
  email: boolean;
  emailVal: string;
};

const TitleAndSubTitle: React.FC<Props> = ({
  title,
  subTitle,
  titleContProp,
  titleTxtProp,
  subTitleContProp,
  emailSubTitleContProp,
  subTitleTxtProp,
  viewPager,
  email,
  emailVal,
  ...titleAndSubTitleProp
}) => {
  return (
    <View {...titleAndSubTitleProp}>
      <View
        style={{
          ...{
            marginHorizontal: viewPager
              ? 0
              : Platform.OS === 'android'
              ? wp(5)
              : wp(3),
          },
          ...titleContProp,
        }}>
        <Text style={{...styles.titleTxt, ...titleTxtProp}}>{title}</Text>
      </View>
      <View
        style={{
          ...{
            marginHorizontal: viewPager
              ? 0
              : Platform.OS === 'android'
              ? wp(5)
              : wp(3),
          },
          ...subTitleContProp,
        }}>
        <Text
          style={{
            ...styles.subTitleTxt,
            ...{color: Colors.grayishBlack},
            ...subTitleTxtProp,
          }}>
          {subTitle}
        </Text>
      </View>
      {email && (
        <View
          style={{
            ...{
              marginHorizontal: viewPager
                ? 0
                : Platform.OS === 'android'
                ? wp(5)
                : wp(3),
              marginBottom: hp(2),
            },
            ...emailSubTitleContProp,
          }}>
          <Text
            style={{
              ...styles.subTitleTxt,
              ...{color: Colors.black},
              ...subTitleTxtProp,
            }}>
            {emailVal}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  titleTxt: {
    color: Colors.darkBlue,
    fontWeight: 'bold',
    fontSize: Platform.OS === 'android' ? hp(5) : hp(4),
  },
  subTitleTxt: {
    color: Colors.grayishBlack,
    fontWeight: 'bold',
    fontSize: Platform.OS === 'android' ? hp(3) : hp(2),
  },
});

export default TitleAndSubTitle;
