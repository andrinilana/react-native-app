import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, StatusBar, StyleSheet, Text, View } from "react-native";
import { RoutesParams } from "../types";
import styles from "../styles";

type Props = NativeStackScreenProps<RoutesParams>;

export default function Home({ navigation }: Props) {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff"/>
            <Text>Home Screen</Text>
            <View>
                <Button
                    title="First item"
                    onPress={() => navigation.navigate("Details", {
                        title: "First item",
                        content: "First item content",
                        stock: 1
                    })}
                />
                <Button
                    title="Second item"
                    onPress={() => navigation.navigate("Details", {
                        title: "Second item",
                        content: "Second item content",
                        stock: 0
                    })}
                />
                <Button
                    title="Third item"
                    onPress={() => navigation.navigate("Details", {
                        title: "Third item",
                        content: "Third item content",
                        stock: 2
                    })}
                />
            </View>
        </View>
    )
}
