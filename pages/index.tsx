import { FC } from "react";
import Link from "next/link";
import { posts } from "../lib/post";

const TopPage: FC = () => {
  return (
    <div>
      <h1>Hello Next!</h1>
      <Link href="/about.html">about</Link>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}.html`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopPage;
