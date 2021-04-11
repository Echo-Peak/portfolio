import React, { useState } from "react";
import styled from 'styled-components';
import { Button, IconButton, ButtonGroup, ButtonToolbar } from 'rsuite';
import {navigate} from 'gatsby';

const Header = ({children})=>{
  const goto = (_path)=> {
    navigate(`/${_path}`);
  }
  return (
    <Container>
      <SiteContainer>

      </SiteContainer>
      <Flex/>
      <Group>
        <ButtonToolbar style={{padding:10}}>
          <Button onClick={() => navigate('/blog')} appearance="default" style={{marginRight:20, width:100}}>Blog</Button>
          <Button onClick={() => navigate('/projects')} appearance="default" >Projects</Button>
          <Button onClick={() => navigate('/writing')} appearance="default">Writing</Button>
          <Button onClick={() => navigate('/hire')} appearance="primary" style={{marginRight:10, marginLeft:20, width:100}}>Hire</Button>
          <Button onClick={() => navigate('/contact')} appearance="default">Contact</Button>
        </ButtonToolbar>
      </Group>
    </Container>
  )
};
export default Header;

const Container = styled.div`
display:flex;
flex-direction:row;
height:60px;
border-bottom:1px solid #f7f7fa;
padding-bottom:4px;
position:fixed;
width:100%;
background:#f7f7fa;
top:0px;
left:0px;
right:0px;
`;

const SiteContainer = styled.div`
flex:1;
order:1;
`;

const Flex = styled.div`
flex:2;
order:2;
`;

const Group = styled.div`
order:3;
`;