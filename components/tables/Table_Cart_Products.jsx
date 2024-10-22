import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { Card_Product_Cart } from '../cards/Card_Product_Cart';

export function Table_Cart_Products ({productsCart}) {
  const tableHead = ['Nombre', 'Precio', 'Cant', 'X'];

  return (
    <View style={styles.container}>
      <Table>
        <Row data={tableHead} style={styles.head} textStyle={styles.text} />
        <FlatList
        data={productsCart}
        keyExtractor={item=>item.pro_iden}
        renderItem={({item})=><Card_Product_Cart product={item}/>}
        />
        {/* <Rows data={productsCart} textStyle={styles.text} /> */}
      </Table>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30 },
  head: { height: 40 },
  text: { margin: 6, textAlign: 'center' },
});

