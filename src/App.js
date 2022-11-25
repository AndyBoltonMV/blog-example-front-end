import { useState } from "react";
import { fetchReq } from "./utils/requests";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState();

  return (
    <div className="App">
      <h1>{message}</h1>
      <button onClick={() => fetchReq(username, setMessage)}>Click Me!</button>
    </div>
  );
}

export default App;
