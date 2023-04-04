import React from "react";
import Head from "next/head";
import Header from "../header/Header";
import Footer from "../footer/Footer";

function Layout({
  headTitle,
  headDescription,
  hedKeyword,
  headRobots,
  children,
}) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content={headDescription} />
        <meta http-equiv="content-language" content="fa" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={hedKeyword} />
        <meta name="ROBOTS" content={headRobots} />
        <link rel="icon" href="/images/favicon.png" />
        <title>چاقوکده-{headTitle}</title>
      </Head>
      <main>
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
}

export default Layout;
