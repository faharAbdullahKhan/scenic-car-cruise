import { StyleSheet } from 'react-native';
import { height, width } from '../../Units'
import { colors } from '../../../assets';

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
    },
    container: {
        flex: 1,
    },
    submitButton: {
        height: width * 12,
        width: width * 80,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.buttonColor,
        borderRadius: width * 1.5,
        marginTop: height * 1.5
    },
    redButton: {
        height: width * 12,
        width: width * 80,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.red,
        borderRadius: width * 1.5,
        marginTop: height * 1.5
    },
    submitButtonText: {
        color: '#FFF',
        fontSize: width * 4.2,
        fontWeight: '500'
    }
});

export default styles;