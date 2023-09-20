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
  if (props?.search || props?.edit || props?.comment || props?.messgae) {
    return (
      <View style={[{
        // width: width * 80
      }, props?.styles]}>
        <TextInput
          style={[styles.input, { textAlignVertical: props?.multiline ? 'top' : 'center' }, props?.textStyles]}
          onChangeText={props?.onChangeText}
          value={props?.value}
          placeholder={props?.placeholder ?? '.....'}
          secureTextEntry={props?.secureTextEntry ? (props?.secureTextEntry == true && showPassword) : false}
          multiline={props?.multiline ? true : false}
          numberOfLines={props?.numberOfLines ?? 1}
          placeholderTextColor={props?.placeholderTextColor ?? colors.greyText}

        />
        <TouchableOpacity
          onPress={() => props?.clickSearch ? props?.clickSearch() : null}
          style={[{ position: 'absolute', bottom: width * 4, right: width * 1, paddingRight: width * 2 }, props?.messageIconContainerStyles]} activeOpacity={2}>
          <Image source={props?.search ? icons.searchIcon : props?.edit ? icons.editIcon : props?.messgae ? icons.sendMessage : icons.forwardArrow} style={[{ width: width * 4, height: width * 4, resizeMode: 'contain' }, props?.messageIconStyles]} />
        </TouchableOpacity>
      </View>
    )
  } else if (props?.mapSearch1 || props?.mapSearch2) {
    return (
      <View style={props?.styles}>
        <TextInput
          style={[styles.input, { textAlignVertical: props?.multiline ? 'top' : 'center', paddingLeft: width * 10 }, props?.textStyles]}
          onChangeText={props?.onChangeText}
          value={props?.value}
          placeholder={props?.placeholder ?? '.....'}
          secureTextEntry={props?.secureTextEntry ? (props?.secureTextEntry == true && showPassword) : false}
          multiline={props?.multiline ? true : false}
          numberOfLines={props?.numberOfLines ?? 1}
          placeholderTextColor={props?.placeholderTextColor ?? colors.greyText}

        />
        <TouchableOpacity
          onPress={() => props?.clickSearch ? props?.clickSearch() : null}
          style={[{ position: 'absolute', bottom: width * 3, left: width * 1, paddingLeft: width * 2 }, props?.messageIconContainerStyles]} activeOpacity={2}>
          <Image source={props?.mapSearch1 ? icons.PinL : icons.DestinationIcon} style={[{ width: width * 5.5, height: width * 5.5, resizeMode: 'contain' }, props?.messageIconStyles]} />
        </TouchableOpacity>
      </View>
    )
  }
  else {
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
          style={[styles.input, { textAlignVertical: props?.multiline ? 'top' : 'center' }, props?.textStyles]}
          onChangeText={props?.onChangeText}
          value={props?.value}
          placeholder={props?.placeholder ?? '.....'}
          secureTextEntry={props?.secureTextEntry ? (props?.secureTextEntry == true && showPassword) : false}
          multiline={props?.multiline ? true : false}
          numberOfLines={props?.numberOfLines ?? 1}
          placeholderTextColor={props?.placeholderTextColor ?? colors.greyText}
        />
        {props?.secureTextEntry && <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={{ position: 'absolute', bottom: height * 1.5, right: width * 1, paddingRight: width * 2 }} activeOpacity={2}>
          <Image source={showPassword ? icons.eyehide : icons.eye} style={{ width: width * 6, height: width * 6, resizeMode: 'contain', tintColor: colors.red }} />
        </TouchableOpacity>}
      </View>
    );
  }
};
export default TextInputWrapper;
