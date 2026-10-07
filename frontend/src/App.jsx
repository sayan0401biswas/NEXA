import { useState } from "react";
import "./App.css";

function App() {
  const [listening, setListening] = useState(false);

  const toggleListening = () => {
    setListening(!listening);
  };

  return (
    <div className="nexa-app">
      <div className="top-bar">
        <div className="logo">NEXA</div>
        <div className="status">
          <span className="status-dot"></span>
          ONLINE
        </div>
      </div>

      <main className="main-content">
        <p className="welcome">WELCOME BACK</p>

        <h1>
          Hello, I'm <span>NEXA</span>
        </h1>

        <p className="subtitle">
          Your Personal AI Assistant
        </p>

        <div
          className={`orb ${listening ? "listening" : ""}`}
          onClick={toggleListening}
        >
          <div className="orb-core"></div>
          <div className="orb-ring ring-one"></div>
          <div className="orb-ring ring-two"></div>
          <div className="orb-ring ring-three"></div>
        </div>

        <p className="instruction">
          {listening ? "I'm listening..." : "Tap the orb to talk"}
        </p>

        <div className="quick-actions">
          <button>🎙️ Voice</button>
          <button>🧠 Memory</button>
          <button>⚙️ Settings</button>
        </div>
      </main>

      <div className="footer">
        NEXA • Personal AI Assistant
      </div>
    </div>
  );
}

export default App;