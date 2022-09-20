import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {TermsPolicy} from '../assets/TermsPolicy';
import {Colors} from '../constants/colors';
import TitleAndSubTitle from '../components/TitleAndSubTitle';

export default function TermsAndPolicy({route}) {
  const renderItem = ({item}) => {
    return (
      item.id === route.params.termsPrivacyId && (
        <TitleAndSubTitle
          title={item.title}
          subTitle={item.description}
          // subTitleContProp={styles.subTitleCont}
        />
      )
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={TermsPolicy}
        keyExtractor={(item, index) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleCont: {},
});
