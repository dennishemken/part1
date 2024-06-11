import { useState } from 'react'

// Button component
const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>{text}</button>
)

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
          <StatisticsLine text="good" value={props.good} />
          <StatisticsLine text="neutral" value={props.neutral} />
          <StatisticsLine text="bad" value={props.bad} />
          <tr>
            <td>all</td>
            <td>{props.good + props.neutral + props.bad}</td>
          </tr>
          <tr>
            <td>average</td>
            <td>{(props.good - props.bad) / (props.good + props.neutral + props.bad)}</td>
          </tr>
          <tr>
            <td>positive</td>
            <td>{(props.good / (props.good + props.neutral + props.bad)) * 100} %</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const StatisticsLine = (props) => (
  <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
  </tr>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handleClick={() => setGood(good + 1)} />
      <Button text="neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button text="bad" handleClick={() => setBad(bad + 1)} />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
