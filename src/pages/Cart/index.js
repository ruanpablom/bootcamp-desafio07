import React from 'react';
import { Text, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../styles/colors';

import * as CartActions from '../../store/modules/cart/actions';

import { formatPrice } from '../../util/format';

import {
  Container,
  FinalizeOrderButton,
  FinalizeOrderText,
  ProductContainer,
  ProductInfo,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductPrice,
  ProductDelete,
  FooterContainer,
  AmountContainer,
  ProductAmount,
  AmountIncrease,
  AmountDecrease,
  ProductSubTotal,
  TotalContainer,
  TotalText,
  TotalValue,
} from './styles';

export default function Cart() {
  const products = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    )
  );

  const dispatch = useDispatch();

  function decrease(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }
  function increase(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }
  return (
    <ScrollView>
      {products.length ? (
        <Container>
          {products.map(product => (
            <ProductContainer key={String(product.id)}>
              <ProductInfo>
                <ProductImage
                  source={{
                    uri: product.image,
                  }}
                />
                <ProductDetails>
                  <ProductTitle>{product.title}</ProductTitle>
                  <ProductPrice>{product.priceFormatted}</ProductPrice>
                </ProductDetails>
                <ProductDelete
                  onPress={() =>
                    dispatch(CartActions.removeFromCart(product.id))
                  }
                >
                  <Icon
                    name="delete-forever"
                    size={24}
                    color={colors.primary}
                  />
                </ProductDelete>
              </ProductInfo>
              <FooterContainer>
                <AmountContainer>
                  <AmountDecrease onPress={() => decrease(product)}>
                    <Icon
                      name="remove-circle-outline"
                      size={24}
                      color={colors.primary}
                    />
                  </AmountDecrease>
                  <ProductAmount value={String(product.amount)} />
                  <AmountIncrease onPress={() => increase(product)}>
                    <Icon
                      name="add-circle-outline"
                      size={24}
                      color={colors.primary}
                    />
                  </AmountIncrease>
                </AmountContainer>
                <ProductSubTotal>{product.subtotal}</ProductSubTotal>
              </FooterContainer>
            </ProductContainer>
          ))}
          <TotalContainer>
            <TotalText>TOTAL</TotalText>
            <TotalValue>{total}</TotalValue>
          </TotalContainer>
          <FinalizeOrderButton>
            <FinalizeOrderText>FINALIZAR PEDIDO</FinalizeOrderText>
          </FinalizeOrderButton>
        </Container>
      ) : (
        <Text style={{ color: '#fff' }}>Carrinho Vazio</Text>
      )}
    </ScrollView>
  );
}
