import {ProjectsTypes} from './projects.types'

const INITIAL_STATE = {projectList: {
    "resume-site": {
      "title": "Resume Websit",
      "image": "resume-website-thumbnail.jpg",
      "technologies": "React, JavaScript, CSS, Bootstrap",
      "description": "Built a Resume website featuring project information and a blog using React.js and React-bootstrap. Hosted using AWS.",
      "url": "http://annaggale.com",
      "github": "https://github.com/aggale/resume-site",
      "order": 1
    },
    "old-blog": {
      "title": "My Old Blog",
      "image": "old-blog-thumbnail.jpg",
      "technologies": "NLP, JavaScript, Bootstrap, DynamoDB, Arduino",
      "description": "This was a blog where I wrote about some of the projects I was doing in 2017-2018. I talk about building websites, some of my graduate NLP work, and playing with Arduino.",
      "url": "https://annaggale.wordpress.com/",
      "github": "",
      "order": 2
    }
}};

const projectsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ProjectsTypes.UPDATE_PROJECTS:
            return {...state, projectList: action.payload};
        default:
            return state;
    }
}

export default projectsReducer;