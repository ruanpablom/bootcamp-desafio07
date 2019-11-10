import React from 'react';
import { Text, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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

function Cart({ products, updateAmountRequest, total, removeFromCart }) {
  function decrease(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }
  function increase(product) {
    updateAmountRequest(product.id, product.amount + 1);
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
                <ProductDelete onPress={() => removeFromCart(product.id)}>
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

const mapStateToProps = state => ({
  products: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

Cart.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      image: PropTypes.string,
      amount: PropTypes.number,
      priceFormatted: PropTypes.string,
      subtotal: PropTypes.string,
    })
  ).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
