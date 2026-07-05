import React from "react";
import { useState } from "react";
import GetShortCode from "./getShortCodes.js";
import "./LandingPage.css";

export default function LandingPage() {
  const [text, setText] = useState("");

  const [shortCode, setShortCode] = useState("");

  const handleSubmit = async () => {
    const data = await GetShortCode(text);
    setShortCode(data);
    console.log(data);
  };
  return (
    <div className="container">
      <div className="card">
        <h1 className="title">URL Shortner</h1>
        <p className="subtitle">
          Convert long URLs into short, shareable links.
        </p>
        <input
          className="url-input"
          placeholder="Enter Long URL...."
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></input>

        <button className="submit-btn" onClick={handleSubmit}>
          Submit
        </button>
        <h3 className="result">{shortCode}</h3>
      </div>
    </div>
  );
}
