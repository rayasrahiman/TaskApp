import React from 'react';

import {Images} from '../assets/Images';
import ViewPager from '../components/ViewPager';
import I18n from '../languages/i18n';

const WelcomeScreen = ({navigation}) => {
  return (
    <ViewPager
      testID="viewPager"
      data={Images}
      horizontalIndicator={false}
      pagingEnabled={true}
      horizontal={true}
      BottomRgtBtn={I18n.t('Skip')}
      navigation={() => navigation.navigate('Registration')}
    />
  );
};

export default WelcomeScreen;
