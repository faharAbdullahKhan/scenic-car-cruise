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
const HomeScreen = ({ navigation }) => {
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
                <Image source={icons.homeScreenHeader} style={styles.loginHeader} />
                <View style={{
                    width: width * 85,
                    alignSelf: 'center',
                }}>
                    <View style={{
                        position: 'absolute',
                        top: width * -56
                    }}>
                        <View style={{ alignItems: 'flex-end', marginBottom: width * 6 }}>
                            <View style={{ alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => navigation.navigate('Members')}>
                                    <Image source={icons.profileImage} style={{
                                        height: width * 11,
                                        width: width * 11,
                                        resizeMode: 'contain'
                                    }} />
                                </TouchableOpacity>
                                <Text style={{
                                    color: colors.white,
                                    fontSize: width * 3.5,
                                    fontWeight: 'bold'
                                }}>Smith Grey</Text>
                            </View>
                        </View>
                        <TextInputWrapper
                            search={true}
                            onChangeText={setSearchText}
                            value={searchText}
                            placeholder="Search"
                            textStyles={{ width: width * 85 }}
                        />

                        <FlatList
                            style={{
                                marginTop: width * 8
                            }}
                            data={options}
                            keyExtractor={item => item.id}
                            renderItem={homeItem}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};
export default HomeScreen;
