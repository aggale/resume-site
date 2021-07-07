import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = 
    {
        apiKey: "AIzaSyD-140AfX-_QJ7K4Dgi2SANNkkP_My2psQ",
        authDomain: "resume-site-1c1be.firebaseapp.com",
        projectId: "resume-site-1c1be",
        storageBucket: "resume-site-1c1be.appspot.com",
        messagingSenderId: "946343866989",
        appId: "1:946343866989:web:f6a0e4c85552f63baf8564",
        measurementId: "G-5WES9WNKQC"
      };

firebase.initializeApp(config);

export const convertProjectsSnapshotToMap = (projects) => {
  return projects.docs.map(doc => {
    const { url, title, technologies, description, image, order } = doc.data();
    const { id } = doc;

    return {
      id,
      url,
      title,
      technologies,
      description,
      image,
      order
    }
  })
  .reduce((projectsObj, project) => ({...projectsObj, [project.id]: project}), {})
}

export const convertBlogPostsSnapshotToMap = (blog) => {
  return blog.docs.map(doc => {
    const {title, summary, contents, posted, url} = doc.data();

    return {
      title,
      summary,
      posted,
      url,
      contents,
    }
  })
  .reduce((blogPostsObj, blogPost) => ({...blogPostsObj, [blogPost.url]: blogPost}), {})
}

export const firestore = firebase.firestore();