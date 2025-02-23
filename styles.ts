import { Platform, StatusBar, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: "#f9f9f9",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        ...Platform.select({
            android: {
                paddingTop: StatusBar.currentHeight
            }
        })
    }
});
