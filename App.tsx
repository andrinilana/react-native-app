import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./views/Home";
// import Settings from "./views/Settings";
import { RoutesParams } from "./types";
import Details from "./views/Details";
import { Button } from "react-native";

const Stack = createNativeStackNavigator<RoutesParams>();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                {/* <Stack.Screen name="Settings" component={Settings} /> */}
                <Stack.Screen
                    name="Details"
                    component={Details}
                    options={({ route }) => ({
                        headerRight: () => (
                            <Button
                                title="Buy"
                                onPress={() => console.log("buy item")}
                                disabled={!route.params.stock}
                            />
                        )
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
