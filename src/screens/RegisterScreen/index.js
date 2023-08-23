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
  ScrollView,
} from 'react-native';
import styles from './styles';
import { useDispatch } from 'react-redux';
import TextInputWrapper from '../../components/TextInput';
import { login } from '../../redux/actions/authActions';
import { colors, icons } from '../../../assets';
import { height, width } from '../../Units';

const RegisterScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [vehicleYear, setVehicleYear] = useState('');
  const [vehicleMake, setVehicleMake] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [aboutMe, setAboutMe] = useState('');
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Image source={icons.signupHeader} style={styles.loginHeader} />
          <View style={{
            alignItems: 'center',
            marginTop: height * -13.5
          }}>
            <View style={styles.profileImageContainer}>
              <View style={{ width: width * 20, }}>
                <Image source={icons.profileImage} style={styles.profileImage} />
                <View style={{
                  backgroundColor: colors.red,
                  position: 'absolute',
                  bottom: 0,
                  right: width * 0.5,
                  padding: width * 1,
                  borderRadius: width * 3
                }}>
                  <Image source={icons.cameraIcon} style={{ width: width * 4, height: width * 4, resizeMode: 'contain' }} />
                </View>
              </View>
            </View>
            <TextInputWrapper
              onChangeText={setFirstName}
              value={firstName}
              placeholder="Name"
              label="First Name"
              styles={styles.inputContainer}
            />
            <TextInputWrapper
              onChangeText={setLastName}
              value={lastName}
              placeholder="Last Name"
              label="Last Name"
              styles={styles.inputContainer}
            />
            <TextInputWrapper
              onChangeText={setEmail}
              value={email}
              placeholder="Email"
              label="Email Address"
              styles={styles.inputContainer}
            />
            <TextInputWrapper
              onChangeText={setUsername}
              value={username}
              placeholder="Username"
              label="Username"
              styles={styles.inputContainer}
            />
            <TextInputWrapper
              onChangeText={setPhoneNumber}
              value={phoneNumber}
              placeholder="Phone"
              label="Phone Number"
              styles={styles.inputContainer}
            />
            <TextInputWrapper
              onChangeText={setVehicleYear}
              value={vehicleYear}
              placeholder="Vehicle Year"
              label="Vehicle Year"
              styles={styles.inputContainer}
            />
            <TextInputWrapper
              onChangeText={setVehicleMake}
              value={vehicleMake}
              placeholder="Vehicle Make"
              label="Vehicle Make"
              styles={styles.inputContainer}
            />
            <TextInputWrapper
              onChangeText={setVehicleModel}
              value={vehicleModel}
              placeholder="Vehicle Model"
              label="Vehicle Model"
              styles={styles.inputContainer}
            />
            <TextInputWrapper
              onChangeText={setAboutMe}
              value={aboutMe}
              placeholder="About"
              label="About Me"
              multiline={true}
              textStyles={{ height: height * 18 }}
              numberOfLines={40}
            />
            {/* <Text style={styles.errorText}>{errorText}</Text> */}
            <TouchableOpacity onPress={onSubmit} style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Signup</Text>
            </TouchableOpacity>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginBottom: height * 2,
              marginTop: height * 5
            }}>
              <Text style={{
                color: colors.greyText,
                fontWeight: '400',
                fontSize: width * 3.5
              }}>Don’t have an account? </Text>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.push('Login')}>
                <Text style={{
                  color: colors.red,
                  fontWeight: 'bold',
                  fontSize: width * 3.5
                }}>Login</Text></TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default RegisterScreen;
