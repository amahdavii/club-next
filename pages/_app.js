import Head from "next/head";
import MainLayout from "../layout/mainLayout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Head>
        <title>آلین کلاب | باشگاه مشتریان آلین لند</title>
      </Head>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
