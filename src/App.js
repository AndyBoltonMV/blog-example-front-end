import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState();

  async function fetchReq() {
    const response = await fetch("http://localhost:5001/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
      }),
    });
    const data = await response.json();
    setMessage(data.msg);
  }

  return (
    <div className="App">
      <h1>{message}</h1>
      <button onClick={fetchReq}>Click Me!</button>
    </div>
  );
}

export default App;
