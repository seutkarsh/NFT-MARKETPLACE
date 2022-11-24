import "../styles/globals.css";

//INTERNAL IMPORTS
import { NavBar } from "../components/componentIndex";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
