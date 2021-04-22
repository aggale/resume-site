import React from "react";
import "./App.css";
import Header from "./components/Header";
import Projects from "./Projects/Projects";
import data from "./data.json";
import Blog from "./Blog/Blog";
import BlogPost from "./Blog/BlogPost";

function App() {
  return (
    <div>
      <Header />
      {/*<Projects projects={data.projects} />
      <Blog blogPosts={data["blog"]} />*/}
      <BlogPost
        blogPost={{
          title: "Images are the worst ever",
          summary:
            "I had this problem getting my React images to appear when I have a dynamic list",
          text:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
          posted: "August 5, 2019",
        }}
      />
    </div>
  );
}

export default App;
