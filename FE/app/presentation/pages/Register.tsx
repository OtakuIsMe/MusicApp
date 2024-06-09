import { StyleSheet, View } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons'
import Logo from '../../../assets/images/Logo.svg'

export const Register = () => {
    return (
        <View style={styles.container}>
            <Ionicons name="return-down-back-outline" size={50} color="white" />
            <Logo width={100} height={100} />
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20
    }
})