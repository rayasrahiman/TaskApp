import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useSelector, useDispatch} from 'react-redux';

import Button from '../components/Button';
import Header from '../components/Header';
import Input from '../components/Input';
import TitleAndSubTitle from '../components/TitleAndSubTitle';
import I18n from '../languages/i18n';
import {getUserFetch} from '../redux/actionsConstants';

export default function RegistrationScreen({navigation}) {
  const [input, setInput] = useState('');
  const [disable, setDisable] = useState(true);
  const [error, setError] = useState(false);
  const users = useSelector(state => state.myFirstReducer.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserFetch());
  }, [dispatch]);

  const regex =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

  const validate = text => {
    setInput(text);
    setDisable(!regex.test(text));
  };

  const redirect = async () => {
    const user = users.find(item => item.email === input);
    if (!disable && user) {
      navigation.navigate('SignIn', {
        email: input,
      });
    } else if (!disable && !user) {
      navigation.navigate('Register', {
        email: input,
      });
    } else {
      setError(true);
    }
  };

  return (
    <View style={styles.mainWrapper}>
      <Header testID="header" />
      <TitleAndSubTitle
        testID="titleSubTitle"
        title={I18n.t('registrationTitle')}
        subTitle={I18n.t('registrationSubTitle')}
        subTitleContProp={styles.subTitleCont}
      />
      <Input
        testID="emailID"
        editable={true}
        label={I18n.t('Email')}
        placeholder={I18n.t('Email')}
        onChangeText={validate}
        error={error && <Text>{I18n.t('EmailError')}</Text>}
        onFocus={() => setError(false)}
      />
      <Button
        testID="register"
        onPress={redirect}
        title={I18n.t('GetStarted')}
        btnWrapper={styles.btnWrapper}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
  },
  subTitleCont: {
    marginVertical: hp(2),
  },
  btnWrapper: {
    marginTop: Dimensions.get('window').height < 700 ? hp(30) : hp(30),
  },
});
