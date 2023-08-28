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
    loginHeader: {
        width: width * 100,
        height: height * 40,
        resizeMode: 'stretch',
    },
    submitButton: {
        height: width * 12,
        width: width * 80,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.buttonColor,
        borderRadius: width * 1.5,
        marginTop: height * 3.5
    },
    submitButtonText: {
        color: '#FFF',
        fontSize: width * 4.2,
        fontWeight: '700'
    },
    passwordContainer: {
        marginTop: height * 1.5
    }
});

export default styles;