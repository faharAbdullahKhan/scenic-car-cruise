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

const MessageScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [commentText, setCommentText] = useState('');

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
                        Message
                    </Text>
                    <View style={{
                        width: width * 6.5,
                        height: width * 6.5
                    }} />
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: width * 100,
                    marginVertical: width * 1,
                    borderBottomColor: colors.greyLight,
                    borderBottomWidth: width * 0.3,
                    paddingBottom: width * 2
                }}>
                    <Text style={{
                        fontSize: width * 3.5,
                        color: colors.black
                    }}>Active Driver</Text>
                    <Image source={icons.dropDownArrow} style={{
                        tintColor: colors.black,
                        resizeMode: 'contain',
                        marginLeft: width * 1,
                        width: width * 2.5,
                        height: width * 2.5,
                        marginTop: width * 1
                    }} />
                </View>

                <View style={{
                    alignSelf: 'center',
                    width: width * 90,
                }}>
                    <FlatList
                        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
                        renderItem={displayBoxes}
                        style={{
                            height: height * 71
                        }}
                    />
                </View>
                <View style={{
                    height: width * 12,
                    width: width * 90,
                    flexDirection: 'row',
                    alignItems: 'center',
                    position: 'absolute',
                    bottom: width * 3,
                    alignSelf: 'center'
                }}>
                    <View style={{
                        flexDirection: 'row',
                        width: width * 78,
                        alignItems: 'center',
                        paddingVertical: width * 2,
                        paddingHorizontal: width * 1.5,
                        backgroundColor: colors.white,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 3,
                        },
                        shadowOpacity: 0.27,
                        shadowRadius: 4.65,

                        elevation: 6,
                    }}>
                        <Image source={icons.PlusIcon} style={{
                            width: width * 4.5,
                            height: width * 4.5,
                            resizeMode: 'contain',
                            tintColor: colors.black,
                            marginRight: width * 1.5
                        }} />
                        <TextInputWrapper
                            messgae={true}
                            onChangeText={setCommentText}
                            value={commentText}
                            placeholder="Ok great, Let me ask arout"
                            textStyles={{ width: width * 70, elevation: 0, height: width * 6.5 }}
                            messageIconStyles={{ height: width * 6.2, width: width * 6.2 }}
                            messageIconContainerStyles={{ bottom: width * 0 }}
                        />
                    </View>

                    <TouchableOpacity style={{
                        marginLeft: width * 2,
                        width: width * 10,
                        alignItems: 'center',
                        paddingVertical: width * 2,

                        backgroundColor: colors.white,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 3,
                        },
                        shadowOpacity: 0.27,
                        shadowRadius: 4.65,

                        elevation: 6,
                    }}>
                        <Image source={icons.recordAudio} style={{
                            width: width * 6.5,
                            height: width * 6.5,
                            resizeMode: 'contain',
                        }} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};
export default MessageScreen;
