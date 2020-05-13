import React from "react"
import { GlobalStyle } from './../../utils/globalStyle';
import ShopHeader from './../ShopHeader/ShopHeader';
import ShopFooter from './../ShopFooter/ShopFooter';
import ShopMainContent from './../ShopMainContent/ShopMainContent';


export default () => (
  <>
    <GlobalStyle theme="purple" />
    <ShopHeader />
    <ShopMainContent />
    <ShopFooter />
  </>
)