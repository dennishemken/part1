import { useState } from 'react'

const Statistics = (props) => {
  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  
  return (
    <div>
      <table>
        <tbody>
        <li>good {props.good}</li>
      <li>neutral {props.neutral}</li>
      <li>bad {props.bad}</li>
      <li>all {props.good + props.neutral + props.bad}</li>
      <li>average {(props.good - props.bad) / (props.good + props.neutral + props.bad)}</li>
      <li>positive {(props.good / (props.good + props.neutral + props.bad)) * 100} %</li>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App