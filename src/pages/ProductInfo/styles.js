import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #EDF3F5;
`;

export const ProductName = styled.Text`
  margin-top: 15px;
  font-size: 31px;
  color: #4B5052;
`;

export const InfoView = styled.View`
  flex: 1;
  padding-left: 4%;
  padding-right: 4%;
  padding-bottom: 70%;
  width: 97%;
`;

export const ImageField = styled.View`
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 30%;
`;

export const Section = styled.View`
  width: 100%;
`;

export const SectionTitle = styled.View`
  height: 7.8%;
  width: 100%;
  margin-top: 4%;
`;

export const SubTitle = styled.Text`
  font-size: 17px;
  color: #73B3FF;
  font-weight: bold;
`;

export const TextResume = styled.Text`
  margin-top: 9%;
  margin-bottom: -10%;
  font-size: 20px;
  color: #4B5052;
`;

export const TextEspecification = styled.Text`
  margin-top: 1%;
  font-size: 20px;
  color: #4B5052;
`;

export const Line = styled.View`
  border-color: #73B3FF;
  border-bottom-width: 1.5px;
  margin-bottom: 5px;
`;

export const PriceText = styled.Text`
  margin-top: 15%;
  font-size: 22px;
  color: #4B5052;
`;

export const CountryText = styled.Text`
  margin-top: 11%;
  font-size: 22px;
  color: #4B5052;
`;

export const NextButton = styled.Pressable`
  height: 43px;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 90px;
  border-radius: 8px;
  align-items: center;
  background-color: #41EB85;
`;