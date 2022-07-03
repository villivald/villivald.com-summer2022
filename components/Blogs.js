import React from "react";
import { FormattedMessage } from "react-intl";

import SingleBlog from "./subComponents/SingleBlog";

const Blogs = ({ blogData }) => {
  return (
    <div className="blog">
      <h2>
        <FormattedMessage id="blogPosts" />
      </h2>
      <div className="blogPosts">
        {blogData.map((post) => (
          <SingleBlog key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
