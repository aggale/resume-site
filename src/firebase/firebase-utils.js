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

export const firestore = firebase.firestore();

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
    const {title, summary, content, posted, url} = doc.data();

    // Turn posted into a date
    const date = new Date(0);
    date.setSeconds(posted.seconds);

    return {
      title,
      summary,
      posted: date.toDateString(),
      url,
      content,
    }
  })
  .reduce((blogPostsObj, blogPost) => ({...blogPostsObj, [blogPost.url]: blogPost}), {})
}

export const addBlogPost = async (title, summary, url, content) => {
  // Set timestamp for posted date to current date
  const posted = firebase.firestore.Timestamp.fromDate(new Date());

  try {
    await firestore.collection('blogPosts').doc(url).set({
      title,
      summary,
      posted,
      url,
      content
    });
  } catch (error) {
    console.log("Error adding blog post: ", error);
    return false;
  }
  
  return true;
}

