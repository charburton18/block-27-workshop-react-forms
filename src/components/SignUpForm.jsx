import { useState } from "react"


const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Hello");
  }

  return (
    <>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username: <input value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password: <input value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button>Submit</button>
      </form>
    </>
  )
}

export default SignUpForm