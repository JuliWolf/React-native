import React from 'react';
import {View, Text, StyleSheet, FlatList} from "react-native";
import {useSelector} from "react-redux";

import ProductItem from "../../components/shop/ProductItem";

const UserProductsScreen = (props) => {
    const userProducts = useSelector(state => state.products.userProducts);

    return (
        <FlatList
            data={userProducts}
            keyExtractor={item => item.id}
            renderItem={itemData =>
                <ProductItem
                    onViewDetail={() => {}}
                    onAddToCart={() => {}}
                    image={itemData.item.imageUrl}
                    title={itemData.item.title}
                    price={itemData.item.price}
                />
            }
        />
    );
};

const styles = StyleSheet.create({
    
})

export default UserProductsScreen;