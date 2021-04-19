import React from "react";
import { CardGroup } from "react-bootstrap";
import BlogSummary from "./BlogSummary";
import "./Blog.css";
import profilePic from "../assets/images/cartoon-me-cutout.png";

const Blog = ({ blogPosts }) => {
  console.log(blogPosts);
  console.log("hey");
  return (
    <div class="blog-container">
      <div class="blog-intro">
        <img src={profilePic} alt="Me" className="profile-pic" />
        <div>
          <h1>{"Welcome to my blog!"}</h1>
          <p>
            {
              "Just a few thoughts I've compiled about the weird software development problems I face"
            }
          </p>
        </div>
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
