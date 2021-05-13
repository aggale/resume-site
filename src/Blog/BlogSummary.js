import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Blog.css";

const BlogSummary = ({ url, title, summary, partialText }) => {
  return (
    <Card className="blog-summary-card">
      <Card.Title className="blog-summary-card-title">{title}</Card.Title>
      <Card.Subtitle className="blog-summary-card-subtitle">
        {summary}
      </Card.Subtitle>
      <hr />
      <Card.Text className="blog-summary-card-text">{partialText}</Card.Text>
      <div className="blog-summary-card-buttons">
        <Button size="sm">
          <Link to={`/blog/${url}`}>Read more...</Link>
        </Button>
      </div>
    </Card>
  );
};

export default BlogSummary;
