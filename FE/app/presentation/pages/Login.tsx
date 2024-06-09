import { useState } from "react"
import { View, Text, StyleSheet, TextInput, Image, Switch, TouchableHighlight } from "react-native"

import Logo from '../../../assets/images/Logo.png'
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { RootStackParamList } from "../navigation/AppNavigation"

type loginScreenProp = StackNavigationProp<RootStackParamList, 'Login'>;

export const Login = () => {
    const [email, onChangeEmail] = useState('')
    const [isFocused, setIsFocused] = useState(false)
    const [isRemember, setIsRemember] = useState(false)

    const navigation = useNavigation<loginScreenProp>();

    const handleOnFocusInput = () => {
        setIsFocused(true)
    }

    const handleOnBlurInput = () => {
        setIsFocused(false)
    }
    const handleToggleSwitch = () => {
        setIsRemember(prev => !prev)
    }
    const handleResgisterClick = () => {
        navigation.navigate('Register');
    }
    return (
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Image style={{ width: 150, height: 150 }} source={Logo}></Image>
            </View>
            <View style={{ marginBottom: 20 }}>
                <Text style={styles.text}>Email or username</Text>
                <TextInput style={[styles.inputBar, isFocused && { borderColor: 'white' }]}
                    value={email}
                    onChangeText={onChangeEmail}
                    placeholder="Email or username"
                    placeholderTextColor="#727272"
                    onFocus={handleOnFocusInput}
                    onBlur={handleOnBlurInput} />
            </View>
            <View>
                <Text style={styles.text}>Password</Text>
                <TextInput style={[styles.inputBar, isFocused && { borderColor: 'white' }]}
                    value={email}
                    onChangeText={onChangeEmail}
                    placeholder="Password"
                    placeholderTextColor="#727272"
                    onFocus={handleOnFocusInput}
                    onBlur={handleOnBlurInput} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 50 }}>
                <Switch
                    value={isRemember}
                    onChange={handleToggleSwitch}
                    trackColor={{ false: 'rgb(114, 114, 114)', true: 'rgb(30, 215, 96)' }}
                    thumbColor={isRemember ? 'white' : 'black'}
                    style={{ width: 'auto' }} />
                <Text style={{ marginLeft: 10, color: 'white', fontSize: 14, fontWeight: '600' }}>Remember me?</Text>
            </View>
            <View style={[styles.centerItem, { marginBottom: 20 }]}>
                <TouchableHighlight style={styles.buttonBackground}>
                    <Text style={{ color: 'white', fontWeight: '700', fontSize: 20 }}>Log In</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.centerItem}>
                <Text style={[styles.text, { fontSize: 18 }]} onPress={handleResgisterClick}>Regiser account?</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(18, 18, 18)',
        paddingTop: 180,
        paddingLeft: 20,
        paddingRight: 20
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
    imgContainer: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50
    },
    buttonBackground: {
        backgroundColor: 'rgb(30, 215, 96)',
        width: 240,
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    centerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})