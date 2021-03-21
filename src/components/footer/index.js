import React, { useState } from "react";
import styled from 'styled-components';
const Footer = ({children})=>{
  return (
    <Container>
      <InnerContainer>

      </InnerContainer>
    </Container>
  )
};
export default Footer;

const Container = styled.div`
width:100%;
height:160px;
background:#333;
`;

const InnerContainer = styled.div`
width:60%;
height:inherit;
margin:auto;
background-color:red;
`;