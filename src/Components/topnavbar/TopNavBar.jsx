import "./topnavbar.css"
import { NotificationsNone, Language, Settings } from '@mui/icons-material'
function TopNavBar() {
    return (
        <div className="topnavbar">
            <div className="Wrapper">
                <div className="left">
                    <h1>Abdellah Admin</h1>
                </div>
                <div className="right">
                    <div className="Icons">
                        <NotificationsNone />
                        <span className="badge">2</span>
                    </div>
                    <div className="Icons">
                        <Language />
                        <span className="badge">1</span>
                    </div>
                    <div className="Icons">
                        <Settings />
                    </div>
                    <div className="pic">
                        <img src="/src/assets/pic.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopNavBar
