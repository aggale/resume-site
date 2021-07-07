import { ProjectsActionTypes } from './projects.types'

export const updateProjects = (projects) => ({
    type: ProjectsActionTypes.UPDATE_PROJECTS,
    payload: projects
})