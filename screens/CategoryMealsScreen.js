import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoryMealsScreen = props => {

    const renderMealItem = itemData => {
        return <MealItem 
                    title={itemData.item.title} 
                    onSelectMeal={() => {}}
                    duration={itemData.item.duration}
                    complexity={itemData.item.complexity}
                    affordability={itemData.item.affordability}
                    image={itemData.item.imageUrl}
                />;
    }

    const categoryId = props.navigation.getParam('categoryId');

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0);

    return (
        <View style={styles.screen}>
            <FlatList 
                data={displayedMeals}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
                style={{width: '100%'}}
            />
        </View>

       /* <View style={styles.screen}>
            <Text>Hello World from CategoryMealsScreen</Text>
            <Button title="Got to Details" onPress={() => {
                props.navigation.navigate("MealDetail");
            }} />

            <Button title="Go back" onPress={() => {
              //  props.navigation.pop();
                props.navigation.goBack();
            }}/>

        </View> */
    );
}

CategoryMealsScreen.navigationOptions = navigationData => {

    const categoryId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId);

    return {
        headerTitle: selectedCategory.title
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealsScreen;