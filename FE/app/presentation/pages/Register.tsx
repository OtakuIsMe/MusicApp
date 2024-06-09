import { StyleSheet, View, Text, TextInput, TouchableHighlight, Image } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons'
import Logo from '../../../assets/images/Logo.svg'
import Facebook from '../../../assets/images/facebook.svg'
import Google from '../../../assets/images/google.png'
import { useState } from "react"

export const Register = () => {
    const [isFocused, setIsFocused] = useState(false)
    const [email, onChangeEmail] = useState('')

    const handleOnFocusInput = () => {
        setIsFocused(true)
    }

    const handleOnBlurInput = () => {
        setIsFocused(false)
    }

    return (
        <View style={styles.container}>
            <Ionicons name="return-down-back-outline" size={50} color="white" />
            <View style={[styles.centerItem, { marginTop: 60 }]}>
                <Logo width={80} height={80} />
                <Text style={[styles.text, { marginTop: 20 }]}>Sign up to start listening</Text>
            </View>
            <View style={{ marginBottom: 20 }}>
                <Text style={[styles.text, { fontSize: 18, marginBottom: 10, marginTop: 60 }]}>Email or username</Text>
                <TextInput style={[styles.inputBar, isFocused && { borderColor: 'white' }]}
                    value={email}
                    onChangeText={onChangeEmail}
                    placeholder="Email or username"
                    placeholderTextColor="#727272"
                    onFocus={handleOnFocusInput}
                    onBlur={handleOnBlurInput} />
            </View>
            <View style={[styles.centerItem, { marginBottom: 20 }]}>
                <TouchableHighlight style={styles.buttonBackground}>
                    <Text style={{ color: 'white', fontWeight: '700', fontSize: 20 }}>Next</Text>
                </TouchableHighlight>
            </View>
            <View style={[styles.centerItem, { position: 'relative', paddingHorizontal: 10 }]}>
                <View style={styles.beforeLine}></View>
                <Text style={[styles.text, { fontSize: 15, paddingHorizontal: 15, backgroundColor: 'black' }]}>or</Text>
            </View>
            <View style={[styles.centerItem, { position: 'relative', borderColor: '#727272', borderWidth: 1, borderRadius: 5, height: 50, marginTop: 20 }]}>
                <Image style={[styles.iconSignUp, { width: 30, height: 30, marginLeft: 8 }]} source={Google}></Image>
                <Text style={[styles.text, { fontSize: 18, fontWeight: '900' }]}>Sign up with Google</Text>
            </View>
            <View style={[styles.centerItem, { position: 'relative', borderColor: '#727272', borderWidth: 1, borderRadius: 5, height: 50, marginTop: 20 }]}>
                <Facebook width={43} height={43} style={styles.iconSignUp} />
                <Text style={[styles.text, { fontSize: 18, fontWeight: '900' }]}>Sign up with Facebook</Text>
            </View>
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
    },
    centerItem: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        fontSize: 32,
        fontWeight: '700'
    },
    inputBar: {
        borderColor: '#727272',
        borderWidth: 1,
        borderRadius: 5,
        height: 50,
        fontSize: 18,
        fontWeight: '600',
        paddingLeft: 20,
        color: 'white'
    },
    buttonBackground: {
        backgroundColor: 'rgb(30, 215, 96)',
        width: '100%',
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    beforeLine: {
        position: 'absolute',
        height: 1,
        width: '100%',
        backgroundColor: 'rgb(114, 114, 114)',
        top: '55%',
        zIndex: -1
    },
    iconSignUp: {
        position: 'absolute',
        left: 15
    }
})