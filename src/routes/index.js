import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Resultados from '../pages/Resultados';
import Detalhes from '../pages/Detalhes';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Resultados"
                component={Resultados}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Detalhes"
                component={Detalhes}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}