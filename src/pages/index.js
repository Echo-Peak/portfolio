import React from 'react';
import { graphql } from 'gatsby';
import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'
import Layout from "../components/layouts/main"
import { Popover, Whisper } from 'rsuite';
import {IconButton, ButtonGroup, ButtonToolbar } from 'rsuite';
import Button from '../components/UI/button';
import styled from 'styled-components';


import ProjectsSection from '../components/landing-page/projects-section';
import WebsitesSection from '../components/landing-page/websites-section';
import WritingSection from '../components/landing-page/writing-section';
import PersonalSection from '../components/landing-page/personal-section';
import SkillsSection from '../components/landing-page/skills-section';

import "../components/UI/setup.scss";

let skills = ['Javascript', 'Node.js', 'react'];


const moreSkills = (
  <Popover title="Title">
    <p>This is a default Popover </p>
    <p>Content</p>
    <p>
      <a>link</a>
    </p>
  </Popover>
);

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consequat cursus molestie. Etiam neque odio, laoreet sed nunc in, pulvinar porttitor orci. Nullam interdum interdum libero a rutrum. Suspendisse id ultrices nibh. Etiam ornare tempus elit a efficitur. Praesent nec massa quis erat porttitor cursus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`;
const IndexPage = () => {

  return (<Layout allowMargins setTo={8}>
    <PersonalSection/>

    <SkillsSection/>

    <ProjectsSection/>

    <WritingSection/>

    <WebsitesSection/>
  </Layout>);
}

export default IndexPage