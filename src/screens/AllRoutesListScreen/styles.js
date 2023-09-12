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
        width: width * 90,
        height: width * 35,
        borderRadius: width * 1.5,
        marginBottom: height * 3.5,
        justifyContent: 'flex-end',
        overflow: 'hidden'
    },
    submitButtonText: {
        color: colors.black,
        fontSize: width * 4.5,
        fontWeight: '700',
        marginBottom: width * 0.5,
        marginTop: width * 2
    },
    submitButtonText2: {
        fontSize: width * 3,
        fontWeight: '700',
        color: colors.black,
    },
    submitButtonText3: {
        fontSize: width * 2.5,
        color: colors.greyText,
        marginVertical: width * 0.5,
        letterSpacing: width * 0.1
    }
});

export default styles;