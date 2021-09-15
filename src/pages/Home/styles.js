import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #5638A9;
`;

export const Footer = styled.View`
  margin-top: auto;
  margin-bottom: 20px;
`;

export const SearchArea = styled.View`
  margin-top: auto;
  margin-bottom: 110px;
`;

export const SearchAndCleanButtons = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-left: auto;
  margin-right: auto;
  margin-top: 25px;
`;

export const Button = styled.TouchableOpacity`
  height: 45px;
  width: 110px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 13px;
  margin-left: 10px;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  align-items: center;
`;

export const SearchField = styled.View`
  flex-direction: row;
  align-items: center;
  height: 43px;
  width: 300px;
  border-radius: 25px;
  background-color: rgba(255, 255, 255, 0.7);
`;

export const TextInput = styled.TextInput`
  flex: 1;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-left: 17px;
  color: #424242;
`;


