import { AppProps } from "next/app";
import "styles/tailwind.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <div className="container mx-auto max-w-screen-lg ">
    <Component {...pageProps} />
  </div>
);

export default MyApp;
