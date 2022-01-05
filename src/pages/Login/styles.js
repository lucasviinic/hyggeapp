import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #EDF3F5;
  padding-left: 5%;
  padding-right: 5%;
`;

export const FormArea = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  margin-bottom: auto;  
`;

export const SubTitle = styled.Text`
  font-size: 14px;
  color: #757575;
  align-self: flex-start;
  padding-left: 6%;
  margin-top: 4%;
  margin-bottom: -2%;
`;

export const Options = styled.View`
  flex-direction: row;
  padding: 1px;
`;

export const TextField = styled.View `
  flex-direction: row;
  height: 50px;
  width: 100%;
  border-radius: 5px;
  background-color: #FFFFFF;
  margin-top: 4.5%;
  elevation: 2;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-left: 17px;
  color: #424242;
`;

export const Button = styled.TouchableOpacity`
  height: 8%;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 8px;
  align-items: center;
  background-color: #41EB85;
  elevation: 2;
`;