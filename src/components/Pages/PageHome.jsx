import React from "react";
import Header from "./Header";
import Section from "./Section";
import Main from "./Main";
import SectionCardHome from "./SectionCardHome";
import Article from "./Article";
import ContactMe from "./ContactMe";
import Footer from "./Footer";

const PageHome = (props) => {
  return (
    <>
      <Header />
      <Section />
      <Main />
      <SectionCardHome />
      <Article />
      <ContactMe />
      <Footer />
    </>
  );
};

export default PageHome;
