import React from 'react';
import styled from 'styled-components';

export default function Button(props){
  return (
    <Container>
      <InnerContainer>
        <TextNode>{props.children}</TextNode>
      </InnerContainer>
    </Container>
  )
}

const Container = styled.div`
border-radius:10px;
width:180px;
height:60px;
background:#fcc;
margin:10px;
cursor: pointer;
transition: all .2s;
&:hover, &:active {
  background:blue;
}
`;
const InnerContainer = styled.div`
text-align:center;
`;
const TextNode = styled.span`
display:block;
text-align:center;
line-height:60px;
font-weight: bold;
`;