import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import Member from "./components/member";
import useState from "react";

function App() {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    const memberList = [{ firstName: "Mark", lastName: "Bil", email: "max@wow.dk" }];
  }, []);

  return (
    <>
      <header>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>RACE Your React 🎉</h1>
      </header>
      <Member member={{ firstName: "Mark", lastName: "Bil", email: "max@wow.dk" }} />
      <Member member={{ firstName: "Fillipa", lastName: "idk", email: "fil@ipa.dk" }} />
    </>
  );
}

export default App;
