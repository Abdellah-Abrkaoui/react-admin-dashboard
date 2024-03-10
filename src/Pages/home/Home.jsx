import Chart from '../../Components/chart/Chart'
import Featured from '../../Components/featured/Featured'
import './home.css'
import {userData} from '../../dummyData'
import WidgetSm from '../../Components/widgetSm/WidgetSm'
import WidgetLg from '../../Components/widgetLg/WidgetLg'

function Home() {
  return (
    <div className='home'>
      <Featured/>
      <Chart title="Users Analytics" data={userData} dataKey="active Users" grid />
      <div className="widgetContainer">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  )
}

export default Home
