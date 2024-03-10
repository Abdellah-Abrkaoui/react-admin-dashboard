import './chart.css'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


function Chart({title , data  , grid , dataKey}) {
  return (
    <div className='chart'> 
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4/1} >
        <LineChart data={data} style={{cursor :"pointer"}}>
        <Tooltip />

        {grid && <CartesianGrid strokeDasharray="3 3" />}
          <XAxis dataKey="name" />
          <Line type="monotone" dataKey={dataKey} stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
