import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navigation from '../../component/nav';

export default function App({ Component, pageProps }) {
  return <div className="bg-style-img"> 
      <Navigation />
      <Component {...pageProps} />
      <ToastContainer position="top-left" />
  </div>
}
