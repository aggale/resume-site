import React from "react";
import { Card } from "react-bootstrap";
import "./Blog.css";

const BlogSummary = ({ title, summary }) => {
  return (
    <Card>
      <Card.Title>{title}</Card.Title>
      <hr />
      <Card.Text>{summary}</Card.Text>
    </Card>
  );
};

export default BlogSummary;
