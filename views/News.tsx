import { StatusBar, Text, View } from "react-native";
import styles from "../styles";

export default function () {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff"/>
            <Text>News Screen</Text>
        </View>
    )
}
