import React from 'react';
import { View, Text, FlatList, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = props => {

    const renderGridItem = (itemData) => {
        return <CategoryGridTile 
                    title={itemData.item.title}
                    color={itemData.item.color}
                    onSelect={() => {
                        props.navigation.navigate({
                            routeName: 'CategoryMeals',
                            params: {
                                categoryId: itemData.item.id
                            }
                        });
                    }
                } />
    }
    
    return (

        <FlatList data={CATEGORIES} numColumns={2} renderItem={renderGridItem} />

        /*
        <View style={styles.screen}>
            <Text>Hello World from CategoryScreen</Text>
            <Button title="Go to Meals" onPress={() => {
                //props.navigation.replace('CategoryMeals'); ex: login page..dont add new view into stack
                //props.navigation.push('CategoryMeals'); the same as below
                props.navigation.navigate({
                    routeName: 'CategoryMeals'
                });
            }}/>
        </View> */
    );
}

// an option to be added...
CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories'
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoriesScreen;