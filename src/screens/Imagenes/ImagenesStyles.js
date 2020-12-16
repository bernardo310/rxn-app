import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    filter: {
        flex: 1,
        maxHeight: "35%",
        width: "100%",
        paddingLeft: 20,
        paddingTop: 20,
        paddingRight: 20,
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'flex-start'
    }
})

export default styles;
