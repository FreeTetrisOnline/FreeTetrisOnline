// Tetris Game Selection Popup Component
// Using traditional CSS styles and HTML structure
import React, { useEffect } from "react";
import "./style.css";

// Main popup component
function IndexPopup() {
  useEffect(() => {
    try {
      const isDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      // Set background to dark if dark mode is detected
      if (isDarkMode) {
        document.body.style.backgroundColor = "#121212";
      } else {
        document.body.style.backgroundColor = "#ffffff";
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  // Play Classic Tetris
  const playClassicTetris = async () => {
    await chrome.windows.create({
      url: "https://onlinetetris.org/GoodOldTetris",
      type: "popup",
      width: 400,
      height: 620,
      left: window.screen.width - 500, // Display on the right side with 100px margin
      top: 100,
      focused: true,
    });
    window.close();
  };

  // Play PC Version Tetris
  const playPCTetris = async () => {
    await chrome.windows.create({
      url: "https://onlinetetris.org/tetris-pc.html",
      type: "popup",
      width: 400,
      height: 710,
      left: window.screen.width - 500, // Display on the right side with 100px margin
      top: 100,
      focused: true,
    });
    window.close();
  };

  return (
    <div className="tetris-popup">
      {/* Popup header section */}
      <div className="popup-header">
        <h1 className="popup-title">🎮 Classic Tetris Returns</h1>
        <p className="popup-subtitle">
          Free to Play · Ultimate Experience · Watch Preview & Start Now
        </p>
      </div>

      {/* Game options section */}
      <div className="game-options">
        {/* Classic Tetris option */}
        <div className="game-option">
          <div className="game-preview">
            <video
              className="game-video"
              src="http://onlinetetris.org/assets/images/good-old-tetris.mp4"
              autoPlay
              muted
              loop
              playsInline
              poster=""
            />
          </div>
          <div className="game-option-content">
            <div className="game-info">
              <div className="game-icon">🎯</div>
              <div className="game-details">
                <h3 className="game-title">🕹️ Classic Retro</h3>
                <p className="game-description">
                  Authentic 90s experience, awaken childhood memories
                </p>
                <span className="game-url">
                  Ultimate Nostalgia · Satisfying Clear
                </span>
              </div>
            </div>
            <button
              className="play-button classic-button"
              onClick={playClassicTetris}
              title="Experience classic Tetris instantly"
            >
              Play Now
            </button>
          </div>
        </div>

        {/* Modern PC Tetris option */}
        <div className="game-option">
          <div className="game-preview">
            <video
              className="game-video"
              src="http://onlinetetris.org/assets/images/tetris.mp4"
              autoPlay
              muted
              loop
              playsInline
              poster=""
            />
          </div>
          <div className="game-option-content">
            <div className="game-info">
              <div className="game-icon">💻</div>
              <div className="game-details">
                <h3 className="game-title">⚡ Modern Competitive</h3>
                <p className="game-description">
                  HD graphics, stunning effects, challenge the limits
                </p>
                <span className="game-url">
                  Premium Quality · Lightning Fast
                </span>
              </div>
            </div>
            <button
              className="play-button pc-button"
              onClick={playPCTetris}
              title="Challenge modern competitive Tetris"
            >
              Challenge
            </button>
          </div>
        </div>
      </div>

      {/* Popup footer section */}
      <div className="popup-footer">
        <div className="footer-info">
          <p className="footer-text">🔥 Choice of Millions Worldwide</p>
          <p className="footer-subtext">
            0s Start · No Download · Forever Free
          </p>
        </div>

        <div className="footer-buttons">
          <a
            href="https://www.onlinetetris.org/#leaderboard"
            target="_blank"
            rel="noopener noreferrer"
            className="official-link leaderboard-link"
            title="View global leaderboard and compete with world-class players"
          >
            🏆 Global Leaderboard
          </a>
        </div>

        <div className="footer-buttons">
          <a
            href="https://onlinetetris.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="official-link"
            title="Visit official website for more game modes and features"
          >
            🌐 Explore More →
          </a>
        </div>
      </div>
    </div>
  );
}

export default IndexPopup;
