import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  background-color: #EDF3F5;
`;

export const ImageView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const FormView = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: -60px;
`;

export const FormArea = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  margin-bottom: auto;  
`;

export const SignInButton = styled.TouchableOpacity`
  background-color: transparent;
  border-width: 2px;
  border-color: #41EB85;
  border-radius: 30px;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 14px;
  width: 280px;
  height: 57px;
  justify-content: center;
  align-items: center;
`;

export const SignUpButton = styled.TouchableOpacity`
  background-color: #41EB85;
  border-radius: 30px;
  padding: 10px;
  margin-top: 10px;
  width: 280px;
  height: 57px;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled.View`
  margin-bottom: 10%;
`;

export const Copyright = styled.Text`
  font-size: 12px;
  color: #FFFFFFCC;
`;