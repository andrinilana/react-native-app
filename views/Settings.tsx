import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, StatusBar, Text } from "react-native";
import { View } from "react-native";
import { RoutesParams } from "../types";
import styles from "../styles";

type Props = NativeStackScreenProps<RoutesParams>;

export default function Settings({ navigation }: Props) {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <Text>Settings</Text>
            <Button
                title="Home"
                onPress={() => navigation.navigate("Home")}
            />
        </View>
    )
}
