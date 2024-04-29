import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './src/screens/homeScreen';
import { Provider } from 'react-redux'
import { store } from './src/redux/store';
import cartScreen from './src/screens/cartScreen';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="home" component={HomeScreen} />
        <Stack.Screen options={{headerShown:false}} name="cart" component={cartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    
  );
}


