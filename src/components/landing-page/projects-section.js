import React from 'react';
import styled from 'styled-components';
import { Panel, PanelGroup } from 'rsuite';
import ContentfulRichTextParser from '../util/contentful-rich-text-parser';

function generateProjects(arr=[]){
  return arr.map(project => {
    let style = {
      display: 'inline-block',
      width: '30%',
      margin: 20
    }
    const multipleScreenshots = project.screenshots.length > 1;
    const renderMore = ()=> (
      <PanelGroup accordion bordered>
      <Panel header="More screenshots">
        <ScreenShotGroup>
        {project.screenshots.slice(1).map(s => (
          <ScreenshotImage src={s.file.url}/>
        ))}
        </ScreenShotGroup>
      </Panel>
    </PanelGroup>
    );
    return (
    <Panel shaded bordered bodyFill style={style}>
      <Img src={project.screenshots[0].file.url} />
      {multipleScreenshots && renderMore()}
      <Panel header={project.title}>
        <p>
          <small>{ContentfulRichTextParser(project.description.raw)}</small>
        </p>
      </Panel>
    </Panel>
    )
  })
}
export default function ProjectsSection(props){
  let projects = props.data;

  let currentContent = <NoContent>No projects to show</NoContent>;
  if(projects.length){
    currentContent = generateProjects(projects);
  }
  return (
    <Container>
      <Top>
        <h2>Projects</h2>
      </Top>
      <Content>
        {currentContent}
      </Content>
    </Container>
  );
}

const Container = styled.div`
margin-top:60px;
padding-bottom:100px;
`;

const Top = styled.div`

`;
const Content = styled.div`
display:flex;
`;

const NoContent = styled.h4`
margin:60px;

`;

const Img = styled.img`
max-width:600px;
background-size:cover;
`;

const ScreenShotGroup = styled.div`
display:flex;
`;
const ScreenshotImage = styled.img`
width:128px;
margin:10px;
`;