import { Header, createStackNavigator } from '@react-navigation/stack'
import { Login } from '../pages/Login';

const Stack = createStackNavigator();

export const AuthNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Login' component={Login} />
        </Stack.Navigator>
    )
}