import Head from "next/head";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Studies from "../components/pagesComponents/StudiesPage";

export default function StudiesPage({ toggleTheme, selectedTheme }) {
  return (
    <div>
      <Head>
        <title>Studies</title>
        <meta
          name="description"
          content="my personal website made with next js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header toggleTheme={toggleTheme} theme={selectedTheme} />
        <Menu />
        <Studies />
      </main>

      <Footer />
    </div>
  );
}
