import React from "react";
import Image from "next/image";

const SingleBlog = ({ post }) => {
  return (
    <a href={post.canonical_url} className="blogPost">
      <Image src={post.cover_image} alt={post.title} height={170} width={400} />
      <h3>{post.title}</h3>
    </a>
  );
};

export default SingleBlog;
