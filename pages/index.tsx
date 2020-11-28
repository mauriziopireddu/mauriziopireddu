import Head from "next/head";
import { Link } from "../components/Link/Link";

const Home = () => (
  <>
    <Head>
      <title>Maurizio Pireddu | Loves clean code and dirty motorcycles</title>
    </Head>
    <main className="flex h-screen text-6xl font-semibold">
      <div className="m-auto">
        <h1>
          Maurizio Pireddu
          <br />
          loves{" "}
          <Link href="/clean-code" className="text-primary">
            clean code
          </Link>
          <br />
          and{" "}
          <Link href="/dirty-motorcycles" className="text-blue-400">
            dirty motorcycles.
          </Link>
        </h1>
      </div>
    </main>
  </>
);

export default Home;
