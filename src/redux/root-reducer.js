import { combineReducers } from "redux";

import blogReducer from "./blog/blog.reducers";
import projectsReducer from './projects/projects.reducers'

const rootReducer = combineReducers({
    projects: projectsReducer,
    blog: blogReducer
});

export default rootReducer;