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
import TextInputWrapper from '../../components/TextInput';

const options = [
    { id: 1, name: 'America to UK', route: '' },
    { id: 2, name: 'America to UK(2)', route: '' },
    { id: 3, name: 'America to USA', route: '' },
    { id: 4, name: 'America to Germany', route: '' },
    { id: 5, name: 'America to UK', route: '' },
    { id: 6, name: 'America to UK(2)', route: '' },
    { id: 7, name: 'America to USA', route: '' },
    { id: 8, name: 'America to Germany', route: '' }
]
const containMyRoute = [1, 2, 4, 6, 7]
const AllRoutesScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState('');

    const homeItem = ({ item, index }) => {
        return <View style={{
            flexDirection: 'row',
            alignItems: 'center'
        }}>
            <View key={index}
                style={styles.submitButton}>
                <View style={{
                    width: width * 40,
                }}>

                    <Text style={styles.submitButtonText}>{item.name}</Text>
                    <Text style={styles.submitButtonText2}>1000km</Text>
                    <Text style={styles.submitButtonText3} numberOfLines={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit vel, vestibulum </Text>
                    <View style={{ flexDirection: 'row', marginVertical: width * 2.5 }}>
                        <>
                            <Image source={containMyRoute.includes(index) ? icons.profileImage2 : icons.heartFull} style={{
                                height: width * 4,
                                width: width * 4,
                                resizeMode: 'contain',
                                marginRight: width * 1
                            }} />
                            <Text style={{
                                fontSize: width * 3,
                                fontWeight: '500',
                                color: colors.black,
                            }}>{containMyRoute.includes(index) ? 'My route' : 'Saved'}</Text>
                        </>
                    </View>
                </View>
                <View style={{
                    width: width * 29.5,
                }}>
                    <View style={{
                        width: width * 28,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignSelf: 'flex-end'
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: width * 8,
                            justifyContent: 'center'
                        }}>
                            <Image source={icons.likeIcon} style={{
                                resizeMode: 'contain',
                                marginRight: width * 0.5,
                                width: width * 3.5,
                                height: width * 3.5
                            }} />
                            <Text style={{
                                fontSize: width * 3.3,
                                color: colors.black,
                                width: width * 5,
                                textAlign: 'center',
                            }}>95</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: width * 8,
                            justifyContent: 'center'
                        }}>
                            <Image source={icons.chatIcon} style={{
                                resizeMode: 'contain',
                                marginRight: width * 0.5,
                                width: width * 3,
                                height: width * 3
                            }} />
                            <Text style={{
                                fontSize: width * 3.3,
                                color: colors.black,
                                width: width * 5,
                                textAlign: 'center'
                            }}>15</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: width * 8,
                            justifyContent: 'center'
                        }}>
                            <Image source={icons.starIcon} style={{
                                resizeMode: 'contain',
                                marginRight: width * 0.5,
                                width: width * 3.5,
                                height: width * 3.5
                            }} />
                            <Text style={{
                                fontSize: width * 3.3,
                                color: colors.black,
                                width: width * 5,
                                textAlign: 'center',
                            }}>4.9</Text>
                        </View>
                    </View>
                    <View style={{
                        marginTop: width * 1,
                        width: width * 28,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignSelf: 'flex-end'
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: width * 8,
                            justifyContent: 'center'
                        }}>
                            <Image source={icons.pictureIcon} style={{
                                resizeMode: 'contain',
                                marginRight: width * 0.5,
                                width: width * 3.5,
                                height: width * 3.5
                            }} />
                            <Text style={{
                                fontSize: width * 3.3,
                                color: colors.black,
                                width: width * 5,
                                textAlign: 'center',
                            }}>8</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: width * 8,
                            justifyContent: 'center'
                        }}>
                            <Image source={icons.trippleLineIcon} style={{
                                resizeMode: 'contain',
                                marginRight: width * 0.5,
                                width: width * 3.5,
                                height: width * 3.5
                            }} />
                            <Text style={{
                                fontSize: width * 3.3,
                                color: colors.black,
                                width: width * 5,
                                textAlign: 'center',
                            }}>2</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: width * 8,
                            justifyContent: 'center'
                        }}>
                            <Image source={icons.videoIcon} style={{
                                resizeMode: 'contain',
                                marginRight: width * 0.5,
                                width: width * 3.5,
                                height: width * 3.5
                            }} />
                            <Text style={{
                                fontSize: width * 3.3,
                                color: colors.black,
                                width: width * 5,
                                textAlign: 'center',
                            }}>5</Text>
                        </View>
                    </View>
                    {containMyRoute.includes(index) ? <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: width * 5 }}>
                        <TouchableOpacity style={{ width: width * 14.2, height: width * 5, borderRadius: width * 1.2, backgroundColor: colors.red, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{
                                color: colors.white,
                                fontSize: width * 2
                            }}>Unpublish</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: width * 14.2, height: width * 5, borderRadius: width * 1.2, backgroundColor: colors.buttonColor, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{
                                color: colors.white,
                                fontSize: width * 2
                            }}>Edit Route</Text>
                        </TouchableOpacity>
                    </View> : <View style={{
                        height: width * 10,
                    }} />}
                </View>
            </View>
            {containMyRoute.includes(index) && <View style={{
                marginLeft: width * 3
            }}>
                <TouchableOpacity style={{
                    backgroundColor: colors.primary,
                    borderRadius: width * 5,
                    height: width * 7,
                    width: width * 7,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Image source={icons.recycleBin} style={{
                        resizeMode: 'contain',
                        height: width * 4,
                        width: width * 4
                    }} />
                </TouchableOpacity>
            </View>}
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
                            height: width * 4,
                            width: width * 4,
                            resizeMode: 'contain'
                        }} />
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: width * 62,
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
                        }}>All Routes</Text>
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
                        <Image source={icons.trippleLine2} style={{
                            tintColor: colors.white,
                            height: width * 4,
                            width: width * 4,
                            resizeMode: 'contain'
                        }} />
                    </TouchableOpacity>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    alignSelf: 'center',
                    width: width * 90,
                    marginTop: width * 2,
                }}>
                    <View>
                        <TextInputWrapper
                            search={true}
                            onChangeText={setSearchText}
                            value={searchText}
                            placeholder="Zip or City, State)"
                            textStyles={{ width: width * 65 }}
                        />
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center'
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
                            <Image source={icons.addPeopleIcon} style={{
                                tintColor: colors.white,
                                height: width * 5,
                                width: width * 5,
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
                            <Image source={icons.PlusIcon} style={{
                                tintColor: colors.white,
                                height: width * 5,
                                width: width * 5,
                                resizeMode: 'contain'
                            }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <FlatList
                    style={{
                        marginTop: width * 6,
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
export default AllRoutesScreen;
