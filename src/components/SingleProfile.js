import React from 'react'
import { useState } from 'react'
import BarChart from './charts/BarChart'

const SingleProfile = () => {
  const [powerData, setPowerData] = useState({
    labels: ['intelligence', 'strength', 'speed', 'durability', 'power', 'combat'],
    datasets: [{
      label: "Power Level",
      data: [
        94, 
        100, 
        100,
        100,
        100,
        85
      ]
    }]
  })
  return (
    <div>
      <BarChart chartData={powerData} />
    </div>
  )
}

export default SingleProfile