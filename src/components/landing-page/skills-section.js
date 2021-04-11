import React from 'react';
import styled from 'styled-components';
import { Panel, PanelGroup, Button } from 'rsuite';
import ContentfulRichTextParser from '../util/contentful-rich-text-parser';

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consequat cursus molestie. Etiam neque odio, laoreet sed nunc in, pulvinar porttitor orci. Nullam interdum interdum libero a rutrum. Suspendisse id ultrices nibh. Etiam ornare tempus elit a efficitur. Praesent nec massa quis erat porttitor cursus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`;

export default function PersonalSection(props){
  let skillsData = props.data;

  return (<Container>
    <CodingSkill>
      <Content>
        <CodingSkillLeft>
          <Image/>
        </CodingSkillLeft>
        <CodingSkillRight>
          <CodingSkillText>{lorem}</CodingSkillText>
          <CodingSkillButton>
            Coding
          </CodingSkillButton>
        </CodingSkillRight>
      </Content>
    </CodingSkill>
    <WrittingSkill>
      <Content>
        <WrittingSkillLeft>
        <WrigingSkillText>{lorem}</WrigingSkillText>
          <WritingSkillButton>
            Writing
          </WritingSkillButton>
        </WrittingSkillLeft>
        <WrittingSkillRight>
          <Image/>
        </WrittingSkillRight>
      </Content>
    </WrittingSkill>
  </Container>
  );
}

const Container = styled.div`
width:100%;
height:400px;
background:pink;
display: flex;
flex-direction:row;
`;

const CodingSkill = styled.div`
flex:1;
order:1;
background:#991;
`;
const WrittingSkill = styled.div`
flex:1;
order:2;
background:#998;
`;

const Content = styled.div`
display:flex;
height:100%;
width:100%;
flex-direction: row;
`;

const CodingSkillLeft = styled.div`
flex:3;
order:1;
margin:40px;
`;

const CodingSkillRight = styled.div`
flex:2;
order:2;
text-align: center;
margin:40px;
`;

const CodingSkillText = styled.div`
text-align:center;
`;

const CodingSkillButton = styled.div`
  background:red;
  border-radius: 10px;
  width:160px;
  height:50px;
  display:block;
  color:white;
  line-height:50px;
  font-weight:bold;
  margin:0 auto;
  margin-top: 40px;
`;

const WrittingSkillLeft = styled.div`
flex:2;
order:1;
text-align: center;
margin:40px;
`;

const WrigingSkillText = styled.div`
text-align:center;
`;

const WritingSkillButton = styled.div`
  background:red;
  border-radius: 10px;
  width:160px;
  height:50px;
  display:block;
  color:white;
  line-height:50px;
  font-weight:bold;
  margin:0 auto;
  margin-top: 40px;
`;

const WrittingSkillRight = styled.div`
flex:3;
order:2;
margin:40px;
`;

const Image = styled.div`
width:100%;
height:100%;
background: url("https://www.davrous.com/wp-content/uploads/2018/12/screen001_thumb.jpg");
background-repeat:none;
background-size:contain;
`;