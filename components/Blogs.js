import React from "react";
import SingleBlog from "./subComponents/singleBlog";

const Blogs = ({ blogData }) => {
  return (
    <div className="blog">
      <h2>Blog posts</h2>
      <div className="blogPosts">
        {blogData.map((post) => (
          <SingleBlog key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
