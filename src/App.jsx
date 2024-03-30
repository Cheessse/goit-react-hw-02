import { useEffect, useState } from 'react'
import './App.css'
import Description from './components/Description/Description'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'
import Notification from './components/Notification/Notification'

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem('feedback-quantity')
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback)
    } else {
      return {
      good: 0,
      neutral: 0,
      bad: 0
      }
    }
  })

  useEffect(() => {
    window.localStorage.setItem('feedback-quantity', JSON.stringify(feedback))
  }, [feedback])

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0
    })
  }
  
const updateFeedback = (feedbackType) => {
  setFeedback({
    ...feedback,
    [feedbackType]: feedback[feedbackType] + 1,
  });
};
  
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positiveRatio = Math.round((feedback.good / totalFeedback) * 100);





  return (
    <>
      <Description />
      <Options  updateFeedback={updateFeedback}
                resetFeedback={resetFeedback}
                totalFeedback={totalFeedback} />
      {totalFeedback > 0 ? (<Feedback good={feedback.good}
                                      neutral={feedback.neutral}
                                      bad={feedback.bad}
                                      totalFeedback={totalFeedback}
                                      positiveRatio={positiveRatio} />) : (<Notification />)}
    </>
  )
}

export default App
