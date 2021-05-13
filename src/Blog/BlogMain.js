import React from "react";
import { CardGroup } from "react-bootstrap";
import BlogSummary from "./BlogSummary";
import "./Blog.css";
import blogHeader from "../assets/images/blog-header.jpg";

const BlogMain = ({ blogPosts }) => {
  return (
    <div className="blog-container">
      <div className="blog-intro">
        <img src={blogHeader} alt="Random Software Ramblings" />
      </div>
      <CardGroup className="blog-posts">
        {Object.values(blogPosts).map((post) => (
          <BlogSummary
            key={post.url}
            url={post.url}
            title={post.title}
            summary={post.summary}
            partialText={post.partialText}
          />
        ))}
      </CardGroup>
    </div>
  );
};

export default BlogMain;
