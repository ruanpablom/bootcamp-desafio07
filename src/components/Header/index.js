import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Logo, Wrapper, BasketContainer, ItemCount } from './styles';

function Header({ navigation }) {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <BasketContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" color="#FFF" size={24} />
          <ItemCount>{0}</ItemCount>
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

export default Header;
