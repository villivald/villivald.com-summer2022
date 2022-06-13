import Head from "next/head";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import About from "../components/pagesComponents/AboutPage";

export default function AboutPage() {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta
          name="description"
          content="my personal website made with next js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Menu />
        <About />
      </main>

      <Footer />
    </div>
  );
}
