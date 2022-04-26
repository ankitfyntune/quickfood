import {FlatList} from "react-native";
import Card from "../components/Card";
import { CATEGORIES } from "../data/dummy-data";
const CategoryScreen = ({ navigation }) => {
    const handelNavigation = () => {
        navigation.navigate("Food")
    }
    const renderItem = ({item}) => <Card title={item.title} color={item.color} onPress={handelNavigation} />
    return ( 
        <FlatList
            data={CATEGORIES}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={2}
        />
     );
}
 
export default CategoryScreen;