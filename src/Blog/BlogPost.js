import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "./Blog.css";

class BlogPost extends Component {
  constructor() {
    super();
    this.state = { fullText: "" };
  }

  componentDidMount() {
    const targetId = this.props.blogPost.id;
    fetch("/blog.txt")
      .then((response) => response.text())
      .then((data) => {
        data
          .trimEnd()
          .split("END")
          .forEach((post) => {
            const postLines = post.trimStart().split("\n");
            const idMatches = postLines[0].match(/^\d+/);
            const id = idMatches ? idMatches[0] : null;

            if (id == targetId) {
              const body = postLines.slice(1).join("\n");
              this.setState({ fullText: body });
            }
          });
      });
  }

  render() {
    const { title, summary, posted } = this.props.blogPost;
    const { fullText } = this.state;

    return (
      <div className="m-5">
        <Card className="blog-post-card">
          <Card.Title className="blog-post-card-title">{title}</Card.Title>
          <Card.Subtitle className="blog-post-card-subtitle">
            {summary}
          </Card.Subtitle>
          <hr />
          <Card.Text className="blog-post-card-text">{fullText}</Card.Text>
          <Card.Footer className="blog-post-card-footer">
            {`Posted: ${posted}`}
          </Card.Footer>
        </Card>
      </div>
    );
  }
}

export default BlogPost;
