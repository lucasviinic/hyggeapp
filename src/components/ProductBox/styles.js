import styled from 'styled-components';

export const Box = styled.View`
  flex: 1;
  width: 345px;
  height: 120px;
  margin-bottom: 6px;
  flex-direction: row;
  background-color: rgba(51, 23, 108, 1);
  border-radius: 10px;
  overflow: hidden;
`;

export const ImageField = styled.View`
  flex: 1;
  width: 103px;
  height: auto;
  margin-right: auto;
  border-right-width: 1.3px;
  border-style: solid;
  border-color: #5638A9;
`;

export const ProductInfoField = styled.View`
  flex-direction: row;
  width: 223px;
  height: auto;
  margin-left: auto;
  padding-top: 10px;
  padding-right: auto;
  padding-bottom: auto;
  padding-left: 10px;
`;
