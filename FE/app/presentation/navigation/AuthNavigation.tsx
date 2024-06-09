import { Header, createStackNavigator } from '@react-navigation/stack'
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';

const Stack = createStackNavigator();

export const AuthNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
        </Stack.Navigator>
    )
}