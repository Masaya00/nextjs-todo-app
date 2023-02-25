import Layout from "@/components/Layout";
import Cookies from "universal-cookie";
import { useRouter } from 'next/router';
import Link from "next/link";
import Post from "@/components/Post"
import { getAllPostData } from "@/lib/posts"

const cookie = new Cookies();

export default function Blog({filteredPosts}) {
  return (
    <Layout title="MMMMBLOG">
      <div className="grid grid-cols-4">

        {/* トップメッセージ */}
        <div className="col-span-4">
          <h1 className="text-center font-bold text-5xl my-20">Webエンジニアの備忘録</h1>
        </div>
        {/* ブログ一覧 */}
        <div className="grid grid-cols-3 col-span-3">
          {filteredPosts && filteredPosts.map((post) => <Post key={post.id} post={post} />)}
        </div>
        {/* サブメニュー */}
        <div className="col-span-1 row-span-2 grid">
          <div className="border rounded-2xl mb-2">
            <div className="font-bold text-l pt-3 pl-3 pb-3 bg-gray-100 rounded-t-2xl">
              カテゴリー
            </div>
          </div>
          <div className="border rounded-2xl">
            <div className="font-bold text-l pt-3 pl-3 pb-3 bg-gray-100 rounded-t-2xl">
              運営者について
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const filteredPosts = await getAllPostData();
  return {
    props: { filteredPosts },
  }
}

// export default function MainPage() {

//   const router = new useRouter();

//   const logout = () => {
//     cookie.remove('access_token', { path: "/"});
//     router.push('/')
//   }

//   return (
//     <Layout title="MainPage">
//       <h1 className="text-black">MainPage</h1>
//       <svg onClick={logout} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-10 cursor-pointer text-black">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
//       </svg>
//       <div className="flex justify-center">
//         <Link href='/blog' className="bg-indigo-500 hover:bg-indigo-600 px-4 py-12 rounded w-52 mr-2 text-center">
//         Visit Blog <br /> by SSG + ISR
//         </Link>
//         <Link href='/task' className="bg-indigo-500 hover:bg-indigo-600 px-4 py-12 w-52 rounded text-center leading-10">
//         Visit Task
//         </Link>
//       </div>
//     </Layout>
//   )
// }
