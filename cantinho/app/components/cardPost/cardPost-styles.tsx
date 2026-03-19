import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '90%',
        backgroundColor: '#ffffff',
        borderRadius: 20,
        padding: 22,
    },

    imageContainer: {
        width: '100%',
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderRadius: 20,
    },

    image: {
       width: '100%',
       height: '100%',
       resizeMode: 'cover'
    },

    username: {
        marginLeft: 7,
        marginTop: 10,
        fontSize: 14,
        color: '#473469'
    },

    title: {
        marginLeft: 7,
        marginTop: 2,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#473469',
    },

    interactionArea:{
        marginLeft: 7,
        marginRight: 7,
        marginTop: 10,
        flexDirection: 'row',
        width: '95%',
        justifyContent: 'space-between',
    },

    readButton: {
        backgroundColor: '#473469',
        width: '40%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },

    readText: {
        color: '#ffffff',
        fontFamily: 'Arial',
        fontSize: 15,
    }
});