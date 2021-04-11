import React from 'react';
import styled from 'styled-components';
import { Panel, PanelGroup, Button } from 'rsuite';
import ContentfulRichTextParser from '../util/contentful-rich-text-parser';


export default function PersonalSection(props){
  let aboutData = props.data;

  return (<Container>
      <FullWidth>
        <Background>   
          <BackgroundLeft>
            <Flex amount={2}/>
            <GroupButtons>
              <Button>More about me</Button>
            </GroupButtons>
          </BackgroundLeft>
          <BackgroundRight>
            <Flex amount={2}/>
            <GroupButtons>
              <Button style={{margin:10}}>Servies</Button>
              <Button style={{margin:10}}>Get in touch</Button>
            </GroupButtons>
          </BackgroundRight>
        </Background>
      </FullWidth>
  </Container>
  );
}

const Container = styled.div`
display:flex;
flex-direction:row;
width:100%;
height:800px;
`;

const FullWidth = styled.div`
background: url("https://i.pinimg.com/originals/5d/cf/5d/5dcf5d1723ab806a754b3e7398c9dfe5.jpg");
width:100%;
background-repeat: none;
background-size: cover;
`;

const Background = styled.div`
display:flex;
flex-direction: row;
height:100%;
`;
const BackgroundLeft = styled.div`
background:green;
flex:2;
order:1;
display: flex;
flex-direction:column;
height:inherit;
`;
const BackgroundRight = styled.div`
order:2;
flex:1;
display: flex;
flex-direction:column;
height:inherit;
`;

const GroupButtons = styled.div`
order:2;
margin-bottom:40px;
margin-left:40px;
flex-direction:row;
display:flex;
`;

const Flex = styled.div`
order:1;
flex: ${props => props.flex ? props.flex : 1};
`;