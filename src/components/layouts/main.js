/* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/

import React, { useState } from "react";
import Header from '../Header';
import Footer from '../Footer';
import styled from 'styled-components';

import 'rsuite/dist/styles/rsuite-default.css';

// const query = graphql`
// query LayoutMainQuery {
//   site {
//     siteMetadata {
//       description
//       siteLogo
//       title
//       seo {
//         meta
//       }
//     }
//   }
// }
// `;

const defaultWidthWithMargins = '60%';
const MainLayout = (props)=>{
  let children = props.children;
  let allowMargins = props.allowMargins;
  let styles = {width:'100%'};

  if(allowMargins){
    styles = {width: defaultWidthWithMargins, margin:'0 auto'};
    if(props.setTo){
      styles.width = `${props.setTo}0%`;
    }
  }
  const renderThis = (data)=>{
    return (<>
      <Header/>
      <ContentContainer>
        <Content style={styles}>
          {children}
        </Content>
        <Footer/>
      </ContentContainer>
    </>);
  }
  return renderThis();
 // return (<StaticQuery query={query} render={(data => renderThis(data))}/>);
};
export default MainLayout;


const ContentContainer = styled.div`
width:100%;
background:#f9f9f9;
margin-top:60px;
overflow-y: scroll;
height: calc(100% - 60px);
`;

const Content = styled.div`
width:100%;
`;