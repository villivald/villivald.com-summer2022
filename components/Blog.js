import React from "react";

const Blog = () => {
  const blogPosts = ["Post 1", "Post 2", "Post 3"];
  return (
    <div className="blog">
      <h3>Blog posts</h3>
      <div className="blogPosts">
        {blogPosts.map((post) => (
          <div key={post} className="blogPost">
            {post}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
