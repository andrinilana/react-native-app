import { StatusBar, View, Text } from "react-native";
import styles from "../styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RoutesParams } from "../types";
import { useEffect } from "react";

type Props = NativeStackScreenProps<RoutesParams, "Details">;

export default function Details({ route, navigation }: Props) {
    const { title, content, stock } = route.params;

    // update screen options using navigation.setOptions() method
    useEffect(() => navigation.setOptions({ title }), [title]);

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff"/>
            <View>
                <Text>{title}</Text>
            </View>
            <View>
                <Text>{content}</Text>
            </View>
            <View>
                <Text>Stock left: {stock} {stock > 1 ? "items" : "item"}</Text>
            </View>
        </View>
    )
}
