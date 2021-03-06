/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import GlobalStyles  from "../../styles/global";
import MenuBar from "../MenuBar"
import Sidebar from "../Sidebar";

import * as S from './styled';

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
    <GlobalStyles />
     <Sidebar />
      <S.LayoutMain>{children}</S.LayoutMain>
      <MenuBar />
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
