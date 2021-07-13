import { createSelector } from 'reselect';

const selectProjects = (state) => state.projects;

export const selectProjectList = createSelector([selectProjects], (projects) => projects.projectList);

export const selectSortedProjectList = createSelector(
    [selectProjectList], 
    (projectList) => {console.log(Object.keys(projectList)); return Object.keys(projectList).sort((a, b) => projectList[a].order - projectList[b].order)}
);