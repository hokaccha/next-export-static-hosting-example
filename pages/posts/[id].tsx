import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Post, posts } from "../../lib/post";
import Link from "next/link";

type Props = {
  post: Post;
};

const PostPage: NextPage<Props> = ({ post }) => {
  return (
    <div>
      <Link href="/">back</Link>
      <h1>
        {post.id}: {post.title}
      </h1>
      <div>{post.body}</div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: posts.map((post) => {
      return { params: { id: post.id.toString() } };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = (context) => {
  const id = Number(context.params?.id);
  const post = posts.find((post) => post.id === id);
  if (!post) return { notFound: true };

  return {
    props: {
      post,
    },
  };
};

export default PostPage;
