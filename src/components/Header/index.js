import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Logo, Wrapper, BasketContainer, ItemCount } from './styles';

export default function Header({ navigation }) {
  const cartSize = useSelector(state => state.cart.length);
  return (
    <Wrapper>
      <Container>
        <TouchableOpacity onPress={() => navigation.navigate('Main')}>
          <Logo />
        </TouchableOpacity>
        <BasketContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" color="#FFF" size={24} />
          <ItemCount>{cartSize || 0}</ItemCount>
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
