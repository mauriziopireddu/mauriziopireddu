import { AppProps } from "next/app";
import "styles/tailwind.css";
import "styles/cobalt2.prism.css";
import { Breadcrumbs } from "components/Breadcrumbs";
import { Title } from "components/Title";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Title />
    <div className="container mx-auto max-w-screen-lg px-4">
      <Breadcrumbs />
      <Component {...pageProps} />
    </div>
  </>
);

export default MyApp;
