import GoogleButton from "react-google-button";

function LogIn({handleLogIn}) {
  return (
    <div className="LogIn">
      <GoogleButton type="dark" onClick={handleLogIn} />
    </div>
  );
}

export default LogIn;
