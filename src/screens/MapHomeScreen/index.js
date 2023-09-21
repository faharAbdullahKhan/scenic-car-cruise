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
    ImageBackground
} from 'react-native';
import styles from './styles';
import { useDispatch } from 'react-redux';
import { colors, icons } from '../../../assets';
import { height, width } from '../../Units';
import TextInputWrapper from '../../components/TextInput';

const MapHomeScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <StatusBar barStyle="dark-content" />
            <ImageBackground source={icons.mapFullScreen} style={{
                height: height * 100,
                width: width * 100,
                resizeMode: 'contain'
            }}>
                <View style={styles.container}>
                    <View>
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
                                    height: width * 6,
                                    width: width * 6,
                                    alignItems: 'center',
                                    borderRadius: width * 5,
                                    justifyContent: 'center'
                                }}>
                                <Image source={icons.backArrow} style={{
                                    tintColor: colors.white,
                                    height: width * 2.5,
                                    width: width * 2.5,
                                    resizeMode: 'contain'
                                }} />
                            </TouchableOpacity>
                            <View style={{
                                width: width * 6.5,
                                height: width * 6.5
                            }} />
                        </View>
                        <View style={{
                            alignSelf: 'center'
                        }}>
                            <TextInputWrapper
                                mapSearch1={true}
                                onChangeText={setText1}
                                value={text1}
                                placeholder="America"
                                textStyles={{ width: width * 85, height: width * 10.5, borderRadius: width * 40 }}
                                placeholderTextColor={colors.greyLight}
                            // clickSearch={() => navigation.navigate('AllRoutesList')}
                            />
                            <TextInputWrapper
                                mapSearch2={true}
                                onChangeText={setText2}
                                value={text2}
                                placeholder="United kingdoms"
                                textStyles={{ width: width * 85, height: width * 10.5, borderRadius: width * 40 }}
                                styles={{ marginTop: width * 2.5 }}
                                placeholderTextColor={colors.greyLight}
                            // clickSearch={() => navigation.navigate('AllRoutesList')}
                            />
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
                            height: width * 68,
                            width: width * 100,
                            borderTopLeftRadius: width * 12,
                            borderTopRightRadius: width * 12,
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                width: width * 100,
                                paddingTop: width * 3.5,
                                paddingBottom: width * 2,
                                justifyContent: 'space-evenly',
                                alignSelf: 'center',
                                borderBottomWidth: width * 0.3,
                                borderBottomColor: colors.greyText
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

                            <View style={{
                                width: width * 90,
                                alignSelf: 'center',
                                flex: 1,
                                paddingVertical: width * 3
                            }}>
                                <Text style={{
                                    color: colors.black,
                                    fontSize: width * 4,
                                    fontWeight: 'bold'
                                }}>Members</Text>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    marginVertical: width * 2
                                }}>
                                    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(({ item, index }) => <Image key={index} source={icons.profileImage} style={{
                                        resizeMode: 'contain',
                                        height: width * 8,
                                        width: width * 8,
                                        borderRadius: width * 3
                                    }} />)}
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
                                    onPress={() => navigation.navigate('MapScreenTwo')}>
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

                                <TouchableOpacity style={{
                                    marginTop: width * 2.5,
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
                                onPress={() => navigation.navigate('MapScreenThree')}
                                >
                                    <Text style={{
                                        color: '#FFF',
                                        fontSize: width * 3.8,
                                        fontWeight: '500'
                                    }}>Start Route</Text>
                                    <Image source={icons.PlusIcon} style={{
                                        width: width * 4.5,
                                        height: width * 4.5,
                                        resizeMode: 'contain',
                                        marginRight: width * 2
                                    }} />
                                </TouchableOpacity>

                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView >
    );
};
export default MapHomeScreen;
