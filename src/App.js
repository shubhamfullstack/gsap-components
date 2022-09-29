import { useState } from "react";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";

function App() {
  const [visibility, setVisibility] = useState(false)

  const toggleLoginVisibility = () => {
    setVisibility(!visibility);
  }

  return (
    <div>
      <Header onLogIn={toggleLoginVisibility} />
      <Modal visibility={visibility} onSignIn={toggleLoginVisibility}/>
    </div>
  );
}

export default App;
