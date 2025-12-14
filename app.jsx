// src/App.jsx
import { useState } from "react";
import Wheel from "./components/Wheel";

export default function App() {
  const [selectedSegment, setSelectedSegment] = useState(null);

  return (
    <div style={{ padding: 24 }}>
      <h1>Life Wheel</h1>

      <Wheel onSelectSegment={setSelectedSegment} />

      {selectedSegment !== null && (
        <p>Selected segment: {selectedSegment + 1}</p>
      )}
    </div>
  );
}
