import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  return (
    <div style={{ maxWidth: "350px", margin: "40px auto" }}>
      <h2 style={{ textAlign: "center" }}>LOGIN</h2>

      <input
        type="tel"
        placeholder="Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
      />

      <label>
        <input
          type="checkbox"
          checked={remember}
          onChange={(e) => setRemember(e.target.checked)}
        />{" "}
        Remember Me
      </label>

      <br />
      <br />

      <button
        style={{
          width: "100%",
          padding: "12px",
          fontSize: "16px",
        }}
      >
        LOGIN
      </button>

      <p style={{ textAlign: "center", marginTop: "15px" }}>
        Don't have an account?{" "}
        <Link to="/signup">REGISTER</Link>
      </p>

      <p style={{ textAlign: "center" }}>
        <a href="#">Forgot Password?</a>
      </p>

      <p style={{ textAlign: "center" }}>
        <a href="#">Customer Support</a>
      </p>
    </div>
  );
}
