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
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import styles from './styles';
import { useDispatch } from 'react-redux';
import { colors, icons } from '../../../assets';
import { height, width } from '../../Units';

const MapScreenThree = ({ navigation }) => {
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
                        marginTop: width * 3,
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Text style={{
                                fontSize: width * 5,
                                fontWeight: 'bold',
                                color: colors.black
                            }}>Route Name-00031</Text>
                            <Image source={icons.pen} style={{
                                height: width * 5,
                                width: width * 5,
                                marginLeft: width * 2,
                                resizeMode: 'contain'
                            }} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: width * 80, alignSelf: 'center', marginTop: width * 3 }}>
                            <Image source={icons.picIc} style={{
                                height: width * 15,
                                width: width * 15,
                                marginLeft: width * 2,
                                resizeMode: 'contain'
                            }} />
                            <Image source={icons.videoIc} style={{
                                height: width * 15,
                                width: width * 15,
                                marginLeft: width * 2,
                                resizeMode: 'contain'
                            }} />
                            <Image source={icons.typoIc} style={{
                                height: width * 15,
                                width: width * 15,
                                marginLeft: width * 2,
                                resizeMode: 'contain'
                            }} />
                            <Image source={icons.saveIc} style={{
                                height: width * 15,
                                width: width * 15,
                                marginLeft: width * 2,
                                resizeMode: 'contain'
                            }} />
                        </View>
                    </View>
                    <View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginBottom: width * 3
                        }}>
                            <Image source={icons.binIc}
                                style={{
                                    resizeMode: 'contain',
                                    height: width * 13,
                                    width: width * 13,
                                    marginLeft: width * 4,
                                    marginTop: width * 15
                                }} />

                            <Image source={icons.frameIc}
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
                            height: width * 35,
                            width: width * 100,
                            borderTopLeftRadius: width * 12,
                            borderTopRightRadius: width * 12,
                            // flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingBottom: width * 5
                        }}>

                            <View style={{
                                flexDirection: 'row',
                                width: width * 100,
                                paddingTop: width * 0.5,
                                paddingBottom: width * 2,
                                justifyContent: 'space-evenly',
                                alignSelf: 'center'
                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                    backgroundColor: colors.pink,
                                    borderRadius: width * 5,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    paddingVertical: width * 1.5,
                                    paddingHorizontal: width * 3.5,
                                }}>
                                    <Image source={icons.ChatI} style={{
                                        resizeMode: 'contain',
                                        marginRight: width * 1,
                                        width: width * 5,
                                        height: width * 5
                                    }} />
                                    <Text style={{
                                        color: colors.black,
                                        fontSize: width * 2.5,
                                        fontWeight: '500'
                                    }}>View/send {"\n"} Message</Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    backgroundColor: colors.pink,
                                    borderRadius: width * 5,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    paddingVertical: width * 1.5,
                                    paddingHorizontal: width * 3.5,
                                }}>
                                    <Image source={icons.AleartI} style={{
                                        resizeMode: 'contain',
                                        marginRight: width * 1,
                                        width: width * 5,
                                        height: width * 5
                                    }} />
                                    <Text style={{
                                        color: colors.black,
                                        fontSize: width * 2.5,
                                        fontWeight: '500'
                                    }}>Report</Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    backgroundColor: colors.pink,
                                    borderRadius: width * 5,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    paddingVertical: width * 1.5,
                                    paddingHorizontal: width * 3.5,
                                }}>
                                    <Image source={icons.ShareI} style={{
                                        resizeMode: 'contain',
                                        marginRight: width * 1,
                                        width: width * 5,
                                        height: width * 5
                                    }} />
                                    <Text style={{
                                        color: colors.black,
                                        fontSize: width * 2.5,
                                        fontWeight: '500'
                                    }}>Share Route</Text>
                                </View>
                            </View>

                            <TouchableOpacity style={{
                                height: width * 11,
                                width: width * 90,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                paddingHorizontal: width * 5,
                                backgroundColor: colors.buttonColor,
                                borderRadius: width * 1.5,
                                alignSelf: 'center'
                            }}
                                onPress={() => navigation.pop()}>
                                <Text style={{
                                    color: '#FFF',
                                    fontWeight: '500',
                                    fontSize: width * 3.8,
                                }}>Download PDF</Text>
                                <Image source={icons.PDFI} style={{
                                    width: width * 7.5,
                                    height: width * 7.5,
                                    resizeMode: 'contain'
                                }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView >
    );
};
export default MapScreenThree;
