import Link from "next/link"

export default function Post({post}) {
  return (
    <div className="border p-28 m-5 rounded-2xl shadow text-gray-700">
      <span>{post.id}</span>
      <Link href={`/posts/${post.id}`}>
        <span className="cursor-pointer">
          {post.title}
        </span>
      </Link>
    </div>
  )
}