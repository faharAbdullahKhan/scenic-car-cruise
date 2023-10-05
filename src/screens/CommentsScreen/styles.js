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
        // height: width * 12,
        paddingVertical: width * 4,
        width: width * 88,
        alignSelf: 'center',
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
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        
        elevation: 3,
    },
    submitButtonText: {
        color: colors.black,
        fontSize: width * 4,
        lineHeight: width * 5.8
    }
});

export default styles;