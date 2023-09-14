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
    ScrollView,
    FlatList
} from 'react-native';
import styles from './styles';
import { useDispatch } from 'react-redux';
import { colors, icons } from '../../../assets';
import { height, width } from '../../Units';

// const options = [
//     { id: 1, name: 'America to UK', route: '' },
//     { id: 2, name: 'America to UK(2)', route: '' },
//     { id: 3, name: 'America to USA', route: '' },
//     { id: 4, name: 'America to Germany', route: '' },
//     { id: 5, name: 'America to UK', route: '' },
//     { id: 6, name: 'America to UK(2)', route: '' },
//     { id: 7, name: 'America to USA', route: '' },
//     { id: 8, name: 'America to Germany', route: '' }
// ]
// const containMyRoute = [1, 2, 4, 6, 7]
const AllRouteDetailScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [toggle, setToggle] = useState(false);

    const renderImagesList = ({ item, index }) => {
        return <Image source={index % 2 == 0 ? icons.pic1 : icons.pic2} style={{
            resizeMode: 'contain',
            width: width * 20,
            height: width * 20,
            marginRight: width * 2
        }} />
    }

    const renderVideosList = ({ item, index }) => {
        return <View>
            <Image source={index % 2 == 0 ? icons.pic1 : icons.pic2} style={{
                resizeMode: 'contain',
                width: width * 20,
                height: width * 20,
                marginRight: width * 2
            }} />
            <View style={{
                width: width * 20,
                height: width * 20,
                marginRight: width * 2,
                position: 'absolute',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0,0,0,0.3)',
            }}>
                <Image source={icons.playVideoIcon} style={{
                    resizeMode: 'contain',
                    width: width * 5,
                    height: width * 5,
                }} />
            </View>
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
                            onPress={() => navigation.navigate('Home')}
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
                                height: width * 3,
                                width: width * 3,
                                resizeMode: 'contain'
                            }} />
                        </TouchableOpacity>
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: width * 5,
                            color: colors.black
                        }}>Route Name-00031</Text>
                        <View style={{
                            flexDirection: 'row'
                        }}>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: colors.red,
                                    height: width * 9,
                                    width: width * 9,
                                    alignItems: 'center',
                                    borderRadius: width * 5,
                                    justifyContent: 'center'
                                }}>
                                <Image source={icons.heartFull} style={{
                                    height: width * 6,
                                    width: width * 6,
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
                                    justifyContent: 'center',
                                    marginLeft: width * 2
                                }}>
                                <Image source={icons.editIcon} style={{
                                    height: width * 5,
                                    width: width * 5,
                                    resizeMode: 'contain',
                                    tintColor: colors.white
                                }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{
                        width: width * 18,
                        height: width * 8.5,
                        backgroundColor: colors.primary,
                        flexDirection: 'row',
                        alignItems: 'center',
                        borderRadius: width * 4,
                        justifyContent: 'space-between',
                        paddingHorizontal: width * 1,
                        alignSelf: 'flex-end',
                        marginRight: width * 3,
                        marginTop: width * 2
                    }}>
                        {toggle ? <>
                            <TouchableOpacity
                                onPress={() => setToggle(!toggle)}
                                style={{
                                    backgroundColor: colors.white,
                                    width: width * 6.5,
                                    height: width * 6.5,
                                    borderRadius: width * 100,
                                }} />
                            <Text style={{
                                color: colors.white,
                                fontSize: width * 4,
                                fontWeight: 'bold',
                                width: width * 8,
                            }}>
                                Yes
                            </Text></> : <>
                            <Text style={{
                                color: colors.white,
                                fontSize: width * 4,
                                fontWeight: 'bold',
                                width: width * 7,
                                marginLeft: width * 1,
                            }}>
                                No
                            </Text>
                            <TouchableOpacity
                                onPress={() => setToggle(!toggle)}
                                style={{
                                    backgroundColor: colors.white,
                                    width: width * 6.5,
                                    height: width * 6.5,
                                    borderRadius: width * 100,
                                }} />
                        </>}
                    </View>
                    <View
                        style={{
                            width: width * 80,
                            alignSelf: 'center'
                        }}
                    >
                        <Text style={{
                            color: colors.black,
                            fontWeight: 'bold',
                            fontSize: width * 4.5,
                            marginVertical: width * 2
                        }}>Narrate Waypoint</Text>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit vel, vestibulum pellentesque habitant.</Text>
                        <Image source={icons.mapImage2} style={{
                            height: width * 50,
                            width: width * 80,
                            marginVertical: width * 5,
                            borderRadius: width * 3
                        }} />
                        <Text style={{
                            color: colors.black,
                            fontWeight: 'bold',
                            fontSize: width * 4.5,
                            marginVertical: width * 2
                        }}>Pick Your Route Narration Voice</Text>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit vel, vestibulum pellentesque habitant.</Text>
                        <TouchableOpacity style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: width * 80,
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
                            marginVertical: width * 5,
                        }}>
                            <Text style={{
                                fontSize: width * 3.5,
                                color: colors.greyLight
                            }}>Clint Eastwood</Text>
                            <Image source={icons.dropDownArrow} style={{
                                tintColor: colors.greyLight,
                                resizeMode: 'contain'
                            }} />
                        </TouchableOpacity>
                        <Text style={{
                            color: colors.black,
                            fontWeight: 'bold',
                            fontSize: width * 4.5,
                            marginVertical: width * 2
                        }}>Photos From Route (4)</Text>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit vel, vestibulum pellentesque habitant.</Text>
                    </View>
                    <FlatList
                        nestedScrollEnabled
                        data={[1, 2, 3, 4, 5]}
                        renderItem={renderImagesList}
                        horizontal
                        style={{
                            marginLeft: width * 10,
                            marginVertical: width * 2
                        }}
                    />
                    <View style={{
                        width: width * 80,
                        alignSelf: 'center'
                    }}>
                        <Text style={{
                            color: colors.black,
                            fontWeight: 'bold',
                            fontSize: width * 4.5,
                            marginVertical: width * 2
                        }}>Videos From Route (5)</Text>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit vel, vestibulum pellentesque habitant.</Text>
                    </View>
                    <FlatList
                        data={[1, 2, 3, 4, 5]}
                        renderItem={renderVideosList}
                        horizontal
                        style={{
                            marginLeft: width * 10,
                            marginVertical: width * 2
                        }}
                    />
                    <View style={{
                        width: width * 80,
                        alignSelf: 'center'
                    }}>
                        <Text style={{
                            color: colors.black,
                            fontWeight: 'bold',
                            fontSize: width * 4.5,
                            marginVertical: width * 2
                        }}>Points of Interest Descriptions</Text>
                        <View style={{
                            flexDirection: 'row',
                            marginVertical: width * 2
                        }}>
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: width * 5,
                                color: colors.black
                            }}>1.</Text>
                            <Text style={{
                                fontSize: width * 3,
                                marginLeft: width * 2,
                                marginTop: width * 0.2
                            }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit vel, vestibulum pellentesque habitant.</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            marginVertical: width * 2
                        }}>
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: width * 5,
                                color: colors.black
                            }}>2.</Text>
                            <Text style={{
                                fontSize: width * 3,
                                marginLeft: width * 2,
                                marginTop: width * 0.2
                            }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit vel, vestibulum pellentesque habitant.</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            marginVertical: width * 2
                        }}>
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: width * 5,
                                color: colors.black
                            }}>3.</Text>
                            <Text style={{
                                fontSize: width * 3,
                                marginLeft: width * 2,
                                marginTop: width * 0.2
                            }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit vel, vestibulum pellentesque habitant.</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <Text style={{
                                color: colors.black,
                                fontWeight: 'bold',
                                fontSize: width * 4.5,
                                marginVertical: width * 2
                            }}>Average Rating</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{
                                    flexDirection: 'row',
                                    backgroundColor: colors.buttonColor,
                                    width: width * 18,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: width * 7,
                                    borderRadius: width * 1
                                }}>
                                    <Image source={icons.starIcon} style={{
                                        tintColor: colors.white,
                                        width: width * 3.8,
                                        height: width * 3.8,
                                        resizeMode: 'contain'
                                    }} />
                                    <Text style={{
                                        color: colors.white,
                                        fontSize: width * 3.4,
                                        fontWeight: '700',
                                        marginLeft: width * 0.5
                                    }}>4.9</Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    backgroundColor: colors.buttonColor,
                                    width: width * 18,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: width * 7,
                                    borderRadius: width * 1,
                                    marginLeft: width * 3
                                }}>
                                    <Image source={icons.chatIcon} style={{
                                        tintColor: colors.white,
                                        width: width * 3.8,
                                        height: width * 3.8,
                                        resizeMode: 'contain'
                                    }} />
                                    <Text style={{
                                        color: colors.white,
                                        fontSize: width * 3.4,
                                        fontWeight: '700',
                                        marginLeft: width * 1
                                    }}>4</Text>
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>Preview Route</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.redButton}>
                            <Text style={styles.submitButtonText}>Save Route to My Favorites</Text>
                        </TouchableOpacity>
                        <View style={{
                            alignItems: 'center',
                            marginTop: width * 5,
                            marginBottom: width * 2
                        }}>
                            <Text style={{
                                color: colors.greyText,
                                fontSize: width * 4,
                                fontWeight: 'bold',
                            }}>
                                Sponsored by
                            </Text>
                            <Image source={icons.sponsorLogo} style={{
                                resizeMode: 'contain',
                                height: width * 28,
                                width: width * 35,
                            }} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
export default AllRouteDetailScreen;
