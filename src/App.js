// this is our main app component
// components can be classes or functions. classes are old-- use hooks and functions now

// without jsx just plain javascript
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import { FeedbackProvider } from "./context/FeedbackContext";

// want to return jsx (html into javascript)
function App() {
  // can only have one element - solution is div or fragment <></>
  // cannot use class in jsx, must use className
  // cannot use for, must use htmlFor

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

// exporting the code from App function
export default App;

//! Not part of the working app

// without jsx using reg javascript (very painful)
// function App() {
//   return React.createElement(
//     "div",
//     { className: "container" },
//     React.createElement("h1", {}, "My App")
//   );
// }

// setting variables (not used for project)
// const title = "Blog Post";
// const body = "This is my blog post";
// const comments = [
//   { id: 1, text: "Comment one" },
//   { id: 2, text: "Comment two" },
//   { id: 3, text: "Comment three" },
// ];

// const loading = false;
// const showComments = true;

// const commentBlock = (
//   <div className="comments">
//     <h3>Comments ({comments.length})</h3>
//     <ul>
//       {comments.map((comment, index) => (
//         <li key={index}>{comment.text}</li>
//       ))}
//     </ul>
//   </div>
// );

// if (loading) return <h1>Loading...</h1>;

//     return (
//     <div className="container">
//       <h1>{title.toUpperCase()}</h1>
//       <p>{body}</p>
//       <p>{5 + 5}</p>
//       <p>{Math.random() * (5 + 5)}</p>

//       {showComments && commentBlock}
//     </div>
//   ); // calling map on comments array-- map takes in a function. here we return jsx
// } // we call it comment and get the index. basically foreach comment we output a list item with the comment's text
// key on li for map makes it unique and stops console complaining
