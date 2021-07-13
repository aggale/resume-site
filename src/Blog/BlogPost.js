import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { connect } from 'react-redux';
import { selectBlogPost } from "../redux/blog/blog.selectors";

import "./Blog.css";

class BlogPost extends Component {
  render() {
    if (!this.props.blogPost) {
      return (<div>Post not found.</div>);
    } 

    const { title, summary, posted, content } = this.props.blogPost;
    console.log('blogPost', this.props.blogPost)
    return (
      <div className="m-5">
        <Card className="blog-post-card">
          <Card.Title className="blog-post-card-title">{title}</Card.Title>
          <Card.Subtitle className="blog-post-card-subtitle">
            {summary}
          </Card.Subtitle>
          <hr />
          {
            content.map(item => 
              item.type === 'text' ? 
              <Card.Text className="blog-post-card-text">{item.value}</Card.Text> :
              <Card.Img src={require("../assets/images/" + item.value).default} />
            )
          }
          <Card.Footer className="blog-post-card-footer">
            {`Posted: ${posted}`}
          </Card.Footer>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  blogPost: selectBlogPost(state, props)
})

export default connect(mapStateToProps)(BlogPost);
