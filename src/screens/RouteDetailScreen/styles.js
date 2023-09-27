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
        backgroundColor: colors.white
    },
    submitButton: {
        // height: width * 12,
        paddingVertical: width * 4,
        paddingHorizontal: width * 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
        borderRadius: width * 1.5,
        marginTop: width * 3,
        marginBottom: width * 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        
        elevation: 6,
    },
    submitButtonText: {
        color: colors.black,
        fontSize: width * 4,
        lineHeight: width * 5.8
    }
});

export default styles;