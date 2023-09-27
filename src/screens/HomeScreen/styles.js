import { StyleSheet } from 'react-native';
import { height, width } from '../../Units'
import { colors } from '../../../assets';

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    loginHeader: {
        width: width * 100,
        height: height * 40,
        resizeMode: 'stretch',
    },
    submitButton: {
        flexDirection: 'row',
        height: width * 12,
        width: width * 85,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.buttonColor,
        borderRadius: width * 1.5,
        marginTop: height * 1.7,
        paddingHorizontal: width * 5
    },
    submitButtonText: {
        color: '#FFF',
        fontSize: width * 3.2,
        fontWeight: '500'
    },
    passwordContainer: {
        marginTop: height * 1.5
    }
});

export default styles;