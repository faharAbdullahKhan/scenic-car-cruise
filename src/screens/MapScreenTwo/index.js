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
    Image,
    ImageBackground
} from 'react-native';
import styles from './styles';
import { useDispatch } from 'react-redux';
import { colors, icons } from '../../../assets';
import { height, width } from '../../Units';

const MapScreenTwo = ({ navigation }) => {
    const dispatch = useDispatch();

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <StatusBar barStyle="dark-content" />
            <ImageBackground source={icons.mapFullScreen} style={{
                height: height * 100,
                width: width * 100,
                resizeMode: 'contain'
            }}>
                <View style={styles.container}>
                    <View style={{
                        backgroundColor: colors.primary,
                        width: width * 90,
                        height: width * 20,
                        borderRadius: width * 3,
                        alignSelf: 'center',
                        marginTop: width * 3,
                        justifyContent: 'center'
                    }}>
                        <View style={{
                            flexDirection: 'row',
                        }}>
                            <View style={{
                                marginHorizontal: width * 4
                            }}>
                                <Image source={icons.leftIconShare} style={{
                                    height: width * 8,
                                    width: width * 8,
                                    resizeMode: 'contain'
                                }} />
                                <Text style={{
                                    fontSize: width * 3,
                                    fontWeight: 'bold',
                                    color: colors.white
                                }}>255m</Text>
                            </View>
                            <Text style={{
                                fontSize: width * 7.5,
                                fontWeight: 'bold',
                                color: colors.white,
                                marginLeft: width * 10
                            }}>N 50th St</Text>
                        </View>
                    </View>
                    <View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>
                            <Image source={icons.sponsorLogo}
                                style={{
                                    resizeMode: 'contain',
                                    height: width * 35,
                                    width: width * 35,
                                    marginLeft: width * 4
                                }} />

                            <Image source={icons.PauseIcon}
                                style={{
                                    resizeMode: 'contain',
                                    height: width * 13,
                                    width: width * 13,
                                    marginRight: width * 4,
                                    marginTop: width * 15
                                }} />

                        </View>
                        <View style={{
                            backgroundColor: colors.white,
                            height: width * 30,
                            width: width * 100,
                            borderTopLeftRadius: width * 12,
                            borderTopRightRadius: width * 12,
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingBottom: width * 5
                        }}>
                            <View style={{
                                marginLeft: width * 8,
                                marginRight: width * 4
                            }}>
                                <Text style={{
                                    fontSize: width * 6,
                                    color: colors.black,
                                    fontWeight: 'bold'
                                }}>5 min</Text>
                                <Text style={{
                                    fontSize: width * 3,
                                    color: colors.black,
                                    fontWeight: 'bold'
                                }}>0.8 mi  10:53 PM</Text>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                marginLeft: width * 28
                            }}>
                                <Image source={icons.crossIcon} style={{
                                    height: width * 14,
                                    width: width * 14,
                                    resizeMode: 'contain'
                                }} />
                                <Image source={icons.ChatIcon2} style={{
                                    height: width * 14,
                                    width: width * 14,
                                    resizeMode: 'contain',
                                    marginLeft: width * 3
                                }} />
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView >
    );
};
export default MapScreenTwo;
