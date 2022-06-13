import Head from "next/head";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Projects from "../components/pagesComponents/ProjectsPage";

export default function ProjectsPage() {
  return (
    <div>
      <Head>
        <title>Projects</title>
        <meta
          name="description"
          content="my personal website made with next js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Menu />
        <Projects />
      </main>

      <Footer />
    </div>
  );
}
