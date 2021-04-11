import React from 'react';
import styled from 'styled-components';
import { Panel, PanelGroup, Button } from 'rsuite';
import ContentfulRichTextParser from '../util/contentful-rich-text-parser';
import uuid from 'node-uuid';
import {DataConsumer} from '../../contexts/contentful';

function generateProjects(arr=[]){
  return arr.map(project => {
    let style = {
      display: 'inline-block',
      width: '30%',
      margin: 20
    }
    const multipleScreenshots = project.fields.screenshots.length > 1;
    const renderMore = ()=> (
      <PanelGroup accordion bordered>
      <Panel header="More screenshots">
        <ScreenShotGroup>
        {project.fields.screenshots.slice(1).map(s => (
          <ScreenshotImage src={s.fields.file.url} key={uuid.v4()}/>
        ))}
        </ScreenShotGroup>
      </Panel>
    </PanelGroup>
    );
    return (
    <Panel shaded bordered bodyFill style={style} key={uuid.v4()}>
      <Img src={project.fields.screenshots[0].fields.file.url} />
      {multipleScreenshots && renderMore()}
      <Panel header={project.fields.title}>
        {ContentfulRichTextParser(project.fields.description)}
        
      </Panel>
      <Button style={{marginTop:20}} appearance="primary" href="#">View on Kindle</Button>
    </Panel>
    )
  })
}
class ProjectsSection extends React.Component{

  render(){
    let projects = this.props.context.data.projects;
//    console.log('--------', projects);
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
}

let component = (props) => (
  <DataConsumer>
    {context => <ProjectsSection context={context} {...props}/>}
  </DataConsumer>
);
export default component;

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