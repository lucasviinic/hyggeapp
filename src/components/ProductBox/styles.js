import styled from 'styled-components';

export const Box = styled.View`
  flex: 1;
  width: 100%;
  height: 120px;
  margin-bottom: 10px;
  flex-direction: row;
  border-radius: 14px;
  overflow: hidden;
  elevation: 2;
`;

export const ImageField = styled.Pressable`
  flex: 1;
  width: 35%;
  height: auto;
  margin-right: auto;
  border-right-width: 2px;
  border-style: solid;
  border-color: #EDF3F5;
`;

export const ProductInfoField = styled.View`
  flex-direction: column;
  width: 223px;
  height: auto;
  margin-left: auto;
  padding-top: 10px;
  padding-right: auto;
  padding-bottom: auto;
  padding-left: 10px;
  background-color: #FFFFFF;
`;

export const Informations = styled.View`
  flex-direction: row;
  margin-right: 9.7%;
  margin-top: auto;'
  margin-bottom: 6%;
`;

export const ResumeText = styled.Text`
  font-size: 21px;
  color: #3E3E3E;
  margin-top: 2%;
`;

export const Price = styled.View`
  flex-direction: column;
  width: 52%;
`;

export const Country = styled.View`
  flex-direction: column;
  margin-left: 5px;
`;

export const Status = styled.View`
  flex-direction: column;
  margin-left: 12px;
`;
