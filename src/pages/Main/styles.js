import styled from 'styled-components';
import { darken } from 'polished';

import colors from '../../styles/colors';

export const Container = styled.View`
  align-items: center;
`;

export const Product = styled.View`
  background: #fff;
  border-radius: 4px;
  align-items: center;
  width: 300px;
  padding: 20px;
  margin: 15px;
`;

export const Image = styled.Image`
  width: 185px;
  height: 200px;
`;

export const Title = styled.Text`
  font-family: Roboto sans-serif;
  font-size: 16px;
  line-height: 21px;
  align-items: center;
  line-height: 30px;
  color: #333;
`;

export const Price = styled.Text`
  font-family: Roboto sans-serif;
  font-weight: bold;
  align-self: flex-start;
  font-size: 21px;
  line-height: 25px;
  margin-top: 10px;
  color: #333;
`;

export const AddButton = styled.TouchableOpacity`
  background: ${colors.primary};
  border-radius: 4px;
  margin-top: auto;
  width: 260px;
  flex-direction: row;
  margin-top: 10px;
`;

export const ProductAmount = styled.View`
  background: ${darken(0.03, colors.primary)};
  flex-direction: row;
  padding: 13px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const Amount = styled.Text`
  color: #fff;
  font-size: 14px;
  margin-left: 5px;
`;

export const AmountText = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #fff;
  align-self: center;
  text-align: center;
  width: 200px;
`;
