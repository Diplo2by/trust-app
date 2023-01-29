import Head from "next/head";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import dynamic from 'next/dynamic'

const Rust_button = dynamic(() => import('../components/Rust'), {
  ssr: false,
})




export default function Home() {
  return (
    <div>
      <Head>
        <title>Trust app</title>
      </Head>
      <Navbar />
      <Main />
      <Rust_button/>
    </div>
  );
}
