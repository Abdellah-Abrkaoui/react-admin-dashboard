import './newUser.css'

function NewUser() {
  return (
    <div className='newuser'>
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItems">
          <label>Username</label>
          <input type="text" placeholder='abdulab' />
        </div>
        <div className="newUserItems">
          <label>Full Name</label>
          <input type="text" placeholder='abdul ab' />
        </div>
        <div className="newUserItems">
          <label>Email</label>
          <input type="email" placeholder='abdulab@gmail.com' />
        </div>
        <div className="newUserItems">
          <label>Password</label>
          <input type="password" placeholder='abdulab' />
        </div>
        <div className="newUserItems">
          <label>Phone</label>
          <input type="text" placeholder='+1 234 256 776' />
        </div>
        <div className="newUserItems">
          <label>Adress</label>
          <input type="text" placeholder='New York | USA' />
        </div>
        <div className="newUserItems">
          <label>Gender</label>
          <div className="genderWrapper">
            <input type="radio" name="Male" id="Male" />
            <label for="Male">Male</label>
            <input type="radio" name="Female" id="Female" />
            <label for="Female">Female</label>
          </div>
        </div>
        <div className="newUserItems">
          <label for="active">Active</label>
          <select name="active" id="active" className='newUserSelect'>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className='newuserbtn'>Create User</button>
      </form>
    </div>
  )
}

export default NewUser
