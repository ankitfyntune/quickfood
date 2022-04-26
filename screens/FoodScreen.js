import { useLayoutEffect, useState } from "react";
import { MEALS,CATEGORIES } from "../data/dummy-data";
import MealsCard from "../components/MealsCard";
import { ScrollView, StyleSheet } from "react-native";

const FoodScreen = ({ route, navigation }) => {
    const [selectedCategoryMeals, setSelectedCategoryMeals] = useState([]);
    useLayoutEffect(() => {
        const foodItemID = route.params.id;
        setSelectedCategoryMeals(selectedCategoryMeals => {
            return MEALS?.filter(({ categoryIds }) => categoryIds.includes(foodItemID));
        });
        navigation.setOptions({
            title: CATEGORIES?.filter(item => item.id === foodItemID)[0]?.title
        })
    }, [route.params.id]);
    const handelNavigation = (id) => {
        navigation.navigate("MealDetails", {
            id
        })
    }
    return (
        <ScrollView style={s.scrollview}>
            {selectedCategoryMeals?.map(item => (
                <MealsCard
                    key={item.id}
                    image={item.imageUrl}
                    title={item.title}
                    isVegetarian={item.isVegetarian}
                    onPress={handelNavigation.bind(null,item.id)}
                />
            ))}
        </ScrollView>
    );
}

export default FoodScreen;

const s = StyleSheet.create({
    scrollview: {
        flex: 1,
    }
})