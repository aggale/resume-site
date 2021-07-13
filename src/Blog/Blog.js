import React, {Component} from 'react';
import { Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';

import BlogMain from "./BlogMain";
import BlogPost from "./BlogPost";
import CreateBlogPost from "./CreateBlogPost";

import { convertBlogPostsSnapshotToMap, firestore } from '../firebase/firebase-utils';
import { updateBlogPostsAction } from '../redux/blog/blog.actions';

class Blog extends Component {
  componentDidMount() {
    const { updateBlogPostsAction } = this.props;

    const blogPostsRef = firestore.collection('blogPosts');
    
    blogPostsRef.onSnapshot(async (snapshot) => {
      const blogPostMap = convertBlogPostsSnapshotToMap(snapshot);

      updateBlogPostsAction(blogPostMap);
    })
  }
  
  render() {
    const {blogPosts} = this.props;

    return (
      <div>
        <Switch>
          <Route exact path="/blog/create">
            <CreateBlogPost />
          </Route>
          <Route
            path="/blog/:id"
            render={({ match }) => (
              <BlogPost id={match.params.id} />
            )}
          />
          <Route exact path="/blog">
            <BlogMain />
          </Route>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateBlogPostsAction: blogPostsMap => dispatch(updateBlogPostsAction(blogPostsMap))
})

export default connect(null, mapDispatchToProps)(Blog);
