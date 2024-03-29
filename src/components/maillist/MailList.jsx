import "./maillist.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailList">Save time, save money!</h1>
      <span className="mailDesc">Sign up and we'll send the best deals to you</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Enter your email" />
        <button>Submit</button>
      </div>
    </div>
  )
}

export default MailList
