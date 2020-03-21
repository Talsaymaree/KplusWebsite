import React from "react"
import { ParentProps } from './../../utils/customProps';
import { GlobalStyle } from './../../utils/globalStyle';
import ShopHeader from './../ShopHeader/ShopHeader';
import ShopFooter from './../ShopFooter/ShopFooter';


export default ({ children }: ParentProps) => (
  <>
    <GlobalStyle theme="purple" />
    <ShopHeader />
    {children}
    <ShopFooter />
  </>
)