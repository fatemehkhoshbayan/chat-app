import React, { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

function SendMessage() {
  const [chatText, setChatText] = useState("");

  const sendMessage = async (event) => {
    event.preventDefault();
    event.preventDefault();
    if (chatText.trim() === "") {
      alert("Enter valid message");
      return;
    }
    const { uid, displayName, photoURL } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: chatText,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid,
    });
    setChatText("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <form className="send-message" onSubmit={(e) => sendMessage(e)}>
      <label htmlFor="chatBox-Holder" hidden>
        Type your message
      </label>
      <input
        id="chatBox-Holder"
        className="form-input__input"
        type="text"
        placeholder="Type Message"
        value={chatText}
        onChange={(e) => setChatText(e.target.value)}
      ></input>
      <button type="submit">Send</button>
    </form>
  );
}

export default SendMessage;
