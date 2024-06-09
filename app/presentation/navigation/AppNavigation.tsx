import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../pages/Home';
import { AuthNavigation } from './AuthNavigation';

const Stack = createStackNavigator();

export const AppNavigation = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="auth" component={AuthNavigation} />
                <Stack.Screen name='Home' component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

