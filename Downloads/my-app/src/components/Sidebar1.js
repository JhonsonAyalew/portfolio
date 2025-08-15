// Sidebar.jsx
import { FaUser, FaCode, FaChartLine, FaEnvelope, FaBug, FaTools } from 'react-icons/fa';
import HackerButton from './HackerButton';
import './HackerButton.css';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="profile-section">
        <div className="logo-circle">J-12</div>
      </div>

      <div className="button-group">
        <HackerButton icon={FaUser} label="About Me" />
        <HackerButton icon={FaCode} label="Projects" />
        <HackerButton icon={FaChartLine} label="Trading Strategy" />
        <HackerButton icon={FaEnvelope} label="Contact" />
        <HackerButton icon={FaTools} label="Skills" />
        <HackerButton icon={FaBug} label="Bug Bounty" />
      </div>
    </div>
  );
}
