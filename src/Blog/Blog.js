import { Route, Switch } from "react-router-dom";
import BlogMain from "./BlogMain";
import BlogPost from "./BlogPost";

const Blog = (props) => {
  return (
    <div>
      <Switch>
        <Route
          path="/blog/:id"
          render={({ match }) => (
            <BlogPost
              blogPost={Object.values(props.blogPosts).find(
                (p) => p.url === match.params.id
              )}
            />
          )}
        />
        <Route exact path="/blog">
          <BlogMain blogPosts={props.blogPosts} />
        </Route>
      </Switch>
    </div>
  );
};

export default Blog;
