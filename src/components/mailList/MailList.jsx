import "./mailList.css";

function MailList () {
 return(
    <div className="mail">
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">
        sign up and we'll send the best deals to you
      </span>
      <div className="mailIC">
         <input type="text" placeholder="your Email" />
         <button>Subscribe</button>
      </div>
    </div>
 );
}

export default MailList;