import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard</h1>

      <p>Welcome to LG Club</p>

      <button>Logout</button>

      <br /><br />

      <Link to="/login">Back to Login</Link>
    </div>
  );
}
