import React from 'react';
import {
  StyleSheet,
  Dimensions,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {Images} from '../assets/Images';
import ViewPager from '../components/ViewPager';
import {Colors} from '../constants/colors';
import I18n from '../languages/i18n';

const WelcomeScreen = ({navigation}) => {
  return (
    <ViewPager
      data={Images}
      horizontalIndicator={false}
      pagingEnabled={true}
      horizontal={true}
      BottomRgtBtn={I18n.t('Skip')}
      navigation={() => navigation.navigate('Registration')}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  wrap: {
    width: Dimensions.get('window').width,
    height: hp(50),
  },
  wrapDot: {
    marginHorizontal: 15,
    marginBottom: 20,
  },
  dotActive: {
    margin: 3,
    backgroundColor: Colors.primary700,
    borderRadius: hp(2.5) / 2,
    borderWidth: 5,
    borderColor: Colors.primary700,
    height: hp(2.5),
    width: hp(2.5),
  },
  dot: {
    margin: 3,
    // color: '#888',
    backgroundColor: '#888',
    borderRadius: hp(2.5) / 2,
    borderWidth: 5,
    borderColor: '#888',
    height: hp(2.5),
    width: hp(2.5),
  },
});

export default WelcomeScreen;
