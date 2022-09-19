import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Login } from "../screens";
const Stack = createNativeStackNavigator();

export default function Navigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LOGIN" component={Login} />
      <Stack.Screen
        name="HOME"
        component={Home}
        options={{ headerLeft: () => null, headerBackVisible: false }}
      />
    </Stack.Navigator>
  );
}
