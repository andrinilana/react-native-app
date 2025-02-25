import { NavigationContainer } from "@react-navigation/native";
import { RoutesParams } from "./types";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "./views/Home";
import News from "./views/News";
import Settings from "./views/Settings";

const Tab = createBottomTabNavigator<RoutesParams>();
const Drawer = createDrawerNavigator<RoutesParams>();

export default function App() {
    return (
        <NavigationContainer>
            {Platform.OS === "ios" && (
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={Home}/>
                    <Tab.Screen name="News" component={News}/>
                    <Tab.Screen name="Settings" component={Settings}/>
                </Tab.Navigator>
            )}
            {Platform.OS === "android" && (
                <Drawer.Navigator>
                    <Drawer.Screen name="Home" component={Home}/>
                    <Drawer.Screen name="News" component={News}/>
                    <Drawer.Screen name="Settings" component={Settings}/>
                </Drawer.Navigator>
            )}
        </NavigationContainer>
    )
}
