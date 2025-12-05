import Head from "next/head";
import MyNavbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Antoine Drive Services</title>
        <meta name="description" content="Antoine Drive Services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <MyNavbar />
      </header>
      
      <main>{children}</main>

      <footer>
        <Footer />
      </footer>
      
    </>
  );
}