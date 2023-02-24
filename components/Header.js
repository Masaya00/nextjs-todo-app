import Cookies from "universal-cookie";
import { useRouter } from 'next/router';

const cookie = new Cookies();

export default function Header() {

  const router = new useRouter();

  const logout = () => {
    cookie.remove('access_token', { path: "/"});
    router.push('/')
  }

  return (
    <div>
      <header>
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2 rounded border-b">
          <div className="container flex flex-wrap items-center justify-between mx-auto">
            <a href="https://flowbite.com/" className="flex items-center">
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">MMMMBLOG</span>
            </a>
            <div className="flex items-center md:order-2">
                {/* ユーザーアイコン */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {/* ログアウトアイコン */}
                <svg onClick={logout} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                </svg>
            </div>
          </div>
        </nav>

      </header>
    </div>
  )
}