import Layout from "@/components/Layout"
import Link from "next/link"
import { getAllPostData } from "@/lib/posts"
import Post from "@/components/Post"

export default function Blog({filteredPosts}) {
  return (
    <Layout title="Blog">
      <ul>
        {filteredPosts && filteredPosts.map((post) => <Post key={post.id} post={post} />)}
      </ul>
      <Link href="/main">
        <div className="flex cursor-pointer mt-12">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-700">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
          </svg>
          <br />
          <span className="text-gray-700">戻る</span>
        </div>
      </Link>
    </Layout>
  )
}

export async function getStaticProps() {
  const filteredPosts = await getAllPostData();
  return {
    props: { filteredPosts },
  }
}