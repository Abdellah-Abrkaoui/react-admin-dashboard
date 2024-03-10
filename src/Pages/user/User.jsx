import {CalendarMonthOutlined, DriveFolderUploadOutlined, EmailOutlined, LocalPhoneOutlined, LocationOnOutlined, Person2Outlined } from '@mui/icons-material'
import './user.css'
import { Link } from 'react-router-dom'

function User() {
    return (
        <div className='user'>
            <div className="TopWrapper">
                <h1 className="userTitle">Edite User</h1>
                <div className="secondWrapper">
                    <Link to="/newUser">
                    <button className='edituser'>Create</button>
                    </Link>
                </div>
            </div>

            <div className="BottomWrapper">
                <div className="ShowUsernfos">
                    <div className="Showtop">
                        <img src="/src/assets/pic.jpg" alt="" className="widgetSmImg" />
                        <div className="ShowTopInfos">
                            <span className="Username">Abdellah ab</span>
                            <span className="UserJob">Frontend Dev</span>
                        </div>
                    </div>
                    <div className="ShowBottom">
                        <span className="ShowBottomTitle">Account Details</span>
                        <div className="ShowBottomInfos">
                            <div className="InfosContainer">
                                <Person2Outlined className='InfosIcons'/>
                                <span>abdellahab</span>
                            </div>
                            <div className="InfosContainer">
                                <CalendarMonthOutlined className='InfosIcons'/>
                                <span>10.10.2000</span>
                            </div>
                            <span className="ShowBottomTitle">Contact Details</span>
                            <div className="InfosContainer">
                                <LocalPhoneOutlined className='InfosIcons'/>
                                <span>+1 234 673 773</span>
                            </div>
                            <div className="InfosContainer">
                                <EmailOutlined className='InfosIcons'/>
                                <span>abdellahab@gmail.com</span>
                            </div>
                            <div className="InfosContainer">
                                <LocationOnOutlined className='InfosIcons'/>
                                <span>New York | USA</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="EditUserInfos">
                    <span className="EditUserInfosTitle">Edit</span>
                    <div className="EditUserInfosWrapper">
                        <div className="leftwrapper">
                            <form className="leftwrapperForm">
                                <div className="formItems">
                                    <label>Username</label>
                                    <input type="text" placeholder='abdellahab'/>
                                </div>
                                <div className="formItems">
                                    <label>Full Name</label>
                                    <input type="text" placeholder='abdellah ab'/>
                                </div>
                                <div className="formItems">
                                    <label>Email</label>
                                    <input type="text" placeholder='abdellahab@gmail.com'/>
                                </div>
                                <div className="formItems">
                                    <label>Adresse</label>
                                    <input type="text" placeholder='New York | USA'/>
                                </div>
                                <div className="formItems">
                                    <label>Phone</label>
                                    <input type="text" placeholder='+1 234 673 773'/>
                                </div>
                            </form>
                        </div>
                        <div className="rightwrapper">
                            <div className="ImageContainer">
                                <img src="/src/assets/pic.jpg" alt="" className='rightImg' />
                                <input type="file"  id='file' style={{display : "none"}}/>
                                <label htmlFor="file" className='updateIcon'><DriveFolderUploadOutlined /></label>
                            </div>
                            <button className='UpdateUserBtn'>Update</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default User
