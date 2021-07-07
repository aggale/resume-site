import {ProjectsActionTypes} from './projects.types'

const INITIAL_STATE = {projectList: {}};

const projectsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ProjectsActionTypes.UPDATE_PROJECTS:
            return {...state, projectList: action.payload};
        default:
            return state;
    }
}

export default projectsReducer;