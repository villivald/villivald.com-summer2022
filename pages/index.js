import Head from "next/head";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Projects from "../components/Projects";
import Timeline from "../components/Timeline";
import Skillbox from "../components/Skillbox";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";

export default function Home({ blogData }) {
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
        <Blogs blogData={blogData} />
      </main>

      <Footer />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    `https://dev.to/api/articles?username=villivald&per_page=3`
  );
  const blogData = await res.json();

  return {
    props: {
      blogData,
    },
  };
};
