import React from "react";
import { CardGroup } from "react-bootstrap";
import BlogSummary from "./BlogSummary";
import "./Blog.css";

const BlogMain = ({ blogPosts }) => {
  console.log(blogPosts);
  console.log("hey");
  return (
    <div class="blog-container">
      <div class="blog-intro">
        <h1>{"Welcome to my blog!"}</h1>
        <p>
          {
            "Just a few thoughts I've compiled about the weird software development problems I face"
          }
        </p>
      </div>
      <CardGroup class="blog-posts">
        {Object.values(blogPosts).map((post) => (
          <BlogSummary
            url={post["url"]}
            title={post["title"]}
            summary={post["summary"]}
            partialText={post["partialText"]}
          />
        ))}
      </CardGroup>
    </div>
  );
};

export default BlogMain;