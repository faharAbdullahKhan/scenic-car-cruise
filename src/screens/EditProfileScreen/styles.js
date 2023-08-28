import { StyleSheet } from 'react-native';
import { height, width } from '../../Units'
import { colors } from '../../../assets';

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: colors.white
    },
    container: {
        flex: 1,
    },
    submitButton: {
        height: width * 12,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.buttonColor,
        borderRadius: width * 1.5,
        marginTop: width * 8,
        marginBottom: width * 3
    },
    submitButtonText: {
        color: colors.white,
        fontSize: width * 4.5,
        fontWeight: '500',
        marginVertical: width * 0.5
    },
    submitButtonText2: {
        fontSize: width * 3,
        fontWeight: '700',
        color: colors.black,
        marginVertical: width * 0.5
    },
    submitButtonText3: {
        fontSize: width * 2.5,
        color: colors.greyText,
        marginVertical: width * 0.5,
        letterSpacing: width * 0.1
    }
});

export default styles;