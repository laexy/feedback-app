// this is our main app component
// components can be classes or functions. classes are old-- use hooks and functions now

// without jsx just plain javascript
import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";

import FeedbackForm from "./components/FeedbackForm";

import FeedbackData from "./data/FeedbackData";

// want to return jsx (html into javascript)
function App() {
  // can only have one element - solution is div or fragment <></>
  // cannot use class in jsx, must use className
  // cannot use for, must use htmlFor

  const [feedback, setFeedback] = useState(FeedbackData);

  // want this here because this is where we setfeedback
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
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
