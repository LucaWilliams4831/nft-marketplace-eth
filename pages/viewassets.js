/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Script from "next/script";
import Display from "../components/Display.js";
import TopWaveFooter from "../components/TopWaveFooter.js";
import Team from "../components/Team.js";
import ItemView from "../components/ItemView.js";
import WaveFooter from "../components/WaveFooter.js";
import Footer from "../components/Footer.js";
import ItemList from "../components/ItemList.js";
import OwnAssestList from "../components/OwnAssestList";

export default function Home() {
  return (
    <div>
      <Script src="https://kit.fontawesome.com/a076d05399.js" />
      <Head>
        <title>OpenStore • Your Assets</title>
        <meta name="description" content="Blockchain based NFT application" />
      </Head>
      <main
        style={{ marginTop: "30px", marginBottom: "50px", minHeight: "70vh" }}
      >
        <div className="container">
          <h1
            className="title-main text-center"
            style={{ marginBottom: "30px", fontWeight: "bold" }}
          >
            Your assets
          </h1>
          <OwnAssestList />
        </div>
      </main>
    </div>
  );
}
