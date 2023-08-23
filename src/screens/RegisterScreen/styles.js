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
        height: height * 45,
        resizeMode: 'stretch',
    },
    profileImageContainer: {
        // backgroundColor: 'purple',
        width: width * 80,
        marginBottom: height * 4
    },
    profileImage: {
        // backgroundColor: 'green',
        height: width * 20,
        width: width * 20,
        resizeMode: 'contain'
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
    inputContainer: {
        marginBottom: height * 2,
    }
});

export default styles;