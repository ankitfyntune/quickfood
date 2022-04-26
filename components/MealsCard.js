import { View, Text, Image, StyleSheet, Pressable } from "react-native";
const MealsCard = ({ image, title, isVegetarian, onPress }) => {
    return (
        <View style={s.view}>
            <Pressable
                style={({ pressed }) => pressed && s.opacity} android_ripple={{ color: "white" }}
                onPress={onPress}
            >
                <Image style={s.image} source={{ uri: image }} />
                <View style={s.textContainer}>
                    <Text style={s.title}>{title}</Text>
                    <Text style={[s.isVegetarian, isVegetarian ? s.green : s.red]}>
                        {isVegetarian ? "Vegetarian" : "Non Vegetarian"}
                    </Text>
                </View>
            </Pressable>
        </View>
    );
}

export default MealsCard;

const s = StyleSheet.create({
    view: {
        flex: 1,
        margin: 20,
        backgroundColor: "white",
        elevation: 4,
        borderRadius: 10,
        overflow: "hidden"
    },
    image: {
        width: "100%",
        height: 200
    },
    textContainer: {
        textAlign: "center",
        padding: 10
    },
    title: {
        fontSize: 15,
        fontWeight: "bold",
    },
    green: {
        color: "green"
    },
    red: {
        color: "red"
    },
    opacity: {
        opacity: 0.1
    }
})