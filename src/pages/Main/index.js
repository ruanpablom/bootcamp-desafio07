import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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

class Main extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');
    const data = response.data.map(p => ({
      ...p,
      priceFormatted: formatPrice(p.price),
    }));
    this.setState({ products: data });
  }

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  renderProduct = ({ item }) => {
    const { amount } = this.props;

    return (
      <Product key={item.id}>
        <Image source={{ uri: item.image }} />
        <Title>{item.title}</Title>
        <Price>{item.priceFormatted}</Price>
        <AddButton onPress={() => this.handleAddProduct(item.id)}>
          <ProductAmount>
            <Icon name="add-shopping-cart" color="#fff" size={20} />
            <Amount>{amount[item.id] || 0}</Amount>
          </ProductAmount>
          <AmountText>ADICIONAR AO CARRINHO</AmountText>
        </AddButton>
      </Product>
    );
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;
    return (
      <Container>
        <FlatList
          data={products}
          extraData={amount}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderProduct}
          showsVerticalScrollIndicator={false}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

Main.propTypes = {
  amount: PropTypes.shape({
    key: PropTypes.number,
  }).isRequired,
  addToCartRequest: PropTypes.func.isRequired,
};
