import React from "react";
import { Card } from "react-bootstrap";
import "./Blog.css";

const BlogPost = ({ blogPost }) => {
  const { title, summary, text, posted } = blogPost;
  return (
    <div className="m-5">
      <Card className="blog-post-card">
        <Card.Title className="blog-post-card-title">{title}</Card.Title>
        <Card.Subtitle className="blog-post-card-subtitle">
          {summary}
        </Card.Subtitle>
        <hr />
        <Card.Text className="blog-post-card-text">{text}</Card.Text>
        <Card.Footer className="blog-post-card-footer">
          {`Posted: ${posted}`}
        </Card.Footer>
      </Card>
    </div>
  );
};

export default BlogPost;
