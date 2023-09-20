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

    const displayBoxes = ({ item, index }) => {
        return <View style={{
            width: width * 90,
            marginVertical: width * 2,
        }}>
            <MessgaeBubble direction={index % 2 == 0 ? 'right' : 'left'} />
        </View>
    }

    const MessgaeBubble = ({ direction }) => {
        if (direction == 'right') {
            return <View style={{
                alignSelf: 'flex-start',
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Image source={icons.profileImage2} style={{
                        width: width * 5,
                        height: width * 5,
                        resizeMode: 'contain',
                        marginBottom: width * 5,
                    }} />
                    <View>
                        <View style={{
                            width: width * 60,
                            backgroundColor: colors.primary,
                            paddingVertical: width * 3,
                            paddingHorizontal: width * 2,
                            borderBottomLeftRadius: width * 3,
                            borderBottomRightRadius: width * 3,
                            borderTopRightRadius: width * 3,
                            marginLeft: width * 1,
                        }}>
                            <Text style={{
                                color: colors.white,
                                fontSize: width * 2.8,
                            }}>WOWOWOWOWOWOWO</Text>
                        </View>
                        <View style={{
                            backgroundColor: colors.primary,
                            height: width * 2.5,
                            width: width * 3.5,
                            position: 'absolute',
                            borderBottomLeftRadius: width * 10
                        }} />
                    </View>
                </View>
                <Text style={{
                    color: width * 3,
                    fontSize: width * 2.4,
                    textAlign: 'right'
                }}>1 day ago</Text>
            </View>
        } else {
            return <View style={{
                alignSelf: 'flex-end',
            }}>
                <View>
                    <View style={{
                        width: width * 60,
                        borderWidth: width * 0.3,
                        borderColor: colors.greyText,
                        paddingVertical: width * 3,
                        paddingHorizontal: width * 2,
                        borderBottomLeftRadius: width * 3,
                        borderBottomRightRadius: width * 3,
                        borderTopLeftRadius: width * 3,
                        marginRight: width * 1,
                    }}>
                        <Text style={{
                            color: colors.greyText,
                            fontSize: width * 2.8,
                        }}>WOWOWOWOWOWOWO WOWOWOWOWOWOWO WOWOWOWOWOWOWO WOWOWOWOWOWOWO</Text>
                    </View>
                    <View style={{
                        // backgroundColor: 'blue',
                        backgroundColor: colors.white,
                        borderTopColor: colors.greyText,
                        borderTopWidth: width * 0.3,
                        borderRightColor: colors.greyText,
                        borderRightWidth: width * 0.6,
                        height: width * 2.1,
                        width: width * 4.5,
                        position: 'absolute',
                        right: 0,
                        borderBottomRightRadius: width * 10
                    }} />
                </View>
                <Text style={{
                    color: width * 3,
                    fontSize: width * 2.4,
                    textAlign: 'left'
                }}>1 day ago</Text>
            </View>
        }
    }
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
                                textStyles={{ width: width * 85, borderRadius: width * 40 }}
                                placeholderTextColor={colors.greyLight}
                            // clickSearch={() => navigation.navigate('AllRoutesList')}
                            />
                            <TextInputWrapper
                                mapSearch2={true}
                                onChangeText={setText2}
                                value={text2}
                                placeholder="United kingdoms"
                                textStyles={{ width: width * 85, borderRadius: width * 40 }}
                                styles={{ marginTop: width * 3 }}
                                placeholderTextColor={colors.greyLight}
                            // clickSearch={() => navigation.navigate('AllRoutesList')}
                            />
                        </View>
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
                            }}>
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
                            }}>
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

            </ImageBackground>
        </SafeAreaView >
    );
};
export default MapHomeScreen;
