import React from "react";
import { CardGroup } from "react-bootstrap";
import { connect } from 'react-redux';

import BlogSummary from "./BlogSummary";

import { selectBlogPostsList } from '../redux/blog/blog.selectors'

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
            partialText={post.content ? post.content[0].value : ""}
          />
        ))}
      </CardGroup>
    </div>
  );
};

const mapStateToProps = (state) => ({
  blogPosts: selectBlogPostsList(state)
})

export default connect(mapStateToProps)(BlogMain);
