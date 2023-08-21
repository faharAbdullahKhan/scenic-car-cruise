/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useState } from 'react';
import { TextInput, View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { height, width } from '../../Units';
import { colors, icons } from '../../../assets';

const TextInputWrapper = props => {
  const [showPassword, setShowPassword] = useState(true);

  return (
    <View style={[{
      width: width * 80
    }, props?.styles]}>
      {props?.label && <Text style={{
        fontWeight: '600',
        color: colors.black,
        marginVertical: height * 0.3,
        fontSize: width * 3.5
      }}>{props?.label ?? 'Label'}</Text>}
      <TextInput
        style={styles.input}
        onChangeText={props?.onChangeText}
        value={props?.value}
        placeholder={props?.placeholder ?? '.....'}
        secureTextEntry={props?.secureTextEntry ? (props?.secureTextEntry == true && showPassword) : false}
      />
      {props?.secureTextEntry && <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={{ position: 'absolute', bottom: height * 1.5, right: width * 1, paddingRight: width * 2 }} activeOpacity={2}>
        <Image source={showPassword ? icons.eyehide : icons.eye} style={{ width: width * 6, height: width * 6, resizeMode: 'contain', tintColor: colors.red }} />
      </TouchableOpacity>}
    </View>
  );
};
export default TextInputWrapper;
