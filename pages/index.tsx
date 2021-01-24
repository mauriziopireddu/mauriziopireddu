import Head from "next/head";
import { Link } from "components/Link";
import { Flex } from "components/Flex";
import { MetaDescription } from "components/Meta/MetaDescription";

const Home = () => (
  <>
    <Head>
      <title>Maurizio Pireddu | Loves clean code and dirty motorcycles</title>
    </Head>
    <MetaDescription />
    <Flex as="main" className="h-screen text-6xl font-semibold leading-tight">
      <div className="m-auto">
        <h1>
          Maurizio Pireddu
          <br />
          loves{" "}
          <Link href="/clean-code" className="text-cc underline italic">
            clean code
          </Link>
          <br />&{" "}
          <Link href="/dirty-motorcycles" className="text-dm underline italic">
            dirty motorcycles
          </Link>
        </h1>
      </div>
    </Flex>
  </>
);

export default Home;
