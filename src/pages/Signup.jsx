import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSignup = () => {
    if (!mobile || !password || !confirmPassword) {
      alert("Please fill all required fields");
      return;
    }

    if (mobile.length !== 10) {
      alert("Enter a valid 10-digit mobile number");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (!agree) {
      alert("Please accept Terms & Conditions");
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
          width: "360px",
          background: "#161b22",
          borderRadius: "15px",
          padding: "25px",
          boxShadow: "0 0 20px rgba(0,0,0,.5)",
          color: "#fff",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "25px",
            color: "#00e676",
          }}
        >
          Create Account
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
            background: "#21262d",
            color: "#fff",
            boxSizing: "border-box",
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
            background: "#21262d",
            color: "#fff",
            boxSizing: "border-box",
          }}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "8px",
            border: "1px solid #333",
            background: "#21262d",
            color: "#fff",
            boxSizing: "border-box",
          }}
        />

        <input
          type="text"
          placeholder="Referral Code (Optional)"
          value={referralCode}
          onChange={(e) => setReferralCode(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "8px",
            border: "1px solid #333",
            background: "#21262d",
            color: "#fff",
            boxSizing: "border-box",
          }}
        />

        <label style={{ fontSize: "14px" }}>
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />{" "}
          I agree to the Terms & Conditions
        </label>

        <br />
        <br />

        <button
          onClick={handleSignup}
          style={{
            width: "100%",
            padding: "13px",
            background: "#00c853",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          SIGN UP
        </button>

        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
            color: "#ccc",
          }}
        >
          Already have an account?{" "}
          <Link
            to="/login"
            style={{
              color: "#00e676",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
