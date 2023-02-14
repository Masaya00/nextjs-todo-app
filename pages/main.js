import Layout from "@/components/Layout";
import Cookies from "universal-cookie";
import { useRouter } from 'next/router';
import Link from "next/link";

const cookie = new Cookies();



export default function MainPage() {

  const router = new useRouter();

  const logout = () => {
    cookie.remove('access_token', { path: "/"});
    router.push('/')
  }

  return (
    <Layout title="MainPage">
      <h1 className="text-black">MainPage</h1>
      <svg onClick={logout} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-10 cursor-pointer text-black">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
      </svg>
      <div className="flex justify-center">
        <Link href='/blog' className="bg-indigo-500 hover:bg-indigo-600 px-4 py-12 rounded w-52 mr-2 text-center">
        Visit Blog <br /> by SSG + ISR
        </Link>
        <Link href='/task' className="bg-indigo-500 hover:bg-indigo-600 px-4 py-12 w-52 rounded text-center leading-10">
        Visit Task
        </Link>
      </div>
    </Layout>
  )
}