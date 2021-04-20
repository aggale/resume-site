import React from "react";
import { Card } from "react-bootstrap";
import "./Blog.css";

const BlogSummary = ({ title, summary }) => {
  return (
    <Card className="blog-summary-card">
      <Card.Title className="blog-summary-card-title">{title}</Card.Title>
      <hr />
      <Card.Text>{summary}</Card.Text>
    </Card>
  );
};

export default BlogSummary;
