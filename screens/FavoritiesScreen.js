import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FavoritiesScreen = props => {

    return (
        <View style={styles.screen}>
            <Text>Hello World</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FavoritiesScreen;