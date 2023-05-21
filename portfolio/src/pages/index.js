import Head from "next/head";
import { Element } from "react-scroll";
import SectionsWrapper from "../components/sectionsWrapper";
import { useState, useEffect } from "react";


export default function Work() {


  return (
    <SectionsWrapper sections={3} scrollables={[1]} whiteSections={[0]}>
      <Head>
        <title>Portfolio - Santiago Recoba</title>
        <meta name="description" content="Portfolio - Santiago Recoba" />
      </Head>
      <Element name="section-0" id="section-0">
         <Hero /> 
      </Element>
      <Element name={`section-1`} id={`section-1`}>
      </Element>
      <Element name={`section-2`} id={`section-2`}>
        <Footer />
      </Element>
    </SectionsWrapper>
  );
}
