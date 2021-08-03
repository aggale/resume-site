import React, { Component } from "react";
import { connect } from 'react-redux';
import { CardDeck } from "react-bootstrap";

import Project from "./Project";

import { updateProjects } from '../redux/projects/projects.actions';
import { selectProjectList, selectSortedProjectList } from '../redux/projects/projects.selectors'

import { convertProjectsSnapshotToMap, firestore } from '../firebase/firebase-utils';

class Projects extends Component {
  componentDidMount() {
    const { updateProjectsAction } = this.props;

    const projectsRef = firestore.collection('projects');
    
    projectsRef.onSnapshot(async (snapshot) => {
      const projectsMap = convertProjectsSnapshotToMap(snapshot);

      updateProjectsAction(projectsMap);
    })
  }

  render() {
    const projects = this.props.projects;
    const sortedProjects = this.props.sortedProjects;

    return (
      <div id="projects-container">
        <h3 className="mb-5">
          Learn more about some of my personal projects (past and present!)
        </h3>
        <CardDeck>
          {sortedProjects.map((project) => (
            <Project key={project} project={projects[project]} />
          ))}
        </CardDeck>
      </div>
  );
}
  
};

const mapStateToProps = (state) => ({
  projects: selectProjectList(state),
  sortedProjects: selectSortedProjectList(state)
})

const mapDispatchToProps = (dispatch) => ({
  updateProjectsAction: (projectsMap) => dispatch(updateProjects(projectsMap))
})

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
