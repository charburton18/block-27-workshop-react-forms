import {useState} from "react"

const Authenticate = ({token}) => {
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);
  const [name, setName] = useState("");

  const handleClick = async () => {
    try {
    const response = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate', 
    { 
      method: "GET", 
      headers: { 
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}` 
      }
    })
    const result = await response.json();
    console.log(result);
    setSuccessMessage(result.message);
    setName(result.data.username);
    }
    catch (error) {
      setError(error.message);
    }
  }
  return (
    <div id="authInfo">
      <h2>Authenticate</h2>
      {successMessage && <p>{successMessage} Welcome, {name}!</p>}
      {error && <p>{error}</p>}
      <button onClick={handleClick}>Authenticate Token</button>
    </div>
  )
}

export default Authenticate