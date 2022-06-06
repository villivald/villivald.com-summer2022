import Head from "next/head";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Projects from "../components/Projects";
import Timeline from "../components/Timeline";
import Skillbox from "../components/Skillbox";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Main page</title>
        <meta
          name="description"
          content="my personal website made with next js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <Header />
        <Menu />
        <Projects />
        <Timeline />
        <Skillbox />
        <Blog />
      </main>

      <Footer />
    </div>
  );
}
