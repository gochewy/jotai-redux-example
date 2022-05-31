import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="container">
      <h1>State Management</h1>
      <div className="grid">
        <Link href="/jotai" passHref>
          <a>
            <article>
              <h2>Jotai</h2>
            </article>
          </a>
        </Link>
        <Link href="/redux" passHref>
          <a>
            <article>
              <h2>Redux</h2>
            </article>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
