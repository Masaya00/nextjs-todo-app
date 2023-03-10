import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

export default function Post({ post }) {
  const router = useRouter();

  if (router.isFallback || !post) {
    return <div>Loading...</div>;
  }
  return (
    <Layout title={post.title}>
      <div className="border w-3/4 text-center mt-2">
        <p className="m-4 text-gray-800">
          {"ID : "}
          {post.id}
        </p>
        <p className="mb-4 text-xl font-bold text-gray-800">{post.title}</p>
        <p className="mb-12 text-gray-800">{post.created_at}</p>
        <p className="px-10 text-gray-800">{post.content}</p>
        <Link href="/main">
          <div className="flex cursor-pointer mt-12 text-gray-800">
            <svg
              className="w-6 h-6 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
              />
            </svg>
            <span>Back to blog-page</span>
          </div>
        </Link>
      </div>
    </Layout>
  );
}
export async function getStaticPaths() {
  const paths = await getAllPostIds();

  return {
    paths,
    fallback: true,
  };
}
export async function getStaticProps({ params }) {
  //const { post: post } = await getPostData(params.id);
  const post = await getPostData(params.id);
  return {
    props: {
      post,
    },
    revalidate: 3,
  };
}