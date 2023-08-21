import { StyleSheet } from 'react-native';
import { width, height } from '../../Units';
import { colors } from '../../../assets';

const styles = StyleSheet.create({
    input: {
        height: height * 5.8,
        width: width * 80,
        backgroundColor: colors.white,
        padding: width * 1.5,
        paddingLeft: width * 3,
        borderRadius: width * 1.5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});

export default styles;