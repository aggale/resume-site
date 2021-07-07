import { BlogPostActionTypes } from './blog.types';

const INITIAL_STATE = {blogPosts: {}};

const blogReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case BlogPostActionTypes.UPDATE_BLOG_POSTS:
            return {...state, blogPosts: action.payload};
        default:
            return state;
    }
}

export default blogReducer;