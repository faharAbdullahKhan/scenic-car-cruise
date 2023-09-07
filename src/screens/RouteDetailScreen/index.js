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
import { width } from '../../Units';

const datm = [
    {
        arrow: icons.arrowRight,
        icon: true,
        iconPath: icons.chatGroup,
        text: 'Lorem ipsum dolor sit amet, consectetur '
    },
    {
        arrow: icons.arrowLeft,
        icon: true,
        iconPath: icons.imageGroup,
        text: 'Lorem ipsum dolor sit amet, consectetur'
    },
    {
        arrow: icons.arrowUp,
        icon: false,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
    },
    {
        arrow: icons.arrowLeft,
        icon: false,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
    },
    {
        arrow: icons.arrowRight,
        icon: true,
        iconPath: icons.imageGroup,
        text: 'Lorem ipsum dolor sit amet, consectetur'
    }
];

const RouteDetailScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    const displayBoxes = ({ item, index }) => {
        return <View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: width * 3.5,
            }}>
                <Image source={item.arrow} style={{
                    width: width * 6,
                    height: width * 6,
                    resizeMode: 'contain'
                }} />
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: width * 80
                }}>
                    <Text style={{
                        color: colors.greyText2,
                        fontSize: width * 3,
                        marginLeft: width * 3,
                    }}>{item.text}</Text>

                    {item.icon && <Image source={item.iconPath} style={{
                        height: width * 7.5,
                        width: width * 7.5,
                        resizeMode: 'contain'
                    }} />}
                </View>
            </View>
            {datm?.length - 1 != index && <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Text style={{
                    color: colors.greyText2,
                    fontWeight: 'bold',
                    fontSize: width * 2.7
                }}>Then 1.16miles</Text>
                <View style={{
                    height: width * 0.3,
                    width: width * 62,
                    marginLeft: width * 2,
                    backgroundColor: colors.greyLight
                }} />
            </View>}
        </View>
    }

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
                        <Text style={{
                            color: colors.black,
                            fontSize: width * 5,
                            fontWeight: 'bold'
                        }}>
                            Route Name-00031
                        </Text>
                        <TouchableOpacity
                            // onPress={() => navigation.pop()}
                            style={{
                                height: width * 9,
                                width: width * 9,
                                alignItems: 'center',
                                borderRadius: width * 5,
                                justifyContent: 'center'
                            }}>
                            <Image source={icons.pdfIcon} style={{
                                height: width * 6,
                                width: width * 6,
                                resizeMode: 'contain'
                            }} />
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        alignSelf: 'center',
                        width: width * 90,
                    }}>
                        <View style={{
                            alignSelf: 'center',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Text style={{
                                color: colors.greyText,
                                fontSize: width * 4,
                                fontWeight: 'bold',
                                textAlign: 'center'
                            }}>
                                Sponsored by
                            </Text>
                            <Image source={icons.sponsorLogo} style={{
                                resizeMode: 'contain',
                                height: width * 28,
                                width: width * 35,
                            }} />

                            <Image source={icons.routeName}
                                style={{
                                    resizeMode: 'cover',
                                    height: width * 28,
                                    width: width * 90,
                                    borderRadius: width * 2.5,
                                    marginVertical: width * 1.5
                                }}
                            />

                            <View style={{
                                width: width * 90,
                            }}>
                                <Text style={{
                                    color: colors.black,
                                    fontWeight: 'bold',
                                    fontSize: width * 6.5,
                                }}>
                                    25 min
                                </Text>
                                <Text style={{
                                    color: colors.greyText,
                                    fontWeight: 'bold',
                                    fontSize: width * 3,
                                    marginLeft: width * 6
                                }}>
                                    1.16miles
                                </Text>
                            </View>
                        </View>
                        <FlatList
                            nestedScrollEnabled={true}
                            data={datm}
                            renderItem={displayBoxes}
                            style={{
                                marginTop: width * 3,
                                // marginBottom: width * 25 
                            }}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
export default RouteDetailScreen;
