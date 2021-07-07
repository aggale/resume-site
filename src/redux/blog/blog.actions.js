import {BlogPostActionTypes} from './blog.types';

export const updateBlogPostsAction = (blogPosts) => ({
        type: BlogPostActionTypes.UPDATE_BLOG_POSTS,
        payload: blogPosts
});