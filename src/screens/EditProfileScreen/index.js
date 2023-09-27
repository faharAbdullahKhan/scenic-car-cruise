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
    FlatList,
    ScrollView
} from 'react-native';
import styles from './styles';
import { useDispatch } from 'react-redux';
import { colors, icons } from '../../../assets';
import { height, width } from '../../Units';
import TextInputWrapper from '../../components/TextInput';

const EditProfileScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [vehicleYear, setVehicleYear] = useState('');
    const [vehicleModel, setVehicleModel] = useState('');
    const [vehicleMake, setVehicleMake] = useState('');

    // const onSubmit = async () => {
    // };

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <StatusBar barStyle="dark-content" />
            <ScrollView>
                <View style={styles.container}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        alignSelf: 'center',
                        width: width * 90,
                        marginTop: width * 6,
                        marginBottom: width * 3
                    }}>
                        <TouchableOpacity
                            onPress={() => navigation.pop()}
                            style={{
                                backgroundColor: colors.red,
                                height: width * 9,
                                width: width * 9,
                                alignItems: 'center',
                                borderRadius: width * 5,
                                justifyContent: 'center'
                            }}>
                            <Image source={icons.backArrow} style={{
                                tintColor: colors.white,
                                height: width * 4,
                                width: width * 4,
                                resizeMode: 'contain'
                            }} />
                        </TouchableOpacity>

                        <Image source={icons.shareIcon} style={{
                            resizeMode: 'contain',
                            width: width * 6.5,
                            height: width * 6.5,
                        }} />
                    </View>
                    <View style={{
                        alignItems: 'center',
                        marginBottom: width * 10
                    }}>
                        <View style={{
                            marginTop: width * -8
                        }}>
                            <Image source={icons.profileImage2}
                                style={{
                                    height: width * 21,
                                    width: width * 21,
                                    resizeMode: 'contain'
                                }} />
                            <View style={{
                                position: 'absolute',
                                bottom: width * 1,
                                right: width * 1
                            }}>
                                <Image source={icons.editImage}
                                    style={{
                                        height: width * 5,
                                        width: width * 5,
                                        resizeMode: 'contain',
                                    }} />
                            </View>
                        </View>
                        <Text style={{
                            color: colors.black,
                            fontSize: width * 4.8,
                            fontWeight: 'bold',
                            marginTop: width * 1.5
                        }}>Smith Grey</Text>

                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: width * 1
                        }}>
                            <Image source={icons.starIcon}
                                style={{
                                    height: width * 3.5,
                                    width: width * 3.5,
                                    resizeMode: 'contain',
                                }}
                            />
                            <Text style={{
                                color: colors.greyText,
                                fontSize: width * 3.8,
                                marginLeft: width * 1
                            }}>4.9</Text>
                        </View>

                    </View>
                    <View style={{
                        alignSelf: 'center',
                        width: width * 90,
                    }}>
                        <TextInputWrapper
                            onChangeText={setFirstName}
                            value={firstName}
                            placeholder="First Name"
                            edit={true}
                            placeholderTextColor={colors.greyText4}
                            textStyles={{ width: width * 90, elevation: 0, borderBottomWidth: width * 0.2, borderBottomColor: colors.greyText4, marginBottom: width * 1.75 }}
                        />
                        <TextInputWrapper
                            onChangeText={setLastName}
                            value={lastName}
                            placeholder="Last Name"
                            edit={true}
                            placeholderTextColor={colors.greyText4}
                            textStyles={{ width: width * 90, elevation: 0, borderBottomWidth: width * 0.2, borderBottomColor: colors.greyText4, marginBottom: width * 1.75 }}
                        />
                        <TextInputWrapper
                            onChangeText={setEmail}
                            value={email}
                            placeholder="Email"
                            edit={true}
                            placeholderTextColor={colors.greyText4}
                            textStyles={{ width: width * 90, elevation: 0, borderBottomWidth: width * 0.2, borderBottomColor: colors.greyText4, marginBottom: width * 1.75 }}
                        />
                        <TextInputWrapper
                            onChangeText={setUserName}
                            value={userName}
                            placeholder="Username"
                            edit={true}
                            placeholderTextColor={colors.greyText4}
                            textStyles={{ width: width * 90, elevation: 0, borderBottomWidth: width * 0.2, borderBottomColor: colors.greyText4, marginBottom: width * 1.75 }}
                        />
                        <TextInputWrapper
                            onChangeText={setPhoneNumber}
                            value={phoneNumber}
                            placeholder="Phone Number"
                            edit={true}
                            placeholderTextColor={colors.greyText4}
                            textStyles={{ width: width * 90, elevation: 0, borderBottomWidth: width * 0.2, borderBottomColor: colors.greyText4, marginBottom: width * 1.75 }}
                        />
                        <TextInputWrapper
                            onChangeText={setVehicleYear}
                            value={vehicleYear}
                            placeholder="Vehicle Year"
                            edit={true}
                            placeholderTextColor={colors.greyText4}
                            textStyles={{ width: width * 90, elevation: 0, borderBottomWidth: width * 0.2, borderBottomColor: colors.greyText4, marginBottom: width * 1.75 }}
                        />
                        <TextInputWrapper
                            onChangeText={setVehicleModel}
                            value={vehicleModel}
                            placeholder="Vehicle Model"
                            edit={true}
                            placeholderTextColor={colors.greyText4}
                            textStyles={{ width: width * 90, elevation: 0, borderBottomWidth: width * 0.2, borderBottomColor: colors.greyText4, marginBottom: width * 1.75 }}
                        />
                        <TextInputWrapper
                            onChangeText={setVehicleMake}
                            value={vehicleMake}
                            placeholder="Vehicle Make"
                            edit={true}
                            placeholderTextColor={colors.greyText4}
                            textStyles={{ width: width * 90, elevation: 0, borderBottomWidth: width * 0.2, borderBottomColor: colors.greyText4, marginBottom: width * 1.75 }}
                        />
                        <TouchableOpacity
                            // onPress={onSubmit} 
                            style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>Update Profile</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
export default EditProfileScreen;
