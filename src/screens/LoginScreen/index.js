/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './styles';
import { useDispatch } from 'react-redux';
import TextInputWrapper from '../../components/TextInput';
import { login } from '../../redux/actions/authActions';
import { colors, icons } from '../../../assets';
import { height, width } from '../../Units';

const LoginScreen = props => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [errorText, setErrorText] = useState('');

  const onSubmit = async () => {
    console.log(email, 'email-password', password);
    // const regexExp =
    //   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    // if (!email.trim()) {
    //   setErrorText('Please enter email');
    // } else if (!password.trim()) {
    //   setErrorText('Please enter password');
    // } else if (!regexExp.test(email.trim().toLowerCase())) {
    //   setErrorText('Invalid Email');
    // } else {
    //   const data = {
    //     email: email.trim(),
    //     password: password.trim(),
    //   };
    //   await dispatch(login(data));
    //   setEmail('');
    //   setPassword('');
    //   setErrorText('');
    // }
  };
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Image source={icons.loginHeader} style={styles.loginHeader} />
        <View style={{ alignItems: 'center', marginTop: height * 6 }}>
          <TextInputWrapper
            onChangeText={setEmail}
            value={email}
            placeholder="Email Address"
            label="Email"
          />
          <TextInputWrapper
            onChangeText={setPassword}
            value={password}
            placeholder="Password"
            label="Password"
            secureTextEntry={true}
            styles={styles.passwordContainer}
          />
          <View style={{ flexDirection: 'row', width: width * 80, justifyContent: 'space-between', marginTop: height * 1.5 }}>
            <Text style={{ color: colors.blackText, textDecorationLine: 'underline', fontSize: width * 3 }}>Forgot username</Text>
            <Text style={{ color: colors.blackText, textDecorationLine: 'underline', fontSize: width * 3 }}>Forgot password?</Text>
          </View>
          {/* <Text style={styles.errorText}>{errorText}</Text> */}
          <TouchableOpacity onPress={onSubmit} style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          flex: 1,
          alignItems: 'flex-end',
          paddingBottom: height * 2
        }}>
          <Text style={{
            color: colors.greyText,
            fontWeight: '400',
            fontSize: width * 3.5
          }}>Don’t have an account? </Text>
          <Text style={{
            color: colors.red,
            fontWeight: 'bold',
            fontSize: width * 3.5
          }}>Signup</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default LoginScreen;
