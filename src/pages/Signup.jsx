import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [agree, setAgree] = useState(false);

  return (
    <div style={{ maxWidth: "350px", margin: "40px auto" }}>
      <h2 style={{ textAlign: "center" }}>Create Account</h2>

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

      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
      />

      <input
        type="text"
        placeholder="Referral Code (Optional)"
        value={referralCode}
        onChange={(e) => setReferralCode(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
      />

      <label>
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
        style={{
          width: "100%",
          padding: "12px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        SIGN UP
      </button>

      <p style={{ textAlign: "center", marginTop: "20px" }}>
        Already have an account?{" "}
        <Link to="/login">Login</Link>
      </p>
    </div>
  );
}
