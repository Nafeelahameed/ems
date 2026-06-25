import { useState } from "react";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "") {
      alert("Please enter your email.");
      return;
    }

    setMessage("Password reset link has been sent to your email.");
    setEmail("");
  };

  return (
    <div className="forgot-container">
      <div className="forgot-box">
        <h2>Forgot Password</h2>
        <p className="subtitle">
          Enter your registered email address.
        </p>

        <form onSubmit={handleSubmit}>
          <label>Email Address</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button type="submit">
            Send Reset Link
          </button>
        </form>

        {message && (
          <p className="success-message">{message}</p>
        )}

        <Link to="/" className="back-btn">
          ← Back to Login
        </Link>
      </div>
    </div>
  );
}

export default ForgotPassword;