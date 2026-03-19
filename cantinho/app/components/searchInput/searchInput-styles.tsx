import { StyleSheet } from "react-native"



export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 10,
        width: '100%',
    },

    inputWrapper: {
        height: 50,
        width: '87%',
        backgroundColor: '#E4D5E9',
        borderRadius: 25,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },

    textInput: {
        flex: 1,
        height: '100%',
        fontSize: 16,
        color: '#473469',
        borderWidth: 0,
    },

    searchIcon: {
        padding: 10,
        height: '100%'
    }
});