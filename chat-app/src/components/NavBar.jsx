import LogIn from "./LogIn";

function NavBar({ handleLogIn }) {
  return (
    <nav className="NavBar">
      <h2>Chat App</h2>
      <LogIn handleLogIn={handleLogIn}/>
    </nav>
  );
}

export default NavBar;
