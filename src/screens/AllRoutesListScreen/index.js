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
const AllRoutesListScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState('');

    const homeItem = ({ item, index }) => {
        return <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: width * 90,
            alignSelf: 'center'
        }}>
            <TouchableOpacity onPress={()=>navigation.navigate('AllRouteDetailScreen')}>
            <ImageBackground source={icons.mapImage} style={styles.submitButton}>

                <View style={{
                    width: width * 90,
                    height: width * 8,
                    backgroundColor: colors.buttonColor,
                    flexDirection: 'row'
                }}>
                    <View style={{
                        width: width * 40,
                        paddingLeft: width * 5,
                        justifyContent: 'center'
                    }}>
                        <Text style={{
                            color: colors.white,
                            fontSize: width * 3,
                            lineHeight: width * 3.3,
                        }}>{item.name}</Text>
                        <Text style={{
                            color: colors.white,
                            fontSize: width * 2,
                            lineHeight: width * 2,
                        }}>25KM</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        width: width * 50,
                        justifyContent: 'space-evenly',
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: width * 9,
                            justifyContent: 'center'
                        }}>
                            <Image source={icons.pictureIcon} style={{
                                resizeMode: 'contain',
                                marginRight: width * 0.5,
                                width: width * 3.5,
                                height: width * 3.5,
                                tintColor: colors.white
                            }} />
                            <Text style={{
                                fontSize: width * 2.8,
                                color: colors.white
                            }}>8</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: width * 9,
                            justifyContent: 'center'
                        }}>
                            <Image source={icons.trippleLineIcon} style={{
                                resizeMode: 'contain',
                                marginRight: width * 0.5,
                                width: width * 3.5,
                                height: width * 3.5,
                                tintColor: colors.white
                            }} />
                            <Text style={{
                                fontSize: width * 2.8,
                                color: colors.white
                            }}>2</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: width * 9,
                            justifyContent: 'center'
                        }}>
                            <Image source={icons.chatIcon} style={{
                                resizeMode: 'contain',
                                marginRight: width * 0.5,
                                width: width * 3.5,
                                height: width * 3.5,
                                tintColor: colors.white
                            }} />
                            <Text style={{
                                fontSize: width * 2.8,
                                color: colors.white
                            }}>4</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: width * 9,
                            justifyContent: 'center'
                        }}>
                            <Image source={icons.starIcon} style={{
                                resizeMode: 'contain',
                                marginRight: width * 0.5,
                                width: width * 3,
                                height: width * 3,
                            }} />
                            <Text style={{
                                fontSize: width * 2.8,
                                color: colors.white
                            }}>4.9</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
            </TouchableOpacity>
            <View style={{
                position: 'absolute',
                top: width * -2,
                right: width * -1,
            }}>
                <TouchableOpacity style={{
                    backgroundColor: colors.primary,
                    borderRadius: width * 5,
                    height: width * 8,
                    width: width * 8,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Image source={icons.recycleBin} style={{
                        resizeMode: 'contain',
                        height: width * 5,
                        width: width * 5
                    }} />
                </TouchableOpacity>
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
                        onPress={() => navigation.navigate('Home')}
                        style={{
                            backgroundColor: colors.red,
                            height: width * 9,
                            width: width * 9,
                            alignItems: 'center',
                            borderRadius: width * 5,
                            justifyContent: 'center'
                        }}>
                        <Image source={icons.crossIcon} style={{
                            tintColor: colors.white,
                            height: width * 3,
                            width: width * 3,
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
                        <Image source={icons.mapIcon} style={{
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
                            textStyles={{ width: width * 90 }}
                        />
                    </View>
                </View>
                <FlatList
                    contentContainerStyle={{
                        paddingTop: width * 6,
                        width: width * 100,
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
export default AllRoutesListScreen;
