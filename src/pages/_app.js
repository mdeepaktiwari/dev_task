import "bootstrap/dist/css/bootstrap.min.css";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navigation from "../../component/nav";
import {QueryClientProvider} from "react-query";
import {QueryClient} from "react-query";
import {useState} from "react";

export default function App({Component, pageProps}) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-style-img">
        <Navigation />
        <Component {...pageProps} />
        <ToastContainer position="top-left" />
      </div>
    </QueryClientProvider>
  );
}
