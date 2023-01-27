import React from 'react'
import { Helmet } from 'react-helmet'

function SEO () {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Hello! I am Sarah Todd, a frontend developer based out of Edmonton, Alberta Canada" />
        <title>Sarah Todd | Frontend Developer</title>
        <link rel="canonical" href="https://satodd.com" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap" rel="stylesheet"></link>

        <meta property="og:title" content="Sarah Todd | Frontend Developer" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://satodd.com" />
        <meta property="og:description" content="Hello! I am Sarah Todd, a frontend developer based out of Edmonton, Alberta Canada" />
        <meta property="og:site_name" content="Sarah Todd | Frontend Developer" />
        <meta property="og:image" content="https://satodd.com/images/sarah_pic.jpeg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sarah Todd | Frontend Developer" />
        <meta name="twitter:description" content="Hello! I am Sarah Todd, a frontend developer based out of Edmonton, Alberta Canada" />
        <meta name="twitter:image" content="https://satodd.com/images/sarah_pic.jpeg" />
      </Helmet>
    </>
  )
}

export default SEO
