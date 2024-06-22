import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [colors, setColors] = useState([]);
  const [selectedColor, setSelectedColor] = useState(null);
// Getting the colors from the API
  useEffect(() => {
    fetch("https://api.prolook.com/api/colors/prolook")
      .then((response) => response.json())
      .then((data) => setColors(data.colors));
  }, []);
// Selecting the Color from the API 
  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="container">
      <h1 className="header">Colors:</h1>
      <div className="content">
        <div className="color-list">
          {colors.map((color) => (
            <div key={color.id} className="color-item">
              <span>{color.name}</span>
              <button onClick={() => handleColorSelect(color)}>Preview</button>
            </div>
          ))}
        </div>
        {selectedColor && (
          <div className="color-preview">
            <div
              style={{ backgroundColor: `#${selectedColor.hex_code}` }}
              className="color-box"
            >
              <div className="color-info">
                <p>name: {selectedColor.name}</p>
                <p>hex: #{selectedColor.hex_code}</p>
                <p>color code: {selectedColor.color_code}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
