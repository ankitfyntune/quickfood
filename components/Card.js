import { View, Text, StyleSheet, Pressable, Platform } from "react-native";

const Card = ({ title, color, onPress }) => {
    return (
        <View style={[s.container, { backgroundColor: color }]}>
            <Pressable 
                android_ripple={{ color: "white" }}
                style={({ pressed }) => pressed ? [s.innerContainer, s.opacity] : s.innerContainer}
                onPress={onPress}
            >
                <Text style={s.title}>{title}</Text>
            </Pressable>
        </View>
    );
}

export default Card;

const s = StyleSheet.create({
    container: {
        flex: 1,
        height: 150,
        margin: 10,
        borderRadius: 10,
        elevation: 5
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: "black"
    },
    opacity: {
        opacity: Platform.select({ ios: 0.25, android: 1 })
    }
})