/* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/

import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";
import Header from '../Header';
import Content from './content';
import Footer from '../Footer';
import { Button, IconButton, ButtonGroup, ButtonToolbar } from 'rsuite';
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

const MainLayout = ({children})=>{
  const renderThis = (data)=>{
    return (<>
      <Header/>
      <Content>
        {children}
      </Content>
      <Footer/>
    </>);
  }
  return renderThis();
 // return (<StaticQuery query={query} render={(data => renderThis(data))}/>);
};
export default MainLayout;
