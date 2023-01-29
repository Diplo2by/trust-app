import Head from "next/head";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Rust from "../components/Rust";



export default function Home() {
  return (
    <div>
      <Head>
        <title>Trust app</title>
      </Head>
      <Navbar />
      <Main />
      <Rust/>
    </div>
  );
}
