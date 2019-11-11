import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatPrice } from '../../util/format';

import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  Product,
  Image,
  Title,
  Price,
  ProductAmount,
  AddButton,
  Amount,
  AmountText,
} from './styles';

export default function Main() {
  const [products, setProducts] = useState([]);

  const amount = useSelector(state =>
    state.cart.reduce((amountOb, product) => {
      amountOb[product.id] = product.amount;
      return amountOb;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');
      const data = response.data.map(p => ({
        ...p,
        priceFormatted: formatPrice(p.price),
      }));
      setProducts(data);
    }
    loadProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  function renderProduct({ item }) {
    return (
      <Product key={item.id}>
        <Image source={{ uri: item.image }} />
        <Title>{item.title}</Title>
        <Price>{item.priceFormatted}</Price>
        <AddButton onPress={() => handleAddProduct(item.id)}>
          <ProductAmount>
            <Icon name="add-shopping-cart" color="#fff" size={20} />
            <Amount>{amount[item.id] || 0}</Amount>
          </ProductAmount>
          <AmountText>ADICIONAR AO CARRINHO</AmountText>
        </AddButton>
      </Product>
    );
  }

  return (
    <Container>
      <FlatList
        data={products}
        extraData={amount}
        keyExtractor={item => String(item.id)}
        renderItem={renderProduct}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
