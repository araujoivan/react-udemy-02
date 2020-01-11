import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Colors from   '../constants/colors';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const MealsNavigator = createStackNavigator(
    {
        Categories: CategoriesScreen, // short form
        CategoryMeals: {
            screen: CategoryMealsScreen //long form 
        },

        MealDetail: MealDetailScreen
    },
    {
       // initialRouteName: 'Categories',

        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Colors.primary
            },
            headerTintColor: 'white'
        }

    }
);
//a good pattern is wrapping the most important navigator into a container
export default createAppContainer(MealsNavigator);