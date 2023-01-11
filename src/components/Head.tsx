import React from 'react';
import { Helmet } from 'react-helmet'

function Head() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sarah Todd | Frontend Developer</title>
        <link rel="canonical" href="http://satodd.com" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet"></link>
      </Helmet>
    </>
  );
}

export default Head;
