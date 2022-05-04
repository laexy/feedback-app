import { createContext, useState } from "react";

const FeedbackContext = createContext();

// since we aren't passing props we need to wrap things in a provider
// children are components that need access to our context
// any functions are passed into a prop of 'value'
export const FeedbackProvider = ({children}) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This item is from context',
      rating: 10
    }
  ])

  return <FeedbackContext.Provider value = {{
    feedback,
  }}>
    {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext