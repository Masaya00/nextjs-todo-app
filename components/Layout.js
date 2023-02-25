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
      <div>
        
      </div>
      <div className="w-3/4 mx-auto mt-5">
        {children}
      </div>
      <Footer />
    </div>
  )
}