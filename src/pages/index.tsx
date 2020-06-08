import React, { ReactNode } from "react"
import { ThemeProvider } from "@material-ui/core";
import { theme, GlobalStyle } from '../utils/globalStyle';
import { Helmet } from 'react-helmet';
import Footer from './../components/Footer/Footer';
import HeroHeader from '../components/HeroHeader/HeroHeader';
import SectionHeader from "../components/SectionHeader/SectionHeader";
import AlbumShowcases from './../components/AlbumShowcases/AlbumShowcases';
import MainContent from "../components/MainContent/MainContent";
import PaperCard from "../components/PaperCard/PaperCard";

const IndexPage = () => {

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>main section</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Helmet>
      <MainContent>
        <HeroHeader />
        <SectionHeader title="New Releases For You" subtitle="Enjoy some new awesome music" linkText="View Albums" />
        <AlbumShowcases />
        <SectionHeader title="Latest Posts" subtitle="Checkout What's new at our blog" />
        <PaperCard>
        <SectionHeader title="Latest Posts" subtitle="Checkout What's new at our blog" />
        </PaperCard>
      </MainContent>
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default IndexPage;
