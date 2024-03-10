import './sidebar.css'
import {HomeRounded , BarChartRounded , TrendingUpRounded , PeopleOutlineRounded , StorefrontRounded , PaidRounded , MailRounded , DynamicFeedRounded , ChatBubbleOutlineRounded ,ShoppingBagRounded , LegendToggleRounded} from '@mui/icons-material'
import { Link } from 'react-router-dom'

function SideBAr() {
  return (
    <div className='sidebar'>
      <div className="wrapper">
        <div className="sidebarItems">
            <h3>Dashboard</h3>
            <ul>
              <Link to='/'>
                <li className="items active"><HomeRounded className='icon'/> Home</li></Link>
                <li className="items"><BarChartRounded className='icon'/> Analytics</li>
                <li className="items"><TrendingUpRounded className='icon'/> Sales</li>
            </ul>
        </div>
        <div className="sidebarItems">
            <h3>Quick Menu</h3>
            <ul>
                <Link to="/users">
                <li className="items "><PeopleOutlineRounded className='icon'/> Users</li>
                </Link>
                <Link to='/products'>
                <li className="items"><StorefrontRounded className='icon'/> Products</li>
                </Link>
                <li className="items"><PaidRounded className='icon'/> Transactions</li>
            </ul>
        </div>
        <div className="sidebarItems">
            <h3>Notifications</h3>
            <ul>
                <li className="items "><MailRounded className='icon'/> Mail</li>
                <li className="items"><DynamicFeedRounded className='icon'/> Feedbacks</li>
                <li className="items"><ChatBubbleOutlineRounded className='icon'/> Messages</li>
            </ul>
        </div>
        <div className="sidebarItems">
            <h3>Staff</h3>
            <ul>
                <li className="items "><ShoppingBagRounded className='icon'/> Manage</li>
                <li className="items"><BarChartRounded className='icon'/> Analytics</li>
                <li className="items"><LegendToggleRounded className='icon'/> Reports</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default SideBAr
