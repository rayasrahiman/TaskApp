import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {Colors} from '../constants/colors';
import Button from './Button';
import TitleAndSubTitle from './TitleAndSubTitle';
import I18n from '../languages/i18n';

export default function ViewPager({
  data,
  horizontalIndicator,
  pagingEnabled,
  horizontal,
  BottomRgtBtn,
  navigation,
  ...fLprops
}) {
  const [imageActive, setImageActive] = useState(0);
  const ref = useRef(null);

  const onChange = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(
      contentOffsetX / Dimensions.get('window').width,
    );
    setImageActive(currentIndex);
  };

  const renderItem = ({item}) => {
    return (
      <View>
        <View style={styles.wrap}>
          <Image style={styles.wrap} source={item.img} resizeMode="cover" />
        </View>
        <View>
          <Image
            style={styles.img}
            resizeMode="contain"
            source={require('../assets/Logo.png')}
          />
        </View>
        <TitleAndSubTitle
          title={item.title}
          subTitle={item.subtitle}
          viewPager={true}
          titleTxtProp={styles.titleTxt}
          subTitleContProp={styles.subtitleCont}
          subTitleTxtProp={styles.subtitleTxt}
        />
        {/* <View>
          <Text style={styles.titleTxt}>{item.title}</Text>
        </View>
        <View style={styles.subtitleCont}>
          <Text numberOfLines={3} style={styles.subtitleTxt}>
            {item.subtitle}
          </Text>
        </View> */}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          {...fLprops}
          data={data}
          ref={ref}
          onMomentumScrollEnd={onChange}
          showsHorizontalScrollIndicator={horizontalIndicator}
          pagingEnabled={pagingEnabled}
          horizontal={horizontal}
          keyExtractor={(item, index) => item.id}
          renderItem={renderItem}
        />
      </View>
      {imageActive === data.length - 1 ? (
        <Button title={I18n.t('Continue')} onPress={navigation} />
      ) : (
        <View style={styles.bottomWrapper}>
          <View
            style={[
              styles.wrapDot,
              {
                flexDirection: 'row',
              },
            ]}>
            {data.map((e, index) => (
              <View
                key={e.id}
                style={imageActive === index ? styles.dotActive : styles.dot}
              />
            ))}
          </View>
          <TouchableOpacity onPress={navigation} style={styles.wrapDot}>
            <Text style={styles.btnTxt}>{BottomRgtBtn}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  wrap: {
    width: Dimensions.get('window').width,
    height: hp(50),
  },
  img: {
    height: hp(15),
    width: wp(15),
  },
  titleTxt: {
    marginHorizontal: hp(1),
    color: Colors.primary700,
    fontSize: hp(3.5),
    fontWeight: 'bold',
  },
  subtitleCont: {
    width: Dimensions.get('window').width,
  },
  subtitleTxt: {
    marginVertical: hp(5),
    marginHorizontal: hp(1),
    color: '#888',
    fontSize: hp(3),
  },
  bottomWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
    alignItems: 'flex-end',
  },
  wrapDot: {
    marginHorizontal: wp(1),
    marginBottom: hp(2),
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
    backgroundColor: '#888',
    borderRadius: hp(2.5) / 2,
    borderWidth: 5,
    borderColor: '#888',
    height: hp(2.5),
    width: hp(2.5),
  },
  btnTxt: {
    fontSize: hp(3),
  },
});
