import React from "react";
import { CardGroup } from "react-bootstrap";
import BlogSummary from "./BlogSummary";
import "./Blog.css";

const Blog = ({ blogPosts }) => {
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
          <BlogSummary title={post["title"]} summary={post["summary"]} />
        ))}
      </CardGroup>
    </div>
  );
};

export default Blog;
