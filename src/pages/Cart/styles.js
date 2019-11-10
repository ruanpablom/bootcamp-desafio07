import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.ScrollView`
  background: #fff;
  margin: 20px;
  border-radius: 4px;
  padding: 0 15px;
`;

export const FinalizeOrderButton = styled.TouchableOpacity`
  padding: 16px;
  border-radius: 4px;
  background: ${colors.primary};
  margin-bottom: 15px;
  flex: 1;
`;

export const FinalizeOrderText = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
`;

export const ProductContainer = styled.View``;

export const ProductInfo = styled.View`
  flex-direction: row;
`;

export const ProductImage = styled.Image`
  height: 80px;
  width: 80px;
`;

export const ProductDetails = styled.View`
  flex: 1;
  height: 80px;
  padding: 10px;
  justify-content: space-between;
`;

export const ProductTitle = styled.Text`
  font-size: 14px;
  line-height: 18px;
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
`;

export const ProductDelete = styled.TouchableOpacity`
  align-self: center;
`;

export const FooterContainer = styled.View`
  flex-direction: row;
  border-radius: 4px;
  background: #eee;
  align-items: center;
  padding: 10px;
  margin-bottom: 20px;
  justify-content: space-between;
`;

export const AmountContainer = styled.View`
  flex-direction: row;
`;

export const ProductAmount = styled.TextInput.attrs({
  readonly: true,
})`
  background: #fff;
  height: 26px;
  width: 51px;
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #ddd;
`;

export const AmountIncrease = styled.TouchableOpacity`
  margin-left: 5px;
`;

export const AmountDecrease = styled.TouchableOpacity`
  margin-right: 5px;
`;

export const ProductSubTotal = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const TotalContainer = styled.View`
  align-items: center;
`;

export const TotalText = styled.Text`
  color: #999;
  font-size: 16px;
  font-weight: bold;
`;

export const TotalValue = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #000;
`;
