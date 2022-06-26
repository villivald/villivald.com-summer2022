import Head from "next/head";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Uses from "../components/pagesComponents/UsesPage";

export default function UsesPage({ toggleTheme, selectedTheme }) {
  return (
    <div>
      <Head>
        <title>Uses</title>
        <meta
          name="description"
          content="my personal website made with next js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header toggleTheme={toggleTheme} theme={selectedTheme} />
        <Menu />
        <Uses />
      </main>

      <Footer />
    </div>
  );
}
