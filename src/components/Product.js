// src/components/Product.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { db } from '../firebaseConfig';

const Product = () => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');

  const handleAddProduct = () => {
    db.collection('Product').add({
      productName: productName,
      price: price,
    }).then(() => {
      console.log('Product added!');
    }).catch(error => {
      console.error('Error adding product: ', error);
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Product Name"
        value={productName}
        onChangeText={text => setProductName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={price}
        onChangeText={text => setPrice(text)}
      />
      <Button title="Add Product" onPress={handleAddProduct} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
});

export default Product;
