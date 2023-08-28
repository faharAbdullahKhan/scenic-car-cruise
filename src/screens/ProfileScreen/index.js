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
    FlatList
} from 'react-native';
import styles from './styles';
import { useDispatch } from 'react-redux';
import { colors, icons } from '../../../assets';
import { height, width } from '../../Units';

const options = [
    { id: 1, name: 'America to UK', route: '' },
    { id: 2, name: 'America to UK(2)', route: '' },
    { id: 3, name: 'America to USA', route: '' },
    { id: 4, name: 'America to Germany', route: '' }
]
const ProfileScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    // const onSubmit = async () => {
    // };
    const homeItem = ({ item, index }) => {
        return <TouchableOpacity key={index}
            // onPress={onSubmit} 
            style={styles.submitButton}>
            <View style={{
                width: width * 49,
            }}>

                <Text style={styles.submitButtonText}>{item.name}</Text>
                <Text style={styles.submitButtonText2}>1000km</Text>
                <Text style={styles.submitButtonText3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit vel, vestibulum </Text>
            </View>
            <View style={{
                width: width * 34,
            }}>
                <View style={{
                    width: width * 30,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignSelf: 'flex-end'
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Image source={icons.likeIcon} style={{
                            resizeMode: 'contain',
                            marginRight: width * 0.5,
                            width: width * 3.5,
                            height: width * 3.5
                        }} />
                        <Text style={{
                            fontSize: width * 3.3,
                            color: colors.black
                        }}>95</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Image source={icons.chatIcon} style={{
                            resizeMode: 'contain',
                            marginRight: width * 0.5,
                            width: width * 3.5,
                            height: width * 3.5
                        }} />
                        <Text style={{
                            fontSize: width * 3.3,
                            color: colors.black
                        }}>15</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Image source={icons.starIcon} style={{
                            resizeMode: 'contain',
                            marginRight: width * 0.5,
                            width: width * 3.5,
                            height: width * 3.5
                        }} />
                        <Text style={{
                            fontSize: width * 3.3,
                            color: colors.black
                        }}>4.9</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: width * 8 }}>
                    <TouchableOpacity style={{ width: width * 16, height: width * 5, borderRadius: width * 1.2, backgroundColor: colors.buttonColor, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{
                            color: colors.white,
                            fontSize: width * 2
                        }}>Edit Route</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: width * 16, height: width * 5, borderRadius: width * 1.2, backgroundColor: colors.red, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{
                            color: colors.white,
                            fontSize: width * 2
                        }}>Delete Route</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
                    marginTop: width * 6,
                    marginBottom: width * 3
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
                    alignItems: 'center',
                    marginBottom: width * 5
                }}>
                    <Image source={icons.profileImage2}
                        style={{
                            height: width * 21,
                            width: width * 21,
                            resizeMode: 'contain'
                        }} />
                    <Text style={{
                        color: colors.black,
                        fontSize: width * 4.8,
                        fontWeight: 'bold',
                        marginTop: width * 1.5
                    }}>Smith Grey</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    width: width * 80,
                    alignSelf: 'center',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: width * 4,
                        color: colors.black
                    }}># of Routes Created</Text>
                    <View style={{
                        backgroundColor: colors.buttonColor,
                        width: width * 25,
                        height: width * 9,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: width * 2
                    }}>
                        <Text style={{
                            color: colors.white,
                            fontWeight: 'bold',
                            fontSize: width * 4.5
                        }}>4</Text>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row',
                    width: width * 80,
                    alignSelf: 'center',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: width * 2
                }}>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: width * 4,
                        color: colors.black
                    }}>Average Route Rating</Text>
                    <View style={{
                        backgroundColor: colors.buttonColor,
                        width: width * 25,
                        height: width * 9,
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        borderRadius: width * 2
                    }}>
                        <Image source={icons.starIcon} style={{
                            marginRight: width * 1.5
                        }} />
                        <Text style={{
                            color: colors.white,
                            fontWeight: 'bold',
                            fontSize: width * 4.5
                        }}>4.9</Text>
                    </View>
                </View>
                <FlatList
                    style={{
                        marginTop: width * 8,
                        width: width * 90,
                        alignSelf: 'center',
                    }}
                    data={options}
                    keyExtractor={item => item.id}
                    renderItem={homeItem}
                />
            </View>
        </SafeAreaView>
    );
};
export default ProfileScreen;
