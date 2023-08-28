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
} from 'react-native';
import styles from './styles';
import { useDispatch } from 'react-redux';
import TextInputWrapper from '../../components/TextInput';
import { colors, icons } from '../../../assets';
import { height, width } from '../../Units';

const options = [
    { id: 1, name: 'View/Edit Profile', route: '' },
    { id: 2, name: 'Search All routes', route: '' },
    { id: 3, name: 'Routes Shared With Me', route: '' },
    { id: 4, name: 'My Saved Routes', route: '' },
    { id: 5, name: 'My Created Routes', route: '' },
    { id: 6, name: 'Create New Route', route: '' }
]
const ProfileScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState('');

    // const onSubmit = async () => {
    // };
    const homeItem = ({ item, index }) => {
        return <TouchableOpacity key={index}
            // onPress={onSubmit} 
            style={styles.submitButton}>
            <Text style={styles.submitButtonText}>{item.name}</Text>
            <Image source={icons.PlusIcon} style={{ width: width * 4, height: width * 4, resizeMode: 'contain' }} />
        </TouchableOpacity>
    }
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <StatusBar barStyle="dark-content" />
            <View style={styles.container}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    alignSelf: 'center',
                    width: width * 95,
                    marginVertical: width * 6
                }}>
                    <TouchableOpacity style={{
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

                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: width * 3.5,
                        color: colors.black
                    }}>Log Out</Text>
                </View>
                <View style={{
                    alignItems: 'center'
                }}>
                    <Image source={icons.profileImage2}
                        style={{
                            height: width * 23,
                            width: width * 23,
                            resizeMode: 'contain'
                        }} />
                    <Text style={{
                        color: colors.black,
                        fontSize: width * 4.8,
                        fontWeight: 'bold',
                        marginTop: width * 1.5
                    }}>Smith Grey</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};
export default ProfileScreen;
