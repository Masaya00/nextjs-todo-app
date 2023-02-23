import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({children, title='Default'}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main className="flex flex-1 justify-center items-center w-screen flex-col">
        {children}
      </main>
    </div>
  )
}