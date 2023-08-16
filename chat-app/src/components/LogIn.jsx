import GoogleButton from "react-google-button";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

function LogIn() {
  const [user] = useAuthState(auth);

  const handleLogIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const handleLogOut = () => {
    auth.signOut();
  };

  return (
    <div className="LogIn">
      {!user ? (
        <GoogleButton
          type="dark"
          label="Sing in with Google"
          onClick={handleLogIn}
        />
      ) : (
        <GoogleButton
          type="dark"
          label="Sing out with Google"
          onClick={handleLogOut}
        />
      )}
    </div>
  );
}

export default LogIn;
