import { Visibility } from '@mui/icons-material'
import './WidgetSm.css'

function WidgetSm() {
  return (
    <div className='WidgetSm'>
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItems">
            <img src="/src/assets/pic.jpg" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
                <span className="widgetSmUsername">Abdellah ab</span>
                <span className="widgetSmUserJob">Frontend Dev</span>
            </div>
            <button className="widgetSmButton">
                <Visibility className='widgetSmIcon'/> Display
            </button>
        </li>
        <li className="widgetSmListItems">
            <img src="/src/assets/pic.jpg" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
                <span className="widgetSmUsername">Abdellah ab</span>
                <span className="widgetSmUserJob">Frontend Dev</span>
            </div>
            <button className="widgetSmButton">
                <Visibility className='widgetSmIcon'/> Display
            </button>
        </li>
        <li className="widgetSmListItems">
            <img src="/src/assets/pic.jpg" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
                <span className="widgetSmUsername">Abdellah ab</span>
                <span className="widgetSmUserJob">Frontend Dev</span>
            </div>
            <button className="widgetSmButton">
                <Visibility className='widgetSmIcon'/> Display
            </button>
        </li>
        <li className="widgetSmListItems">
            <img src="/src/assets/pic.jpg" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
                <span className="widgetSmUsername">Abdellah ab</span>
                <span className="widgetSmUserJob">Frontend Dev</span>
            </div>
            <button className="widgetSmButton">
                <Visibility className='widgetSmIcon'/> Display
            </button>
        </li>
      </ul>
      
    </div>
  )
}

export default WidgetSm
