import { useLayoutEffect, useState } from "react";
import { View, ScrollView, StyleSheet, Image, ActivityIndicator, Text } from "react-native";
import { MEALS } from "../data/dummy-data";

const MealScreen = ({ route, navigation }) => {
    const [meal, setMeal] = useState({});
    useLayoutEffect(() => {
        const [item] = MEALS?.filter(item => item.id === route.params.id);
        setMeal(meal => item)
        navigation.setOptions({
            title: item?.title
        })
    }, [route.params.id])
    return (
        Boolean(meal?.id) ? <ScrollView style={s.scrollview}>
            <Image style={s.image} source={{ uri: meal?.imageUrl }} />
            <View style={s.textContainer}>
                <Text style={s.title}>{meal?.title}</Text>
            </View>
            <View style={s.centerWithMarign}>
                <View><Text style={s.textBold}>Ingredients</Text></View>
                {meal?.ingredients?.map((item,i) => <View key={"ing"+i} style={s.tabs}><Text>{item}</Text></View>)}
            </View>
            <View style={s.centerWithMarign}>
                <View><Text style={s.textBold}>Steps</Text></View>
                {meal?.steps?.map((item,i) => <View key={"ing"+i} style={s.tabs}><Text>{item}</Text></View>)}
            </View>
        </ScrollView> : <ActivityIndicator />
    );
}
export default MealScreen;

const s = StyleSheet.create({
    scrollview: {
        flex: 1
    },
    view: {
        flex: 1,
    },
    image: {
        width: "100%",
        height: 200
    },
    textContainer: {
        flex: 1,
        padding: 10,
        textAlign: "center"
    },
    title: {
        fontSize: 15,
        fontWeight: "bold"
    },
    centerWithMarign: {
        marginHorizontal: 10,
        textAlign: "center",
        marginVertical: 20
    },
    tabs: {
        width: "100%",
        backgroundColor: "lightgreen",
        elevation: 4,
        borderRadius: 10,
        marginVertical: 8,
        padding: 8
    },
    textBold: {
        fontWeight: "bold"
    }
})