// HackerButton.jsx
import React from 'react';
import './HackerButton.css';

export default function HackerButton({ icon: Icon, label }) {
  return (
    <div className="hacker-wrapper">
      <button className="hacker-button">
        <Icon className="hacker-icon" />
        <span>{label}</span>
      </button>
    </div>
  );
}
