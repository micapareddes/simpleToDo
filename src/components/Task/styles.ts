import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#1F1E25',
        flexDirection: "row",
        gap: 6,
        alignItems: "center", 
        marginBottom: 12,
    },
    name: {
        color: '#fff',
        fontSize: 16,
        paddingLeft: 16,
        flex: 1,
    },
    button: {
        backgroundColor: '#E23C44',
        width: 56,
        height: 56, 
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 6,
    },
    buttonText: {
        fontSize: 16,
        color: '#1F1E25',
    },
})