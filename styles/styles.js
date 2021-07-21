import { Dimensions, StyleSheet } from 'react-native';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create ({
    gradient: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0 ,
        right: 0
    },
    header: {
        backgroundColor: 'rgba(40,40,40,0.2)',
        height: 70
    },
    headerText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    image: {
        width: "100%",
        height: 375,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    titleContainer: {
        flexDirection: 'row',
        width: '100%',
        marginVertical: 20
    },
    title: {
        color: '#fff',
        fontSize: 16,
        marginLeft: 95
    },
    progressContainer: {
        backgroundColor: 'rgba(225,255,255,0.07)',
        width: width,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10
    },
    durationContainer: {
        flexDirection: 'row',

    },
    durationText: {
        flex: 0.5,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginVertical: 40

    },
    mainButtons: {
        marginHorizontal: 40,

    },
    volumeBarContainer: {
        flexDirection: 'row',
        width: '100%'
    }
});

export { styles };
