import Link from "next/link"

export default function Post({post}) {
  return (
    <div className="text-gray-700">
      <span>{post.id}</span>
      {" : "}
      <Link href={`/posts/${post.id}`}>
        <span className="cursor-pointer  border-b">
          {post.title}
        </span>
      </Link>
    </div>
  )
}