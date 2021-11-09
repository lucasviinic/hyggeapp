import styled from 'styled-components';

export const Box = styled.View`
  flex: 1;
  width: 100%;
  height: 120px;
  margin-bottom: 10px;
  flex-direction: row;
  border-radius: 14px;
  overflow: hidden;
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

export const Price = styled.View`
  flex-direction: row;
  margin-left: auto;
  margin-right: 9.7%;
  margin-top: auto;'
  margin-bottom: 5%;
`;

export const ResumeText = styled.Text`
  font-size: 18px;
  color: #2D2D2D;
`;
