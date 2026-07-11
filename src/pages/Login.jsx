import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    if (!mobile || !password) {
      alert("Please enter Mobile Number and Password");
      return;
    }

    navigate("/dashboard");
  };

  return (
    <div
      style={{
        background: "#0d1117",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "#161b22",
          width: "350px",
          padding: "25px",
          borderRadius: "15px",
          boxShadow: "0 0 15px rgba(0,0,0,0.5)",
          color: "white",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          LOGIN
        </h2>

        <input
          type="tel"
          placeholder="Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "8px",
            border: "1px solid #333",
            background: "#222",
            color: "white",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "8px",
            border: "1px solid #333",
            background: "#222",
            color: "white",
          }}
        />

        <label style={{ fontSize: "14px" }}>
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
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "12px",
            background: "#00c853",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          LOGIN
        </button>

        <p style={{ textAlign: "center", marginTop: "15px" }}>
          Don't have an account?{" "}
          <Link to="/signup">REGISTER</Link>
        </p>

        <p style={{ textAlign: "center" }}>
          <a href="#" style={{ color: "#58a6ff" }}>
            Forgot Password?
          </a>
        </p>

        <p style={{ textAlign: "center" }}>
          <a href="#" style={{ color: "#58a6ff" }}>
            Customer Support
          </a>
        </p>
      </div>
    </div>
  );
          }
