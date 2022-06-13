import "../styles/globals.css";

// components
import "../styles/app.css";
import "../styles/blog.css";
import "../styles/footer.css";
import "../styles/header.css";
import "../styles/menu.css";
import "../styles/projects.css";
import "../styles/skillbox.css";
import "../styles/timeline.css";

// pages
import "../styles/pages/about.css";
import "../styles/pages/books.css";
import "../styles/pages/projects.css";
import "../styles/pages/studies.css";
import "../styles/pages/uses.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
