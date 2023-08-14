import LogIn from "./LogIn";

function Welcome({ handleLogIn }) {

// const chatIcon = required("../img/chat-icon-communication.jpg")

  return (
    <div className="Welcome">
      <h2>Welcome to the Chat Application</h2>
      <figure className="img">
        <img
          src={"static/imges/chat-icon-communication.png"}
          alt="chat"
          width="200"
          height="184"
        />
      </figure>
      <p>Sign in with Google to have chit chat</p>
      <LogIn handleLogIn={handleLogIn} />
    </div>
  );
}

export default Welcome;
