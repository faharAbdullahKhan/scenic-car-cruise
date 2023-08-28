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
        flexDirection: 'row',
        height: width * 27,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.white,
        borderRadius: width * 1.5,
        marginTop: height * 1.7,
        paddingHorizontal: width * 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    submitButtonText: {
        color: colors.black,
        fontSize: width * 4.5,
        fontWeight: '700',
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