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

const MembersScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    const displayBoxes = ({ item, index }) => {
        return <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: width * 90,
            justifyContent: 'space-between',
            marginVertical: width * 2,
            paddingVertical: width * 2,
            borderBottomColor: colors.greyLight,
            borderBottomWidth: width * 0.3
        }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Image source={icons.profileImage2} style={{
                    width: width * 11,
                    height: width * 11,
                    resizeMode: 'contain'
                }} />
                <Text style={{
                    fontWeight: 'bold',
                    color: colors.black,
                    fontSize: width * 4,
                    marginLeft: width * 4
                }}>Name {index + 1}</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Image source={icons.chatGroup} style={{
                    width: width * 7.5,
                    height: width * 7.5,
                    resizeMode: 'contain',
                }} />
                {index != 0 ? <Image source={icons.trippleLineIcon} style={{
                    width: width * 5,
                    height: width * 5,
                    resizeMode: 'contain',
                    marginLeft: width * 4
                }} /> : <Text style={{
                    fontWeight: 'bold',
                    color: colors.black,
                    fontSize: width * 3.2,
                    marginLeft: width * 4
                }}>Admin</Text>}
            </View>
        </View>
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
                    <Text style={{
                        color: colors.black,
                        fontSize: width * 5,
                        fontWeight: 'bold'
                    }}>
                        Members
                    </Text>

                    <View style={{
                        width: width * 6.5,
                        height: width * 6.5
                    }} />
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    alignSelf: 'center',
                    width: width * 90,
                    marginTop: width * 6,
                    marginBottom: width * 3
                }}>
                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: width * 72,
                        height: width * 10,
                        backgroundColor: colors.white,
                        paddingHorizontal: width * 3.5,
                        borderRadius: width * 1,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.23,
                        shadowRadius: 2.62,

                        elevation: 4,
                    }}>
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: width * 4,
                            color: colors.black
                        }}>Active Driver</Text>
                        <Image source={icons.dropDownArrow} style={{
                            tintColor: colors.black,
                            resizeMode: 'contain'
                        }} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            backgroundColor: colors.red,
                            height: width * 9,
                            width: width * 9,
                            alignItems: 'center',
                            borderRadius: width * 5,
                            justifyContent: 'center'
                        }}>
                        <Image source={icons.chatIcon} style={{
                            tintColor: colors.white,
                            height: width * 4,
                            width: width * 4,
                            resizeMode: 'contain'
                        }} />
                    </TouchableOpacity>
                </View>

                <View style={{
                    alignSelf: 'center',
                    width: width * 90,
                }}>
                    <FlatList
                        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
                        renderItem={displayBoxes}
                        style={{
                            marginTop: width * 3,
                            marginBottom: width * 55
                        }}
                    />
                </View>
                <TouchableOpacity style={{
                    height: width * 12,
                    width: width * 90,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: width * 5,
                    backgroundColor: colors.buttonColor,
                    borderRadius: width * 1.5,
                    position: 'absolute',
                    bottom: width * 3,
                    alignSelf: 'center'
                }}>
                    <Text style={{
                        color: '#FFF',
                        fontSize: width * 4.2,
                        fontWeight: '500'
                    }}>Add members</Text>
                    <Image source={icons.PlusIcon} style={{
                        width: width * 4.5,
                        height: width * 4.5,
                        resizeMode: 'contain'
                    }} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};
export default MembersScreen;
