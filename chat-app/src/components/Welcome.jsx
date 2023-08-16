import LogIn from "./LogIn";

function Welcome({}) {

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
      <LogIn />
    </div>
  );
}

export default Welcome;
