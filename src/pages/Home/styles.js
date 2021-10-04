import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #EDF3F5;
  padding-left: 11px;
  padding-right: 11px;
`;

export const HeaderText = styled.Text`
  font-size: 18px;
  color: #888888;
  font-weight: bold;
  text-shadow-color: #CADFEA;
  text-shadow-offset: 1px 1px;
  text-shadow-radius: 3.5px;
`;

export const SearchArea = styled.View`
  margin-top: auto;
  margin-bottom: 66%;
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

export const Options = styled.View`
  flex-direction: row;
  padding: 1px;
`;


