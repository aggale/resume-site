import { createSelector } from 'reselect';

const selectBlog = (state) => state.blog;

export const selectBlogPosts = createSelector([selectBlog], (blog) => blog.blogPosts);

// Get the blogPosts in a list instead of an object
export const selectBlogPostsList = createSelector([selectBlogPosts], (blogPosts) => Object.values(blogPosts));

export const selectBlogPost = (state, props) => state.blog.blogPosts[props.id];