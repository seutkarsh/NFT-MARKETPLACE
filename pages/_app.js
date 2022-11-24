import "../styles/globals.css";

//INTERNAL IMPORTS
import { NavBar, Footer } from "../components/componentIndex";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

export default MyApp;
