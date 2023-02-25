import Link from "next/link"

export default function Post({post}) {
  return (
    <div className="border w-64 p-5 h-52 mr-2 mb-2 text-center rounded-2xl shadow text-gray-700">
      <span>{post.id}</span>
      <Link href={`/posts/${post.id}`}>
        <span className="cursor-pointer">
          {post.title}
        </span>
      </Link>
    </div>
  )
}