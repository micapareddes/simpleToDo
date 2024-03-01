import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131016',
        padding: 24,
    },
    title: {
        color: '#FDFCFE',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 48,
    },
    input: {
        height: 56, 
        backgroundColor: '#1F1E25',
        borderRadius: 6,
        color: '#FFF',
        padding: 16,
        fontSize: 16,
        flex: 1,
    },
    subtitle: {
        color: '#B6B6B6',
        fontSize: 16,
        marginTop: 6,
    },
    buttonContainer: {
        width: '100%',
        flexDirection: "row",
        gap: 6,
        alignItems: "center", 
        justifyContent: "center",
        marginTop: 12,
        marginBottom: 32,
    },
    addButton: {
        backgroundColor: '#68b483',
        width: 56,
        height: 56, 
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 6,
    },
    addButtonText: {
        fontSize: 16,
        color: '#1F1E25',
    },
    emptyListText: {
        color: '#B6B6B6',
        textAlign: "center",
        fontSize: 14,
        marginTop: 60,
    },
})