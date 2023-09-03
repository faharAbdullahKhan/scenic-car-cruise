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
import { width } from '../../Units';
import TextInputWrapper from '../../components/TextInput';

const CommentsScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [commentText, setCommentText] = useState('');
    // const onSubmit = async () => {
    // };
    const displayBoxes = () => {
        return <View>
            <View style={{
                flexDirection: 'row',
                paddingLeft: width * 3,
                alignItems: 'center'
            }}>
                <View>
                    <Image source={icons.profileImage2} style={{
                        width: width * 6,
                        height: width * 6,
                        resizeMode: 'contain'
                    }} />
                </View>
                <View style={{
                    marginLeft: width * 2
                }}>
                    <Text style={{
                        color: colors.black,
                        fontWeight: 'bold',
                        fontSize: width * 2.8
                    }}>Smith Grey</Text>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <Image source={icons.starIcon} style={{
                            width: width * 3.2,
                            height: width * 3.2,
                            resizeMode: 'contain',
                            marginRight: width * 1
                        }} />
                        <Text style={{
                            color: colors.black,
                            fontSize: width * 2.8
                        }}>4.9</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity
                style={styles.submitButton}>
                <Text numberOfLines={3} style={styles.submitButtonText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit vel, vestibulum pellentesque habitant. Condimentum ullamcorper et sollicitudin pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit vel, vestibulum pellentesque habitant. Condimentum ullamcorper et sollicitudin pellentesque. </Text>
            </TouchableOpacity>
            <Text style={{ alignSelf: 'flex-end', color: colors.primary, fontWeight: 'bold', fontSize: width * 3.5 }}>Reply</Text>
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
                        Comments
                    </Text>

                    <View style={{
                        width: width * 6.5,
                        height: width * 6.5
                    }} />
                </View>

                <View style={{
                    alignSelf: 'center',
                    width: width * 90,
                }}>
                    <FlatList
                        data={[1, 2, 3, 4, 5]}
                        renderItem={displayBoxes}
                        style={{ marginTop: width * 11, marginBottom: width * 25 }}
                    />
                </View>
                <View style={{
                    position: 'absolute',
                    bottom: width * 1,
                    alignSelf: 'center',
                }}>
                    <TextInputWrapper
                        comment={true}
                        onChangeText={setCommentText}
                        value={commentText}
                        placeholder="Write Comment"
                        textStyles={{ width: width * 95 }}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};
export default CommentsScreen;
