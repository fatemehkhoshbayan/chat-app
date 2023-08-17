import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Message({ chatText }) {
  const[user] = useAuthState(auth);

  return (
    <div className={`chat-bubble ${chatText.uid === user.uid ? "right" : ""}`}>
      <img
        className="chat-bubble__left"
        src={chatText.avatar}
        alt="user avatar"
      />
      <div className="chat-bubble__right">
        <p className="user-name">{chatText.name}</p>
        <p className="user-message">{chatText.text}</p>
      </div>
    </div>
  );
}

export default Message;
