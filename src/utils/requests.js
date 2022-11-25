async function fetchReq(username, setMessage) {
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

export { fetchReq };
