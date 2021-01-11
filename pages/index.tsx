import Head from "next/head";
import { Link } from "components/Link";
import { Flex } from "components/Flex";

const Home = () => (
  <>
    <Head>
      <title>Maurizio Pireddu | Loves clean code and dirty motorcycles</title>
    </Head>
    <Flex as="main" className="h-screen text-6xl font-semibold leading-tight">
      <div className="m-auto">
        <h1>
          Maurizio Pireddu
          <br />
          loves{" "}
          <Link href="/clean-code" className="text-primary underline italic">
            clean code
          </Link>
          <br />
          and{" "}
          <Link
            href="/dirty-motorcycles"
            className="text-blue-400 underline italic"
          >
            dirty motorcycles
          </Link>
        </h1>
      </div>
    </Flex>
  </>
);

export default Home;
