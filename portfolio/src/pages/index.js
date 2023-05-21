import Head from "next/head";
import { Element } from "react-scroll";
import SectionsWrapper from "@/components/sectionsWrapper";
import { useState, useEffect } from "react";
import Hero from "@/components/Hero";

export default function Work() {
  return (
    <SectionsWrapper sections={3} scrollables={[1]} whiteSections={[0]}>
      <Head>
        <title>Portfolio - Santiago Recoba</title>
        <meta name="description" content="Portfolio - Santiago Recoba" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"
        />
        <link rel="stylesheet" href="style.css" />
        <script
          src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
          integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
          integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
          integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
          crossorigin="anonymous"
        ></script>
        <script src="script.js"></script>
      </Head>
      <Element name="section-0" id="section-0">
        <Hero />
      </Element>
      <Element name={`section-1`} id={`section-1`}></Element>
      <Element name={`section-2`} id={`section-2`}>
        {/* <Footer /> */}
      </Element>
    </SectionsWrapper>
  );
}
