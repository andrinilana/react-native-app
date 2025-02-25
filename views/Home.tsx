import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StatusBar, Text, View } from "react-native";
import { RoutesParams } from "../types";
import styles from "../styles";

type Props = NativeStackScreenProps<RoutesParams>;

export default function Home({ navigation }: Props) {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff"/>
            <Text>Home Screen</Text>
        </View>
    )
}
